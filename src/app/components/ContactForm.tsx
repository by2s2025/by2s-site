'use client';

import { useState, useEffect, useMemo } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useSearchParams } from 'next/navigation';
import { User, Music, Building2, Globe, MessageCircle } from 'lucide-react';

const typeOptions = [
  { value: 'student', label: 'Student Sign-Up', icon: User },
  { value: 'leader', label: 'Musical/Craft Leader', icon: Music },
  { value: 'partner', label: 'Nursing Home Partner', icon: Building2 },
  { value: 'global', label: 'Global Partner', icon: Globe },
  { value: 'other', label: 'Other', icon: MessageCircle },
];

type ContactType = 'student' | 'leader' | 'partner' | 'global' | 'other';

export default function ContactForm() {
  const searchParams = useSearchParams();
  const typeInstructions = useMemo(() => ({
    student: {
      text: "Tell us a bit about yourself! Please include your school, grade, and why you're interested in joining.",
      icon: <User className="w-6 h-6 text-blue-500 mr-2" />,
      subject: 'Student Sign-Up',
    },
    leader: {
      text: "Let us know your experience with music or crafts, and how you'd like to contribute as a leader.",
      icon: <Music className="w-6 h-6 text-pink-500 mr-2" />,
      subject: 'Musical/Craft Leader',
    },
    partner: {
      text: "Please share your organization's name, location, and how you'd like to partner with us.",
      icon: <Building2 className="w-6 h-6 text-amber-600 mr-2" />,
      subject: 'Nursing Home Partner',
    },
    global: {
      text: 'Tell us about your organization and how you envision collaborating with BY2S globally.',
      icon: <Globe className="w-6 h-6 text-green-600 mr-2" />,
      subject: 'Global Partner',
    },
    other: {
      text: 'Please describe your inquiry or message.',
      icon: <MessageCircle className="w-6 h-6 text-gray-500 mr-2" />,
      subject: '',
    },
  }), []);
  const initialType: ContactType = (searchParams?.get('type') && typeOptions.some(opt => opt.value === searchParams.get('type'))
    ? searchParams.get('type')
    : 'student') as ContactType;
  const [selectedType, setSelectedType] = useState<ContactType>(initialType);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    confirmEmail: '',
    subject: '',
    message: '',
    website: '',
  });
  const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [recaptchaKey, setRecaptchaKey] = useState<string>('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!key) {
      console.error('reCAPTCHA site key is not configured');
      setErrorMessage('Contact form is not properly configured. Please try again later.');
    }
    setRecaptchaKey(key || '');
  }, []);

  useEffect(() => {
    // Set subject based on type
    if (selectedType === 'other') {
      setFormData(prev => ({ ...prev, subject: 'Other: Tell us more about your inquiry...' }));
    } else {
      setFormData(prev => ({ ...prev, subject: typeInstructions[selectedType].subject }));
    }
  }, [selectedType, typeInstructions]);

  const validateEmail = (email: string) => {
    // RFC 5322 compliant email regex
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    
    // Additional checks
    if (!email) return false;
    if (email.length > 254) return false; // RFC 5321
    if (email.split('@')[0].length > 64) return false; // RFC 5321
    
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (name === 'email' || name === 'confirmEmail') {
      if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address (e.g., name@domain.com)');
      } else if (name === 'confirmEmail' && value !== formData.email) {
        setEmailError('Email addresses do not match');
      } else {
        setEmailError('');
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!recaptchaKey) {
      setErrorMessage('Contact form is not properly configured. Please try again later.');
      return;
    }

    if (!recaptchaValue) {
      setErrorMessage('Please complete the CAPTCHA');
      return;
    }

    if (!validateEmail(formData.email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (formData.email !== formData.confirmEmail) {
      setEmailError('Email addresses do not match');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken: recaptchaValue,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setStatus('success');
      setFormData({ name: '', email: '', confirmEmail: '', subject: '', message: '', website: '' });
      setRecaptchaValue(null);
    } catch {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!recaptchaKey) {
    return (
      <div className="max-w-2xl mx-auto p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
        <div className="text-red-600 text-center">
          Contact form is temporarily unavailable. Please try again later.
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white/90 backdrop-blur-sm rounded-lg shadow-sm">
      {/* Type selector */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-3 justify-center">
          {typeOptions.map(opt => (
            <button
              type="button"
              key={opt.value}
              className={`flex items-center gap-2 px-4 py-2 rounded-full border transition-colors text-sm font-medium shadow-sm
                ${selectedType === opt.value ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
              onClick={() => setSelectedType(opt.value as ContactType)}
              aria-pressed={selectedType === opt.value}
            >
              <opt.icon className="w-5 h-5" />
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      {/* Instructional div */}
      <div className="flex items-center bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
        {typeInstructions[selectedType].icon}
        <span className="text-gray-700 text-sm">{typeInstructions[selectedType].text}</span>
      </div>
      {status === 'success' ? (
        <div className="bg-green-50 text-green-700 p-6 rounded-lg mb-6 border border-green-100">
          <h3 className="text-xl font-playfair font-medium mb-2">Thank You!</h3>
          <p>Your message has been sent successfully. We&apos;ll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Honeypot field: visually hidden from users */}
          <div style={{ display: 'none' }} aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={formData.website || ''}
              onChange={handleChange}
              className="text-gray-900"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleEmailChange}
                className={`w-full px-4 py-2 rounded-md border ${
                  emailError ? 'border-red-300' : 'border-gray-300'
                } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900`}
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmEmail" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Email
            </label>
            <input
              type="email"
              id="confirmEmail"
              name="confirmEmail"
              required
              value={formData.confirmEmail}
              onChange={handleEmailChange}
              className={`w-full px-4 py-2 rounded-md border ${
                emailError ? 'border-red-300' : 'border-gray-300'
              } focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900`}
              placeholder="Confirm your email address"
            />
            {emailError && (
              <p className="mt-1 text-sm text-red-600">{emailError}</p>
            )}
          </div>

          {/* Subject field: locked unless 'other' */}
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900"
              placeholder="Subject"
              disabled={selectedType !== 'other'}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={8}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors text-gray-900"
              placeholder="Your message here..."
            />
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={recaptchaKey}
              onChange={(value) => setRecaptchaValue(value)}
            />
          </div>

          {errorMessage && (
            <div className="text-red-600 text-sm bg-red-50 p-4 rounded-md border border-red-100">
              {errorMessage}
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading' || !!emailError}
            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      )}
    </div>
  );
} 
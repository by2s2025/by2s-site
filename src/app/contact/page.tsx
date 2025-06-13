import ContactForm from '../components/ContactForm';
import PageHeader from '../components/PageHeader';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-playfair font-medium text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Have questions or want to get involved? We&apos;d love to hear from you.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
} 
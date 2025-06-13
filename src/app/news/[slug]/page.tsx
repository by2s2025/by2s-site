import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';

interface NewsPost {
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

async function getNewsPost(slug: string): Promise<NewsPost | null> {
  const newsDirectory = path.join(process.cwd(), 'src/content/news');
  const filePath = path.join(newsDirectory, `${slug}.json`);

  try {
    const fileContents = await fs.promises.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    return null;
  }
}

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const newsDirectory = path.join(process.cwd(), 'src/content/news');
  const files = await fs.promises.readdir(newsDirectory);
  
  return files
    .filter(file => file.endsWith('.json'))
    .map(file => ({
      slug: file.replace(/\.json$/, ''),
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const newsDirectory = path.join(process.cwd(), 'src/content/news');
  const filePath = path.join(newsDirectory, `${params.slug}.json`);

  if (!fs.existsSync(filePath)) {
    return {
      title: 'Post Not Found',
    };
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = JSON.parse(fileContents);

  return {
    title: data.title,
    description: data.excerpt,
    openGraph: {
      title: data.title,
      description: data.excerpt,
      type: 'article',
      publishedTime: data.date,
      authors: ['BY2S'],
    },
  };
}

export default async function NewsPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getNewsPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="prose prose-lg mx-auto px-4 py-8">
      <h1>{post.title}</h1>
      <div className="text-gray-500 mb-8">
        {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </div>
      <div className="whitespace-pre-wrap">
        {post.content}
      </div>
    </article>
  );
} 
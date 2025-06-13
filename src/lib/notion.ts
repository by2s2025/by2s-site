import { Client } from '@notionhq/client';

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export async function getNewsPosts() {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.Title.title[0].plain_text,
    date: page.properties.Date.date.start,
    slug: page.properties.Slug.rich_text[0].plain_text,
    content: page.properties.Content.rich_text[0].plain_text,
    image: page.properties.Image.files[0]?.file.url,
  }));
}

export async function getNewsPostBySlug(slug: string) {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    filter: {
      property: 'Slug',
      rich_text: {
        equals: slug,
      },
    },
  });

  if (response.results.length === 0) {
    return null;
  }

  const page = response.results[0];
  return {
    id: page.id,
    title: page.properties.Title.title[0].plain_text,
    date: page.properties.Date.date.start,
    slug: page.properties.Slug.rich_text[0].plain_text,
    content: page.properties.Content.rich_text[0].plain_text,
    image: page.properties.Image.files[0]?.file.url,
  };
} 
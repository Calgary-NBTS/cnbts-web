import { PortableTextBlock } from 'sanity';
import toMarkdown from '@sanity/block-content-to-markdown';

const serializers = {
  types: {

  },
};

export function portableTextToMarkdown(content: PortableTextBlock[]): string {

  return toMarkdown(content, { serializers }) as string;
}

export function convertTZ(date: string | Date, tzString: string): Date {
  return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
}

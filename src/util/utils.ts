import { PortableTextBlock } from 'sanity';
import toMarkdown from '@sanity/block-content-to-markdown';

const serializers = {
  types: {

  },
};

export function portableTextToMarkdown(content: PortableTextBlock[]): string {

  return toMarkdown(content, { serializers }) as string;
}

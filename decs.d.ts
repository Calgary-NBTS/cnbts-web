import { PortableTextBlock } from 'next-sanity';

declare module "@sanity/block-content-to-markdown" {
  export function toMarkdown(any: PortableTextBlock[]): string;

}
f
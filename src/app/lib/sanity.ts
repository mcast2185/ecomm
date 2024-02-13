import {createClient} from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'cucl3rl7',
  dataset: 'production',
  apiVersion: '2022-03-07',
  token: 'skX13NcZnwwCEavtqNYwTXGjIls4oOYVFVrtajB9raJlvaYlc701SJiOUnlamWCMIblFdjSeGcQFy2dsuKWAa0EOq9rRYTWbQMmZlcnzOkH8C8N7KwGdrQwDr9F3p4Pax4HiY57P0CB1wPDUzTe0j82tnw1aJEkQ412f04TStwi0mRnFzPdz',
  useCdn: true
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
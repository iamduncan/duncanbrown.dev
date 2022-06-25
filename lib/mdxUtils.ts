import fs from 'fs';
import { join } from 'path';

export const POSTS_PATH = join(process.cwd(), '_posts');

export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  .filter((path) => /\.(md|mdx)?$/.test(path));

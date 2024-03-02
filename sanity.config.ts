import { defineConfig } from 'sanity';
import { presentationTool } from 'sanity/presentation'
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schema } from './src/lib/sanity/schema';
import { projectId, dataset, previewSecretId } from './src/lib/sanity/config';
import settings from './src/lib/sanity/schemas/settings';
import { locate } from './src/lib/sanity/plugins/locate';
import { pageStructure, singletonPlugin } from './src/lib/sanity/plugins/settings';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { table } from '@sanity/table';
import { codeInput } from '@sanity/code-input';

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ['post'];

export default defineConfig({
  name: 'default',
  title: 'Duncan Brown',
  basePath: '/studio',
  projectId: projectId,
  dataset: dataset,

  plugins: [
    structureTool({
      structure: pageStructure([settings]),
    }),
    presentationTool({
      locate,
      previewUrl: {
        previewMode: {
          enable: '/api/preview',
        }
      }
    }),
    singletonPlugin(['settings']),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput(),
  ],

  schema,
});

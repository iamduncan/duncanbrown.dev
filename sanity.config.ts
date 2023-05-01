import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schema } from './src/lib/sanity/schema';
import { projectId, dataset, previewSecretId } from './src/lib/sanity/config';
import settings from './src/lib/sanity/schemas/settings';
import { pageStructure, singletonPlugin } from './src/lib/sanity/plugins/settings';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';
import { table } from '@sanity/table';
import { codeInput } from '@sanity/code-input';

export const PREVIEWABLE_DOCUMENT_TYPES: string[] = ['post'];
console.log(projectId);

export default defineConfig({
  name: 'default',
  title: 'Duncan Brown',
  basePath: '/studio',
  projectId: projectId,
  dataset: dataset,

  plugins: [
    deskTool({
      structure: pageStructure([settings]),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
      // defaultDocumentNode: previewDocumentNode({ apiVersion, previewSecretId }),
    }),
    singletonPlugin(['settings']),
    visionTool(),
    unsplashImageAsset(),
    table(),
    codeInput(),
  ],

  schema,
});

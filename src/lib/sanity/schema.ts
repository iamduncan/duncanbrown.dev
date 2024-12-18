import { SchemaTypeDefinition } from 'sanity';

import categoriesType from './schemas/categories';
import { postType } from './schemas/posts';
import { projectType } from './schemas/projects';
import settingsType from './schemas/settings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, settingsType, categoriesType, projectType],
};

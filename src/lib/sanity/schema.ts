import { SchemaTypeDefinition } from 'sanity';

import categoriesType from './schemas/categories';
import { postType } from './schemas/posts';
import settingsType from './schemas/settings';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, settingsType, categoriesType],
};

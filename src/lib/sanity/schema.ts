import { SchemaTypeDefinition } from 'sanity';
import { postType } from './schemas/posts';
import settingsType from './schemas/settings';
import categoriesType from './schemas/categories';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, settingsType, categoriesType],
};

import categoriesType from './categories';
import { postType } from './posts/postType';
import { projectType } from './projects/projectType';
import settingsType from './settings';

export const schemaTypes = [settingsType, categoriesType, postType, projectType];

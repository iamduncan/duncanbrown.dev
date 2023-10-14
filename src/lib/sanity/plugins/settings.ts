/**
 * This plugin contains all the logic for setting up the `Settings` singleton
 */

import { definePlugin, type DocumentDefinition } from 'sanity';
import { type StructureResolver } from 'sanity/desk';

export const settingsPlugin = definePlugin<{ type: string }>(({ type }) => {
  return {
    name: 'settings',
    document: {
      // Hide 'Settings' from new document options
      // https://user-images.githubusercontent.com/81981/195728798-e0c6cf7e-d442-4e58-af3a-8cd99d7fcc28.png
      newDocumentOptions: (prev, { creationContext }) => {
        if (creationContext.type === 'global') {
          return prev.filter((templateItem) => templateItem.templateId !== type);
        }

        return prev;
      },
      // Removes the "duplicate" action on the "settings" singleton
      actions: (prev, { schemaType }) => {
        if (schemaType === type) {
          return prev.filter(({ action }) => action !== 'duplicate');
        }

        return prev;
      },
    },
  };
});

// The StructureResolver is how we're changing the DeskTool structure to linking to a single "Settings" document, instead of rendering "settings" in a list
// like how "Post" and "Author" is handled.
export const settingsStructure = (typeDef: DocumentDefinition): StructureResolver => {
  return (S) => {
    // The `Settings` root list item
    const settingsListItem = // A singleton not using `documentListItem`, eg no built-in preview
      S.listItem()
        .title(typeDef.title || '')
        // .icon(typeDef.icon)
        .child(
          S.editor().id(typeDef.name).schemaType(typeDef.name).documentId(typeDef.name),
        );

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) => listItem.getId() !== typeDef.name,
    );

    return S.list()
      .title('Content')
      .items([settingsListItem, S.divider(), ...defaultListItems]);
  };
};

export const singletonPlugin = (types: string[]) => {
  return {
    name: 'singletonPlugin',
    document: {
      // Hide 'Singletons (such as Settings)' from new document options
      newDocumentOptions: (prev: any, { creationContext }: any) => {
        if (creationContext.type === 'global') {
          return prev.filter(
            (templateItem: any) => !types.includes(templateItem.templateId),
          );
        }

        return prev;
      },
      // Removes the "duplicate" action on the Singletons (such as Home)
      actions: (prev: any, { schemaType }: any) => {
        if (types.includes(schemaType)) {
          return prev.filter(
            ({ action }: any) => !['unpublish', 'delete', 'duplicate'].includes(action),
          );
        }

        return prev;
      },
    },
  };
};

// The StructureResolver is how we're changing the DeskTool structure to linking to document (named Singleton)
// like how "Home" is handled.
export const pageStructure = (typeDefArray: DocumentDefinition[]): StructureResolver => {
  return (S) => {
    // Goes through all of the singletons that were provided and translates them into something the
    // Desktool can understand
    const singletonItems = typeDefArray.map((typeDef) => {
      return (
        S.listItem()
          .title(typeDef.title || '')
          // .icon(typeDef.icon)
          .child(
            S.editor()
              .id(typeDef.name)
              .schemaType(typeDef.name)
              .documentId(typeDef.name)
              .views([
                // Default form view
                S.view.form(),
              ]),
          )
      );
    });

    // The default root list items (except custom ones)
    const defaultListItems = S.documentTypeListItems().filter(
      (listItem) =>
        !typeDefArray.find((singleton) => singleton.name === listItem.getId()),
    );

    return S.list()
      .title('Content')
      .items([...singletonItems, S.divider(), ...defaultListItems]);
  };
};

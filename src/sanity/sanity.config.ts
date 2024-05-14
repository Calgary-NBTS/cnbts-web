import { defineConfig} from 'sanity'
import { StructureBuilder, structureTool} from 'sanity/structure'
import { visionTool} from '@sanity/vision';
import { ColorInput, colorInput } from '@sanity/color-input';
import schemaTypes from '@/sanity/schemas';

const singletonActions = new Set(['publish', 'discardChanges', 'restore']);
const singletonTypes = new Set(['settings']);

export default defineConfig({
  name: 'calgary-nbts',
  title: 'Calgary Non-Binary and Transgender Society',
  projectId: '9108qgzh',
  dataset: 'production',
  basePath: '/admin',
  apiVersion: "2024-02-14",
  plugins: [structureTool(
    {
      name: 'admin',
      title: 'Admin',
      structure: (S) =>
      S.list()
        .title("Site Config")
        .items([
           // Our singleton type has a list item with a custom child
          S.listItem()
            .title("Site Settings")
            .id("sitesettings")
            .child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("sitesettings")
                .documentId("sitesettings")
              ),
              ...S.documentTypeListItems().filter(listItem => !['sitesettings'].includes(listItem.getId() || '')),
        ])
    }
  ), visionTool(), colorInput()],
  schema: { 
    types: schemaTypes,
    // Filter out singleton types from the global “New document” menu options
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
  // For singleton types, filter out actions that are not explicitly included
  // in the `singletonActions` list defined above
  actions: (input, context) =>
    singletonTypes.has(context.schemaType)
      ? input.filter(({ action }) => action && singletonActions.has(action))
      : input,
  },
})

const singletonListItem = (
  S: StructureBuilder,
  typeName: string,
  title?: string
) => 
  S.listItem()
    .title(title || typeName)
    .id(typeName)
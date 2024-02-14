import { defineConfig} from 'sanity'
import { structureTool} from 'sanity/structure'
import { visionTool} from '@sanity/vision'
//import { schemaTypes} from './sanity/schemas'
import schemas from './sanity/schemas';

export default defineConfig({
  name: 'calgary-nbts',
  title: 'Calgary Non-Binary and Transgender Society',
  projectId: '9108qgzh',
  dataset: 'production',
  basePath: '/admin',
  apiVersion: "2024-02-14",
  plugins: [structureTool(), visionTool()],
  // schema: {
  //   types: schemaTypes,
  // },
  schema: { types: schemas}
})

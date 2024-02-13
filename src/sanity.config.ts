import { defineConfig} from 'sanity'
import { structureTool} from 'sanity/structure'
import { visionTool} from '@sanity/vision'
import { schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Calgary Non-Binary and Transgender Society',
  projectId: '2l7yx8ng',
  dataset: 'production',
  basePath: '/admin',
  //apiVersion: "2024-02-13",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})

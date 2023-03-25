import type { ComponentMeta } from '@storybook/react'

import ViewTextEntryPage from './ViewTextEntryPage'

export const generated = () => {
  return <ViewTextEntryPage />
}

export default {
  title: 'Pages/ViewTextEntryPage',
  component: ViewTextEntryPage,
} as ComponentMeta<typeof ViewTextEntryPage>

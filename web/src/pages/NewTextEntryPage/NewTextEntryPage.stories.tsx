import type { ComponentMeta } from '@storybook/react'

import NewTextEntryPage from './NewTextEntryPage'

export const generated = () => {
  return <NewTextEntryPage />
}

export default {
  title: 'Pages/NewTextEntryPage',
  component: NewTextEntryPage,
} as ComponentMeta<typeof NewTextEntryPage>

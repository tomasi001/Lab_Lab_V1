import type { ComponentMeta } from '@storybook/react'

import NewVoiceEntryPage from './NewVoiceEntryPage'

export const generated = () => {
  return <NewVoiceEntryPage />
}

export default {
  title: 'Pages/NewVoiceEntryPage',
  component: NewVoiceEntryPage,
} as ComponentMeta<typeof NewVoiceEntryPage>

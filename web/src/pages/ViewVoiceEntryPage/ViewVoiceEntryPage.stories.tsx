import type { ComponentMeta } from '@storybook/react'

import ViewVoiceEntryPage from './ViewVoiceEntryPage'

export const generated = () => {
  return <ViewVoiceEntryPage />
}

export default {
  title: 'Pages/ViewVoiceEntryPage',
  component: ViewVoiceEntryPage,
} as ComponentMeta<typeof ViewVoiceEntryPage>

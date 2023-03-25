import type { ComponentMeta } from '@storybook/react'

import NarrativesPage from './NarrativesPage'

export const generated = () => {
  return <NarrativesPage />
}

export default {
  title: 'Pages/NarrativesPage',
  component: NarrativesPage,
} as ComponentMeta<typeof NarrativesPage>

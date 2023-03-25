import type { ComponentMeta } from '@storybook/react'

import PinnedPage from './PinnedPage'

export const generated = () => {
  return <PinnedPage />
}

export default {
  title: 'Pages/PinnedPage',
  component: PinnedPage,
} as ComponentMeta<typeof PinnedPage>

import type { ComponentMeta } from '@storybook/react'

import PatternsPage from './PatternsPage'

export const generated = () => {
  return <PatternsPage />
}

export default {
  title: 'Pages/PatternsPage',
  component: PatternsPage,
} as ComponentMeta<typeof PatternsPage>

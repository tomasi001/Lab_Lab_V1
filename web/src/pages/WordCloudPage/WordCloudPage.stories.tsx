import type { ComponentMeta } from '@storybook/react'

import WordCloudPage from './WordCloudPage'

export const generated = () => {
  return <WordCloudPage />
}

export default {
  title: 'Pages/WordCloudPage',
  component: WordCloudPage,
} as ComponentMeta<typeof WordCloudPage>

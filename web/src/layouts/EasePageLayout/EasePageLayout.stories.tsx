import type { ComponentMeta, ComponentStory } from '@storybook/react'

import EasePageLayout from './EasePageLayout'

export const generated: ComponentStory<typeof EasePageLayout> = (args) => {
  return <EasePageLayout {...args} />
}

export default {
  title: 'Layouts/EasePageLayout',
  component: EasePageLayout,
} as ComponentMeta<typeof EasePageLayout>

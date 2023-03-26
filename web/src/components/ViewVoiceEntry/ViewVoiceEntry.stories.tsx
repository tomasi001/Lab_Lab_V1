// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ViewVoiceEntry> = (args) => {
//   return <ViewVoiceEntry {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ViewVoiceEntry from './ViewVoiceEntry'

export const generated = () => {
  return <ViewVoiceEntry />
}

export default {
  title: 'Components/ViewVoiceEntry',
  component: ViewVoiceEntry,
} as ComponentMeta<typeof ViewVoiceEntry>

// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ViewTextEntry> = (args) => {
//   return <ViewTextEntry {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ViewTextEntry from './ViewTextEntry'

export const generated = () => {
  return <ViewTextEntry />
}

export default {
  title: 'Components/ViewTextEntry',
  component: ViewTextEntry,
} as ComponentMeta<typeof ViewTextEntry>

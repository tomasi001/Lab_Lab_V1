import type { Prisma, TextEntry } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.TextEntryCreateArgs>({
  textEntry: {
    one: {
      data: {
        entry: 'String',
        updatedAt: '2023-03-26T05:41:57.228Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:41:57.228Z',
          },
        },
      },
    },
    two: {
      data: {
        entry: 'String',
        updatedAt: '2023-03-26T05:41:57.228Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:41:57.229Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<TextEntry, 'textEntry'>

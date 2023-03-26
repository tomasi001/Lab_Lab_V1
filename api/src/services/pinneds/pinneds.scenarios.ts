import type { Prisma, Pinned } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PinnedCreateArgs>({
  pinned: {
    one: {
      data: {
        pinnedItem: 'String',
        updatedAt: '2023-03-26T05:43:38.359Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:43:38.360Z',
          },
        },
      },
    },
    two: {
      data: {
        pinnedItem: 'String',
        updatedAt: '2023-03-26T05:43:38.360Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:43:38.360Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Pinned, 'pinned'>

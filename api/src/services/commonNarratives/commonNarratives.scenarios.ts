import type { Prisma, CommonNarrative } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.CommonNarrativeCreateArgs>({
  commonNarrative: {
    one: {
      data: {
        narrative: 'String',
        updatedAt: '2023-03-26T05:42:59.662Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:42:59.662Z',
          },
        },
      },
    },
    two: {
      data: {
        narrative: 'String',
        updatedAt: '2023-03-26T05:42:59.662Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:42:59.662Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<CommonNarrative, 'commonNarrative'>

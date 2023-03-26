import type { Prisma, ThoughtPattern } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.ThoughtPatternCreateArgs>({
  thoughtPattern: {
    one: {
      data: {
        pattern: 'String',
        updatedAt: '2023-03-26T05:43:17.218Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:43:17.218Z',
          },
        },
      },
    },
    two: {
      data: {
        pattern: 'String',
        updatedAt: '2023-03-26T05:43:17.218Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:43:17.218Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<ThoughtPattern, 'thoughtPattern'>

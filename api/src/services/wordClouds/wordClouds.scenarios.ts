import type { Prisma, WordCloud } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WordCloudCreateArgs>({
  wordCloud: {
    one: {
      data: {
        updatedAt: '2023-03-26T05:42:41.447Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:42:41.447Z',
          },
        },
      },
    },
    two: {
      data: {
        updatedAt: '2023-03-26T05:42:41.447Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:42:41.447Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<WordCloud, 'wordCloud'>

import type { Prisma, Word } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.WordCreateArgs>({
  word: {
    one: {
      data: {
        word: 'String',
        rating: 5771177,
        wordClouds: {
          create: {
            updatedAt: '2023-03-26T05:43:30.110Z',
            User: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String',
                accountStatus: 'String',
                updatedAt: '2023-03-26T05:43:30.110Z',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        word: 'String',
        rating: 4958685,
        wordClouds: {
          create: {
            updatedAt: '2023-03-26T05:43:30.110Z',
            User: {
              create: {
                firstName: 'String',
                lastName: 'String',
                email: 'String',
                accountStatus: 'String',
                updatedAt: '2023-03-26T05:43:30.110Z',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<Word, 'word'>

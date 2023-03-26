import type { Prisma, VoiceEntry } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.VoiceEntryCreateArgs>({
  voiceEntry: {
    one: {
      data: {
        entry: 'String',
        updatedAt: '2023-03-26T05:42:18.793Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:42:18.793Z',
          },
        },
      },
    },
    two: {
      data: {
        entry: 'String',
        updatedAt: '2023-03-26T05:42:18.793Z',
        User: {
          create: {
            firstName: 'String',
            lastName: 'String',
            email: 'String',
            accountStatus: 'String',
            updatedAt: '2023-03-26T05:42:18.793Z',
          },
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<VoiceEntry, 'voiceEntry'>

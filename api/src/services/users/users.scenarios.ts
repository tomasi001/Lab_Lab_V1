import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        accountStatus: 'String',
        updatedAt: '2023-03-26T05:41:41.116Z',
      },
    },
    two: {
      data: {
        firstName: 'String',
        lastName: 'String',
        email: 'String',
        accountStatus: 'String',
        updatedAt: '2023-03-26T05:41:41.116Z',
      },
    },
  },
})

export type StandardScenario = ScenarioData<User, 'user'>

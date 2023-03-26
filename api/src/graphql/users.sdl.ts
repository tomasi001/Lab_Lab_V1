export const schema = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    email: String!
    accountStatus: String!
    textEntries: [TextEntry]!
    voiceEntries: [VoiceEntry]!
    wordCloud: [WordCloud]!
    commonNarratives: [CommonNarrative]!
    thoughtPatterns: [ThoughtPattern]!
    createdAt: DateTime!
    updatedAt: DateTime!
    Pinned: [Pinned]!
  }

  type Query {
    users: [User!]! @requireAuth
    user(id: Int!): User @requireAuth
  }

  input CreateUserInput {
    firstName: String!
    lastName: String!
    email: String!
    accountStatus: String!
  }

  input UpdateUserInput {
    firstName: String
    lastName: String
    email: String
    accountStatus: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`

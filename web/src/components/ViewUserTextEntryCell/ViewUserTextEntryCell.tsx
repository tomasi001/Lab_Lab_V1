import type { FindTextEntryById, TextEntry, User } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import ViewTextEntry from '../ViewTextEntry/ViewTextEntry'

export const QUERY = gql`
  query ViewTextEntryById($id: Int!) {
    textEntry: textEntry(id: $id) {
      id
      title
      entry
      userId
      User {
        id
        firstName
      }
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindTextEntryById>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ textEntry }: CellSuccessProps<FindTextEntryById>) => {
  return (
    <div>
      <ViewTextEntry textEntry={textEntry} />
    </div>
  )
}

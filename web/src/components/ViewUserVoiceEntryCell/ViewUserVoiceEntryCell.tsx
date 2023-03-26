import type { CellFailureProps, CellSuccessProps } from '@redwoodjs/web'
import type { FindVoiceEntryById, VoiceEntry } from 'types/graphql'
import ViewVoiceEntry from '../ViewVoiceEntry/ViewVoiceEntry'

export const QUERY = gql`
  query FindVoiceEntryById($id: Int!) {
    voiceEntry: voiceEntry(id: $id) {
      id
      title
      entry
      userId
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindVoiceEntryById>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  voiceEntry,
}: CellSuccessProps<FindVoiceEntryById>) => {
  return (
    <div>
      <ViewVoiceEntry voiceEntry={voiceEntry} />
    </div>
  )
}

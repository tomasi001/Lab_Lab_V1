import { FindVoiceEntryById } from 'types/graphql'

interface Props {
  voiceEntry: NonNullable<FindVoiceEntryById['voiceEntry']>
}
const ViewVoiceEntry = ({ voiceEntry }: Props) => {
  return (
    <div>
      <h2>{'ViewVoiceEntry'}</h2>
      <div>{JSON.stringify(voiceEntry)}</div>
      <p>
        {'Find me in ./web/src/components/ViewVoiceEntry/ViewVoiceEntry.tsx'}
      </p>
    </div>
  )
}

export default ViewVoiceEntry

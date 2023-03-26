import type { FindTextEntryById } from 'types/graphql'

interface Props {
  textEntry: NonNullable<FindTextEntryById['textEntry']>
}

const ViewTextEntry = ({ textEntry }: Props) => {
  return (
    <div>
      <h2>{'ViewTextEntry'}</h2>
      <div>{JSON.stringify(textEntry)}</div>
      <p>{'Find me in ./web/src/components/ViewTextEntry/ViewTextEntry.tsx'}</p>
    </div>
  )
}

export default ViewTextEntry

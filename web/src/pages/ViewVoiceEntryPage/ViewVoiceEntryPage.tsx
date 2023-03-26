import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ViewUserVoiceEntryCell from 'src/components/ViewUserVoiceEntryCell'

interface Props {
  id: number
}

const ViewVoiceEntryPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="ViewVoiceEntry" description="ViewVoiceEntry page" />

      <h1>ViewVoiceEntryPage</h1>

      <ViewUserVoiceEntryCell id={id} />
      <p>
        Back to <Link to={routes.home()}>home</Link>
      </p>
    </>
  )
}

export default ViewVoiceEntryPage

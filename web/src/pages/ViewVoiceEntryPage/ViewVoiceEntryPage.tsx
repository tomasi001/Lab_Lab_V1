import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ViewVoiceEntryPage = () => {
  return (
    <>
      <MetaTags title="ViewVoiceEntry" description="ViewVoiceEntry page" />

      <h1>ViewVoiceEntryPage</h1>
      <p>
        Back to <Link to={routes.home()}>home</Link>
      </p>
    </>
  )
}

export default ViewVoiceEntryPage

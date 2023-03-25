import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ViewVoiceEntryPage = () => {
  return (
    <>
      <MetaTags title="ViewVoiceEntry" description="ViewVoiceEntry page" />

      <h1>ViewVoiceEntryPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ViewVoiceEntryPage/ViewVoiceEntryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>viewVoiceEntry</code>, link to me with `
        <Link to={routes.viewVoiceEntry()}>ViewVoiceEntry</Link>`
      </p>
    </>
  )
}

export default ViewVoiceEntryPage

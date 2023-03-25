import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewVoiceEntryPage = () => {
  return (
    <>
      <MetaTags title="NewVoiceEntry" description="NewVoiceEntry page" />

      <h1>NewVoiceEntryPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NewVoiceEntryPage/NewVoiceEntryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>newVoiceEntry</code>, link to me with `
        <Link to={routes.newVoiceEntry()}>NewVoiceEntry</Link>`
      </p>
    </>
  )
}

export default NewVoiceEntryPage

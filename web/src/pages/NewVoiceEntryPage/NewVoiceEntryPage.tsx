import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewVoiceEntryPage = () => {
  return (
    <>
      <MetaTags title="NewVoiceEntry" description="NewVoiceEntry page" />

      <h1>NewVoiceEntryPage</h1>
      <p>
        Back to <Link to={routes.home()}>home</Link>
      </p>
    </>
  )
}

export default NewVoiceEntryPage

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewTextEntryPage = () => {
  return (
    <>
      <MetaTags title="NewTextEntry" description="NewTextEntry page" />

      <h1>NewTextEntryPage</h1>
      <p>
        Back to <Link to={routes.home()}>home</Link>
      </p>
    </>
  )
}

export default NewTextEntryPage

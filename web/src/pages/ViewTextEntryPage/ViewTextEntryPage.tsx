import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ViewTextEntryPage = () => {
  return (
    <>
      <MetaTags title="ViewTextEntry" description="ViewTextEntry page" />

      <h1>ViewTextEntryPage</h1>
      <p>
        Back to <Link to={routes.home()}>home</Link>
      </p>
    </>
  )
}

export default ViewTextEntryPage

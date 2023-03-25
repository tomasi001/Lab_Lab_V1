import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ViewTextEntryPage = () => {
  return (
    <>
      <MetaTags title="ViewTextEntry" description="ViewTextEntry page" />

      <h1>ViewTextEntryPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/ViewTextEntryPage/ViewTextEntryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>viewTextEntry</code>, link to me with `
        <Link to={routes.viewTextEntry()}>ViewTextEntry</Link>`
      </p>
    </>
  )
}

export default ViewTextEntryPage

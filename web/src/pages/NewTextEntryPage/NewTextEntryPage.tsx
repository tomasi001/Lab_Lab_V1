import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NewTextEntryPage = () => {
  return (
    <>
      <MetaTags title="NewTextEntry" description="NewTextEntry page" />

      <h1>NewTextEntryPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NewTextEntryPage/NewTextEntryPage.tsx</code>
      </p>
      <p>
        My default route is named <code>newTextEntry</code>, link to me with `
        <Link to={routes.newTextEntry()}>NewTextEntry</Link>`
      </p>
    </>
  )
}

export default NewTextEntryPage

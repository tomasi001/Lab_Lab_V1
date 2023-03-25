import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PinnedPage = () => {
  return (
    <>
      <MetaTags title="Pinned" description="Pinned page" />

      <h1>PinnedPage</h1>
      <p>
        Find me in <code>./web/src/pages/PinnedPage/PinnedPage.tsx</code>
      </p>
      <p>
        My default route is named <code>pinned</code>, link to me with `
        <Link to={routes.pinned()}>Pinned</Link>`
      </p>
    </>
  )
}

export default PinnedPage

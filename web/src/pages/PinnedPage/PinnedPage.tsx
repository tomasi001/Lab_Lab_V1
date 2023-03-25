import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PinnedPage = () => {
  return (
    <>
      <MetaTags title="Pinned" description="Pinned page" />

      <h1>PinnedPage</h1>
      <p>
        Back to <Link to={routes.insights()}>insights</Link>
      </p>
    </>
  )
}

export default PinnedPage

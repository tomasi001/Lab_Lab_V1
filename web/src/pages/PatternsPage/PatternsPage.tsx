import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PatternsPage = () => {
  return (
    <>
      <MetaTags title="Patterns" description="Patterns page" />

      <h1>PatternsPage</h1>
      <p>
        Back to <Link to={routes.insights()}>insights</Link>
      </p>
    </>
  )
}

export default PatternsPage

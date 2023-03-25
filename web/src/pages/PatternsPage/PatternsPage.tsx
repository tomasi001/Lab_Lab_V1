import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const PatternsPage = () => {
  return (
    <>
      <MetaTags title="Patterns" description="Patterns page" />

      <h1>PatternsPage</h1>
      <p>
        Find me in <code>./web/src/pages/PatternsPage/PatternsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>patterns</code>, link to me with `
        <Link to={routes.patterns()}>Patterns</Link>`
      </p>
    </>
  )
}

export default PatternsPage

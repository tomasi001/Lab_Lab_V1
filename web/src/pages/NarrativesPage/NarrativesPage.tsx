import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NarrativesPage = () => {
  return (
    <>
      <MetaTags title="Narratives" description="Narratives page" />

      <h1>NarrativesPage</h1>
      <p>
        Back to <Link to={routes.insights()}>insights</Link>
      </p>
    </>
  )
}

export default NarrativesPage

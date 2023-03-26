import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InsightsPage = () => {
  return (
    <>
      <MetaTags title="Insights" description="Insights page" />

      <h1>InsightsPage</h1>

      <p>
        <Link to={routes.patterns()}>Patterns</Link>
      </p>
      <p>
        <Link to={routes.narratives()}>Narratives</Link>
      </p>
      <p>
        <Link to={routes.wordCloudPage()}>Word Cloud</Link>
      </p>
      <p>
        <Link to={routes.pinnedPage()}>Pinned</Link>
      </p>
      <p>
        Back to <Link to={routes.home()}>home</Link>
      </p>
    </>
  )
}

export default InsightsPage

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const NarrativesPage = () => {
  return (
    <>
      <MetaTags title="Narratives" description="Narratives page" />

      <h1>NarrativesPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/NarrativesPage/NarrativesPage.tsx</code>
      </p>
      <p>
        My default route is named <code>narratives</code>, link to me with `
        <Link to={routes.narratives()}>Narratives</Link>`
      </p>
    </>
  )
}

export default NarrativesPage

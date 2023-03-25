import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WordCloudPage = () => {
  return (
    <>
      <MetaTags title="WordCloud" description="WordCloud page" />

      <h1>WordCloudPage</h1>
      <p>
        Back to <Link to={routes.insights()}>insights</Link>
      </p>
    </>
  )
}

export default WordCloudPage

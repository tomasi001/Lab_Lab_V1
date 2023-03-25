import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const WordCloudPage = () => {
  return (
    <>
      <MetaTags title="WordCloud" description="WordCloud page" />

      <h1>WordCloudPage</h1>
      <p>
        Find me in <code>./web/src/pages/WordCloudPage/WordCloudPage.tsx</code>
      </p>
      <p>
        My default route is named <code>wordCloud</code>, link to me with `
        <Link to={routes.wordCloud()}>WordCloud</Link>`
      </p>
    </>
  )
}

export default WordCloudPage

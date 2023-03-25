import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>HomePage</h1>
      <p>
        <Link to={routes.insights()}>Insights</Link>
      </p>
      <p>
        <Link to={routes.viewTextEntry()}>View Text</Link>
      </p>
      <p>
        <Link to={routes.viewVoiceEntry()}>View Voice</Link>
      </p>
      <p>
        <Link to={routes.newTextEntry()}>New Text</Link>
      </p>
      <p>
        <Link to={routes.newVoiceEntry()}>New Voice</Link>
      </p>
    </>
  )
}

export default HomePage

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
        {/* TODO: hard coded id below implement dynamic when available */}
        <Link to={routes.viewTextEntry({ id: 1 })}>View Text</Link>
      </p>
      <p>
        {/* TODO: hard coded id below implement dynamic when available */}
        <Link to={routes.viewVoiceEntry({ id: 1 })}>View Voice</Link>
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

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LandingPage = () => {
  return (
    <>
      <MetaTags title="Landing" description="Landing page" />

      <h1>Ease</h1>

      <p>THIS IS A PIC OF A LIGHTBULB</p>

      <nav>
        <ul>
          <li>
            <Link to={routes.login()}>Login</Link>
          </li>
          <li>
            <Link to={routes.signup()}>Signup</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default LandingPage

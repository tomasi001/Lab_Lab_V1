import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const LoginPage = () => {
  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <h1>Login</h1>
      <p>
        Back to <Link to={routes.landing()}>landing</Link>
      </p>
      <p>
        <Link to={routes.home()}>Login</Link>
      </p>
    </>
  )
}

export default LoginPage

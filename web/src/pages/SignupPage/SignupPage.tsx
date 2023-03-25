import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const SignupPage = () => {
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <h1>SignupPage</h1>
      <p>
        Back to <Link to={routes.landing()}>landing</Link>
      </p>
      <p>
        <Link to={routes.verify()}>Signup</Link>
      </p>
    </>
  )
}

export default SignupPage

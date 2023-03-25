import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const VerifyPage = () => {
  return (
    <>
      <MetaTags title="Verify" description="Verify page" />

      <h1>VerifyPage</h1>
      <p>
        Back to <Link to={routes.signup()}>signup</Link>
      </p>
      <p>
        <Link to={routes.home()}>Verify</Link>
      </p>
    </>
  )
}

export default VerifyPage

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const VerifyPage = () => {
  return (
    <>
      <MetaTags title="Verify" description="Verify page" />

      <h1>VerifyPage</h1>
      <p>
        Find me in <code>./web/src/pages/VerifyPage/VerifyPage.tsx</code>
      </p>
      <p>
        My default route is named <code>verify</code>, link to me with `
        <Link to={routes.verify()}>Verify</Link>`
      </p>
    </>
  )
}

export default VerifyPage

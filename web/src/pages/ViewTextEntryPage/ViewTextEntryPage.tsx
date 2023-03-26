import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import ViewUserTextEntryCell from 'src/components/ViewUserTextEntryCell'

interface Props {
  id: number
}
const ViewTextEntryPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="ViewTextEntry" description="ViewTextEntry page" />

      <h1>ViewTextEntryPage</h1>

      <ViewUserTextEntryCell id={id} />
      <p>
        Back to <Link to={routes.home()}>home</Link>
      </p>
    </>
  )
}

export default ViewTextEntryPage

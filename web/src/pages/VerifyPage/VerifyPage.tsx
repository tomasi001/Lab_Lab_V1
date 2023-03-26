import { Form, Submit, SubmitHandler, TextField } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

interface FormValues {
  otp: string
}

const VerifyPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Verify" description="Verify page" />

      <h1>Verify</h1>
      {/* FORM BODY */}
      <Form onSubmit={onSubmit}>
        <label htmlFor="otp">OTP</label>
        <TextField name="otp" />
        <Submit>
          <Link to={routes.home()}>Verify</Link>
        </Submit>
      </Form>
      <p>
        Back to <Link to={routes.signup()}>signup</Link>
      </p>
    </>
  )
}

export default VerifyPage

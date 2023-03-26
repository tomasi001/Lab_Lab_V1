import { SubmitHandler, Form, TextField, Submit } from '@redwoodjs/forms'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

interface FormValues {
  firstName: string
  lastName: string
  email: string
  password: string
  confrimPassword: string
}

const SignupPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <h1>SignupPage</h1>
      {/* FORM BODY */}
      <Form onSubmit={onSubmit}>
        <label htmlFor="firstName">First Name</label>
        <TextField name="firstName" />
        <label htmlFor="lastName">Last Name</label>
        <TextField name="lastName" />
        <label htmlFor="email">Email</label>
        <TextField name="email" />
        <label htmlFor="password">Password</label>
        <TextField name="password" />
        <label htmlFor="confrimPassword">Confirm Password</label>
        <TextField name="confrimPassword" />
        <Submit>
          {' '}
          <Link to={routes.verify()}>Signup</Link>
        </Submit>
      </Form>
      <p>
        Back to <Link to={routes.landing()}>landing</Link>
      </p>
    </>
  )
}

export default SignupPage

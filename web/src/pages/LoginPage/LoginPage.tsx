import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Form, Submit, SubmitHandler, TextField } from '@redwoodjs/forms'

interface FormValues {
  email: string
  password: string
}

const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <h1>Login</h1>
      {/* FORM BODY */}
      <Form onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <TextField name="email" />
        <label htmlFor="password">Password</label>
        <TextField name="password" />
        <Submit>
          <Link to={routes.home()}>Login</Link>
        </Submit>
      </Form>
      <p>
        Back to <Link to={routes.landing()}>landing</Link>
      </p>
    </>
  )
}

export default LoginPage

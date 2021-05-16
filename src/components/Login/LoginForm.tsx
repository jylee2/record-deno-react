import { React } from '../../../deps.ts'

import { gqlFetch } from '../../utils/helper.ts'
import ErrorDisplayer from '../Error/index.tsx'
import { mutationLoginGql } from '../../graphql/index.ts'

const LoginForm = (props:any) => {
  const { setAuthToken } = props

  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [loginError, setLoginError] = React.useState('')


  const submitForm = async (e: any) => {
    e.preventDefault()

    const queryObj = {
      query: mutationLoginGql,
      variables: {
        input:{
          password: password,
          username: username
        }
      }
    }

    console.log('--------queryObj', queryObj)

    const user = await gqlFetch(queryObj)

    console.log('--------user', user)

    if (user?.errors?.length) {
      setLoginError(user?.errors[0]?.message)
    }

    if (user?.data?.loginUser?.authToken) {
      setAuthToken(user?.data?.loginUser?.authToken)
      setLoginError('')
    }
  }

  return (
    <div>
      <form onSubmit={submitForm}>
        <h1 className="h3 mb-3 fw-normal">Login</h1>

        <input className="form-control" placeholder="Enter username..." required
          onChange={e => setUsername(e.target.value)}
        />
        <input type="password" className="form-control" placeholder="Enter password..." required
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">Login</button>
      </form>
      {
        loginError &&
        <ErrorDisplayer errorMsg={loginError} />
      }
    </div>
  )
}

export default LoginForm

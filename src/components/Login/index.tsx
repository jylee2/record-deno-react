import { React } from '../../../deps.ts'

import LoginForm from './LoginForm.tsx'
import Records from '../Records/index.tsx'

const Login = () => {
  const [authToken, setAuthToken] = React.useState('')

  console.log('--------authToken', authToken)

  return (
    <div className="login-modal">
      {
        !authToken && 
        <LoginForm setAuthToken={setAuthToken} />
      }
      {
        authToken &&
        <Records />
      }
    </div>
  )
}

export default Login

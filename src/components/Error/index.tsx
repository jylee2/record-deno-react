import { React } from '../../../deps.ts'

const ErrorSpan = (props:any) => {
  const { errorMsg } = props

  return (
    <span style={{ color: 'red' }}>
      {errorMsg}
    </span>
  )
}

export default ErrorSpan
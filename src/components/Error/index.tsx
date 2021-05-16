import { React } from '../../../deps.ts'

type ErrorDisplayerType = {
  errorMsg: string
}

const ErrorDisplayer = (props:ErrorDisplayerType) => {
  const { errorMsg } = props

  return (
    <span style={{ color: 'red' }}>
      {errorMsg}
    </span>
  )
}

export default ErrorDisplayer
import { React } from '../../../deps.ts'

const Error = (props:any) => {
  const { errorMsg } = props

  return (
    <span style={{ color: 'red' }}>
      {errorMsg}
    </span>
  )
}

export default Error
import { React } from '../../../deps.ts'

const Loading = (props:any) => {
  const { loading } = props

  return (
    <span>
      {loading}
    </span>
  )
}

export default Loading
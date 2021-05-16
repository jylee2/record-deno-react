import { React } from '../../../deps.ts'

type LoadingType = {
  loading: boolean
}

const Loading = (props:LoadingType) => {
  const { loading } = props

  return (
    <span>
      {
        loading &&
        <span>Loading...</span>
      }
    </span>
  )
}

export default Loading
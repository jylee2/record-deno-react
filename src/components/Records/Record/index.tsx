import { React } from '../../../../deps.ts'

const Record = (props:any) => {
  const { rec } = props

  return (
    <div>
      {rec.url}
    </div>
  )
}

export default Record
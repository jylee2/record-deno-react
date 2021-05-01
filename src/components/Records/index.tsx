import { React } from '../../../deps.ts'

import { getRecordsGql } from './schema.ts'
import { gqlFetch } from '../../utils/recordsHelper.ts'
import ErrorSpan from '../Error/index.tsx'
import Record from './Record/index.tsx'

const Records = (props:any) => {
  const [records, setRecords] = React.useState([])
  const [error, setError] = React.useState('')
  
  // const handleRecords = async () => {
  //   const queryObj = {
  //     query: getRecordsGql
  //   }

  //   const recordRes = await gqlFetch(queryObj)

  //   if (recordRes?.errors?.length) {
  //     setError(recordRes?.errors[0]?.message)
  //   }

  //   if (recordRes?.data?.getRecords?.length) {
  //     setRecords(recordRes?.data?.getRecords)
  //   }
    
  //   console.log('--------recordRes', recordRes)
  // }

  // handleRecords()
  
  React.useEffect(async () => {
    const queryObj = {
      query: getRecordsGql
    }

    const recordRes = await gqlFetch(queryObj)

    if (recordRes?.errors?.length) {
      setError(recordRes?.errors[0]?.message)
    }

    if (recordRes?.data?.getRecords?.length) {
      setRecords(recordRes?.data?.getRecords)
    }
    
    // console.log('--------recordRes', recordRes)
  }, []) // only run the function given to useEffect after the initial render

  
  return (
    <div>
      {error &&
      <ErrorSpan errorMsg={error} />}
      {records?.map((rec:any) => {
        console.log('--------rec', rec)

        return (
          <Record key={rec.id} rec={rec} />
        )
      })}
    </div>
  )
}

export default Records
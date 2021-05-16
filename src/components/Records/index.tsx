import { React } from '../../../deps.ts'

import { queryRecordsGql } from '../../graphql/index.ts'
import { gqlFetch } from '../../utils/helper.ts'
import Loading from '../Loading/index.tsx'
import ErrorDisplayer from '../Error/index.tsx'
import Record from './Record/index.tsx'

const Records = (props:any) => {
  const [loading, setLoading] = React.useState('')
  const [error, setError] = React.useState('')
  const [records, setRecords] = React.useState([])
  
  React.useEffect(async () => {
    const queryObj = {
      query: queryRecordsGql
    }

    const recordRes = await gqlFetch(queryObj)

    if (recordRes?.loading) {
      setLoading(recordRes?.loading)
    }

    if (recordRes?.errors?.length) {
      setError(recordRes?.errors[0]?.message)
    }

    if (recordRes?.data?.getRecords?.length) {
      setRecords(recordRes?.data?.getRecords)
      setError('')
    }
    
    // console.log('--------recordRes', recordRes)
  }, []) // only run the function given to useEffect after the initial render

  return (
    <div>
      {
        loading &&
        <Loading loading={loading} />
      }
      {
        error &&
        <ErrorDisplayer errorMsg={error} />
      }
      {
        records?.map((rec:any) => {
          // console.log('--------rec', rec)

          return (
            <Record key={rec.id} rec={rec} />
          )
        })
      }
    </div>
  )
}

export default Records
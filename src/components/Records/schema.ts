export const getRecordsGql = `
  query getRecords1 {
    getRecords{
      id
      createdAt
      description
      status
      updatedAt
      url
      userId
      username
    }
  }
`
export const queryRecordsGql = `
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

export const mutationLoginGql = `
  mutation ($input: LoginUserInput) {
    loginUser (input: $input) {
      id
      authToken
      createdAt
      email
      username
    }
  }
`
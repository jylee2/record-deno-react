import config from '../../config.ts'

export const gqlFetch = async (queryObj:any) => {
  try {
    const response = await fetch(config.graphqlUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        authorization: `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify(queryObj)
    })

    if (!response.ok) {
      throw new Error(await response.text())
    }

    return response.json()
  } catch (error) {
    console.log('--------gqlFetch error', error)
    return error
  }
}
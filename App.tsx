import { React } from './deps.ts'
import { ReactDOM } from './deps.ts'

import Records from './src/components/Records/index.tsx'

// @ts-ignore
const { BrowserRouter, Router } = ReactDOM

const App = () => {

  // const [name, setName] = React.useState('')

  // React.useEffect(() => {
  //   (
  //     async () => {
  //       try {
  //         const response = await fetch(`${config.baseUrl}/graphql`, {
  //           headers: {'Content-Type': 'application/json'},
  //           credentials: 'include'
  //         })

  //         const content = await response.json()
  //         console.log('----------Home content', content)
  //         setName(content.name)
  //       } catch (error) {
  //         console.log('----------Home user error', error)
  //         return null
  //       }
  //     }
  //   )()
  // })

  return (
    <div className="App">
      <Records />
      {/* <BrowserRouter> */}
        {/* <Nav name={name} setName={setName} />
        <main className="form-signin">
            <Route path="/" exact component={() => <Home name={name} />} />
            <Route path="/login" component={() => <Login name={name} setName={setName} />} />
            <Route path="/register" component={Register} />
        </main> */}
      {/* </BrowserRouter> */}
    </div>
  )
}

export default App

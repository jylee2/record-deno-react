import { React } from './deps.ts'
import BrowserRouter from "https://jspm.dev/react-dom@17.0.0"
// import { BrowserRouter, Route } from './deps.ts'

import Records from './src/components/Records/index.tsx'

// @ts-ignore
// const { BrowserRouter, Route } = ReactDOM

const App = () => {
  const renderCount = React.useRef(1)

  React.useEffect(() => {
    renderCount.current += 1
  })

  console.log('--------App renderCount.current', renderCount.current)

  return (
    // @ts-ignore
    // <BrowserRouter>
      <div className="App">
        <Records />
      </div>
    // </BrowserRouter>
  )
}

export default App

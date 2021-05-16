import { React } from './deps.ts'

import Login from './src/components/Login/index.tsx'

const App = () => {
  const renderCount = React.useRef(1)

  React.useEffect(() => {
    renderCount.current += 1
  })

  console.log('--------App renderCount.current', renderCount.current)

  return (
    <div className="App">
      <Login />
    </div>
  )
}

export default App

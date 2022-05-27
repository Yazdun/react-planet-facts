import { BrowserRouter } from 'react-router-dom'
import { Topbar } from './components'
import { AppRoutes } from './pages'

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App

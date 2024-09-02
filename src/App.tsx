import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom'
import Drawer from './components/drawer'
import Header from './components/header'
import Toast from './components/toast'
import Favorites from './pages/favorites'
import Home from './pages/home'
import { IRootState } from './store/store'
import Types from './pages/types'

function App() {
  const { isThemeDark } = useSelector((state: IRootState) => state.theme)

  useEffect(() => {
    if (isThemeDark) {
      document.body.setAttribute('class', 'dark')
    } else {
      document.body.removeAttribute('class')
    }
  }, [isThemeDark])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="/type/:type" element={<Types />} />
        </Route>
      </Routes>
    </Router>
  )
}

const Layout = () => {
  return (
    <div className="min-h-[100vh] dark:bg-slate-800 bg-slate-200 pb-10 transition-all duration-1000 ease-in-out">
      <Header />
      <Toast />
      <Drawer />
      <Outlet />
    </div>
  )
}

export default App

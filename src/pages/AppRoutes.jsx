import { Layout } from '../components'
import { Planet } from './planet'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export const AppRoutes = () => {
  const location = useLocation()
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/earth" />} />
          <Route path="/:id" element={<Planet />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}

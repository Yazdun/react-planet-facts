import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom'
import { planets } from '../../data'
import { Details, MobileTabs, Tab } from '../../components'
import { AnimatePresence } from 'framer-motion'

export const Planet = () => {
  const { id: planetName } = useParams()
  const planet = planets.find(item => item.name === planetName)
  const location = useLocation()

  const { name, color, overview, structure, geology, details } = planet

  if (!planet) {
    return <h1>Sorry this page does not exist</h1>
  }

  return (
    <div>
      <MobileTabs planet={name} color={color} />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route
            path="overview"
            element={<Tab data={overview} title={name} key="dfsf" />}
          />
          <Route
            path="structure"
            element={<Tab data={structure} title={name} key="dsfjl" />}
          />
          <Route path="geology" element={<Tab data={geology} title={name} />} />
          <Route path="*" element={<Navigate replace to="overview" />} />
        </Routes>
      </AnimatePresence>
      <Details data={details} />
    </div>
  )
}

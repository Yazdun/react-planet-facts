import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { planets } from '../../data'
import { MobileTabs, Tab } from '../../components'

export const Planet = () => {
  const { id: planetName } = useParams()
  const planet = planets.find(item => item.name === planetName)
  const { name, color, overview, structure, geology, details } = planet

  if (!planet) {
    return <h1>Sorry this page does not exist</h1>
  }

  return (
    <div>
      <MobileTabs planet={planet.name} color={planet.color} />
      <Routes>
        <Route path="overview" element={<Tab data={overview} title={name} />} />
        <Route
          path="structure"
          element={<Tab data={structure} title={name} />}
        />
        <Route path="geology" element={<Tab data={geology} title={name} />} />
        <Route path="*" element={<Navigate replace to="overview" />} />
      </Routes>
    </div>
  )
}

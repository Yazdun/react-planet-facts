import { Navigate, Route, Routes, useParams } from 'react-router-dom'
import { planets } from '../../data'
import { MobileTabs } from '../../components'

export const Planet = () => {
  const { id: planetName } = useParams()
  const planet = planets.find(item => item.name === planetName)

  if (!planet) {
    return <h1>Sorry this page does not exist</h1>
  }

  return (
    <div>
      <MobileTabs planet={planet.name} color={planet.color} />
      <Routes>
        <Route path="overview" element={<Placeholder title="overview" />} />
        <Route path="structure" element={<Placeholder title="structure" />} />
        <Route path="geology" element={<Placeholder title="geology" />} />
        <Route path="*" element={<Navigate replace to="overview" />} />
      </Routes>
    </div>
  )
}

const Placeholder = ({ title }) => {
  return <h1 style={{ padding: '1rem', marginTop: '2rem' }}>{title}</h1>
}

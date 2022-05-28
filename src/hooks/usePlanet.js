import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function usePlanet() {
  const { pathname } = useLocation()
  const [currentPlanet, setCurrentPlanet] = useState(pathname)

  useEffect(() => {
    setCurrentPlanet(pathname)
  }, [pathname])

  return currentPlanet
}

import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export function usePlanet() {
  const { pathname } = useLocation()
  // HANDLE THE PLANET
  const [currentPlanet, setCurrentPlanet] = useState(pathname.split('/')[1])

  // HANDLE DIFFERENT PLANET'S SUB ROUTES
  const [currentTab, setCurrentTab] = useState(pathname.split('/')[2])

  useEffect(() => {
    setCurrentPlanet(pathname.split('/')[1])
    setCurrentTab(pathname.split('/')[2])
  }, [pathname])

  return { currentTab, currentPlanet }
}

import { Outlet } from 'react-router-dom'
import { Topbar } from '../'

export const Layout = () => {
  return (
    <>
      <Topbar />
      <main>{/* <Outlet /> */}</main>
    </>
  )
}

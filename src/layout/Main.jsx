import React from 'react'
import { Outlet } from 'react-router'
import { Header } from '../components/Shared/Header'

export const Main = () => {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
    </div>
  )
}

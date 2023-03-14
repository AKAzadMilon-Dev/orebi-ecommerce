import React from 'react'
import SidebarContent from './SidebarContent'

const LeftSidwBar = () => {
  return (
    <>
        <SidebarContent dropDown={true} dropTitle="Shop by Category"/>
        <SidebarContent dropDown={true} dropTitle="Shop by Color"/>
        <SidebarContent dropDown={true} dropTitle="Shop by Brand"/>
        <SidebarContent dropDown={true} dropTitle="Shop by Price"/>
    </>
  )
}

export default LeftSidwBar
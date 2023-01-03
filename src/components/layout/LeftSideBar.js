import React from 'react'
import SidebarContent from './SidebarContent'

const LeftSidwBar = () => {
  return (
    <>
        <SidebarContent dropDown={true}/>
        <SidebarContent dropDown={false}/>
        <SidebarContent dropDown={true}/>
        <SidebarContent dropDown={false}/>
    </>
  )
}

export default LeftSidwBar
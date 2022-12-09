import React from 'react'

const Listitem = ({itemname, className}) => {
  return (
    <li className={className}>{itemname}</li>
  )
}

export default Listitem
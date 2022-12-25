import React from 'react'
import BreadCrumb from '../components/layout/BreadCrumb'
import Container from '../components/layout/Container'

const Products = () => {
  console.log(window.location.pathname.split("/")[1])
  return (
    <Container>
      <BreadCrumb title="Products"/>
    </Container>
  )
}

export default Products
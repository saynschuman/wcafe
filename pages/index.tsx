import 'isomorphic-fetch'
import React from 'react'
import Layout from '../components/Layout/Layout'
import { Services } from '../components/blocks/Services'
import { Offers } from '../components/blocks/Offers'
import { ServicesTypes } from '../components/blocks/ServicesTypes'
import { Clients } from '../components/blocks/Clients'
import { ServicesSlider } from '../components/blocks/ServicesSlider'
import Header from '../components/blocks/headers/Header/Index'
import { connect } from 'react-redux'

class Index extends React.Component {
  render(): JSX.Element {
    return (
      <Layout>
        <Header />
        <Services />
        <Offers />
        <ServicesTypes />
        <Clients />
        <ServicesSlider />
      </Layout>
    )
  }
}

export default connect()(Index)

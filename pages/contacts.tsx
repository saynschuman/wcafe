import React from 'react'
import Layout from '../components/Layout/Layout'
import SmallHeader from '../components/blocks/headers/SmallHeader'
import { Contacts } from '../components/blocks/Contacts'
import { Map } from '../components/blocks/Map'

const ContactsPage: React.SFC = () => (
  <Layout>
    <SmallHeader />
    <Contacts />
    <Map />
  </Layout>
)

export default ContactsPage

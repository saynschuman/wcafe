import React from 'react'
import Layout from '../components/Layout/Layout'
import MiddleHeader from '../components/blocks/headers/MiddleHeader'
import { About } from '../components/blocks/About'
import { ClientsBig } from '../components/blocks/ClientsBig'
import { Estimate } from '../components/blocks/Estimate'
import { AdPlacement } from '../components/blocks/AdPlacement'
import { Partnership } from '../components/blocks/Partnership'
import { Confidentiality } from '../components/blocks/Confidentiality'
import { LegalFeatures } from '../components/blocks/LegalFeatures'
import { Experience } from '../components/blocks/Experience'
import { AboutServices } from '../components/blocks/AboutServices'

const AboutPage: React.SFC = () => (
  <Layout>
    <MiddleHeader />
    <About />
    <ClientsBig />
    <Estimate />
    <AdPlacement />
    <Partnership />
    <Confidentiality />
    <LegalFeatures />
    <Experience />
    <AboutServices />
  </Layout>
)

export default AboutPage

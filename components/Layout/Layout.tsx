import { CustomHead } from '../blocks/CustomHead'
import Footer from '../blocks/Footer'

const Layout = (props) => (
  <div>
    <CustomHead />
    {props.children}
    <Footer />
  </div>
)

export default Layout

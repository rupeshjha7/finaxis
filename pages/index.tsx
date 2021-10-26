import Header from '../Component/header'
import OurApproch from '../Component/home/our-approch'
import Technology from '../Component/home/technology'
import Product from '../Component/home/product'
import TestProg from '../Component/home/testProg'
import CmpnyLogo from '../Component/home/cmpnyLogo'
import ValuedPartner from '../Component/home/valuedPartner'

import Footer from '../Component/footer'

export default function Home () {
  return (
    <>
      <div className='finaxis-blue-bg'>
        <Header />
        <OurApproch />
        <Technology />
      </div>
      <Product />
      <TestProg />
      <CmpnyLogo />
      <ValuedPartner />
      <Footer />
    </>
  )
}

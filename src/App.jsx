import React from 'react'
import Header from './components/Header'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Banner from './components/Banner'
import Page1 from './pages/Page1'
import Astro from './pages/Astro'

const App = () => {
  return (
    <>
      <Header />
      <Banner />
      <Page1 />
      <Astro/>
      <Page2 />
      <Page3 />
      <Page4/>
      <Page5 />
      <Page6 />

    </>
  )
}

export default App
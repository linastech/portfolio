import React from 'react'
import NextSeo from 'next-seo'
import 'default-passive-events'
import Landing from 'components/landing/Landing'
import Skills from 'components/skills/Skills'
import Works from 'components/work/Works'
import Contact from 'components/contact/Contact'
import Footer from 'components/footer/Footer'
import LoadFonts from 'utils/fonts'
import "scss/style.scss"

export default class extends React.Component {
  componentDidMount(){
    //added small timeout because for some reason Google Insigts thinks webfonts are render blocking
    setTimeout(function(){ LoadFonts() }, 10)
    
    document.addEventListener('touch', null, {passive: true, capture: true})
    document.addEventListener('wheel', null, {passive: true, capture: true})
  }
  render () {
    return (
      <>
        <NextSeo
          config={{
            title: 'Passionate full stack web developer',
            description: "I'm Linas, a freelance full stack web developer based in Nantwich, looking for my next big challange!",
            canonical: 'http://linas.io',
          }}
        />
        <Landing />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </>
    )
  }
}
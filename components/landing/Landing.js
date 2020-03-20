import {Component} from 'react'
import zenscroll from 'zenscroll'
import CSS from './Landing.scss'
import classNames from 'classnames'

export default class extends Component{
  intro = null

  componentDidMount(){
    const Typer = require('typer-js')

    this.intro = Typer(this.introText)
      .line()
      .pause(500)
      .cursor({block: true})

      this.runTyper()
  }
  handleScroll(){
    zenscroll.to(document.getElementById('scroll-to-skills'))
  }
  runTyper(){
    this.intro
      .continue('custom projects from scratch.')
      .pause(2500)
      .back('empty')
      .continue('landing pages.')
      .pause(2500)
      .back('empty')
      .continue('web applications.')
      .pause(2500)
      .empty()
      .run(() => this.runTyper()) 
  }
  render(){
    return (
      <div className={CSS.container}>

        <div className={CSS.landingIntro}>
          <h1>
            Hi, I'm Linas. I love to build

            <div ref={ref => this.introText = ref} className={CSS.typer}></div>
          </h1>

        </div>

        <div className={classNames(CSS.aboutMeButton)}>
          <div onClick={()=>this.handleScroll()}>Learn more about me</div>
          <i className="fa fa-chevron-down"></i>
        </div>
      </div>
    )
  }
}
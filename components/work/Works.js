import React, {Component} from 'react'
import CSS from './Works.scss'

export default class extends Component{
  state = {
    hoveredItem: null
  }
  render(){
    let {hoveredItem} = this.state

    return (
      <React.Fragment>
        <h3>My Works</h3>
        <div className={CSS.wrapper}>
          <ul className={CSS.list}>
            <li className={hoveredItem == 0 ? CSS.active : undefined}>
              <div className={CSS.innerWrapper}>
                <div className={CSS.bikesenseTop+' '+CSS.bg}></div>
                <div className={CSS.bikesenseBot+' '+CSS.bg}></div>
              </div>
            </li>
            <li>
              <div className={CSS.innerWrapper}>
                <div className={CSS.oceanpulser+' '+CSS.bg}></div>
              </div>
            </li>
            <li className={hoveredItem == 2 ? CSS.active : undefined}>
              <div className={CSS.innerWrapper}>
                <div className={CSS.archetypeTop+' '+CSS.bg}></div>
                <div className={CSS.archetypeBot+' '+CSS.bg}></div>
              </div>
            </li>
            <li>
              <h5>
                <a href="http://bikesense.co.uk/" target="_new">Bike Sense</a>
              </h5>
              <p className={CSS.description}>
                Cambridge motorcycle training instructor.
                Friendly, flexible and affordable bike riding sessions.
              </p>
            </li>
            <li>
              <h5>
                <a href="http://oceanpulser.com/" target="_new">Ocean Pulser</a>
              </h5>
              <p className={CSS.description}>
                Ocean Pulser is a company that provides fascinating, creative, and original productions to take any brand to the next level.
              </p>
            </li>
            <li>
              <h5>
                <a href="http://www.archetype-video.uk/" target="_new">Archetype Videography</a>
              </h5>
              <p className={CSS.description}>
                Archetype Videography is a fresh and innovative video production company, operating nationwide in the U.K. 
                They provide full Video Production services tailored to suit any project, big or small. 
              </p>
            </li>
          </ul>
          <div className={CSS.github}>
            <img className={CSS.githubImg} src="/static/images/github.svg" alt="GitHub" />
            <p className={CSS.gitDesc}>
              You can also checkout
              <a href="https://github.com/linastech" target="_new"> my GitHub account </a> 
              to see all the projects I have worked on.
            </p>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
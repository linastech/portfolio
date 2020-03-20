import {Component} from 'react'
import CSS from './Footer.scss'

export default class extends Component{
  render(){
    return (
      <footer className={CSS.footer}>
        Crafted By Me <span>{(new Date()).getFullYear()}</span>
      </footer>
    )
  }
}
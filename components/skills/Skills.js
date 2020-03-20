import {Component} from 'react'
import CSS from './Skills.scss'

export default class extends Component{
  render(){
    return (
      <div className={CSS.wrapper}>
        <h2 id="scroll-to-skills">What i do</h2>
        <span className={CSS.subHeader}>I have experience in all fields of web design process</span>

        <ul className={CSS.list}>
          <li>
            <img src="/static/images/icons/code.svg" alt="Code" />
            <span className={CSS.title}>Code</span>
            <p>
              My favorite hobby is to code. Whilst it is not something most people see when looking at my works
              behind the scenes every bit of code I write is neat and tidy, I make sure your project is well thought out and hand crafted by me.
            </p>
          </li>

          <li>
            <img src="/static/images/icons/e-commerce.svg" alt="E-commerce" />
            <span className={CSS.title}>E-commerce</span>
            <p>
               Using well established technologies like Magento or more newer cutting edge technologies like Meteor
               I will deliver e-commerce solution that will fit your business best.
             </p>
          </li>
          <li>
            <img src="/static/images/icons/design.svg" alt="Web design" />
            <span className={CSS.title}>Web design</span>
            <p>
              A professional website is probably the most important tool your business will have. 
              I never use templates when designing a website, everything I do is built from scratch to fit your needs.
            </p>
          </li>
          <li>
            <img src="/static/images/icons/responsive-design.svg" alt="Responsive design" />
            <span className={CSS.title}>Responsive design</span>
            <p>
              I have a lot of experience building or optimising existing websites
              to deliver fully responsive websites that provide a great user experience across various platforms and on different devices.
            </p>
          </li>
          <li>
            <img src="/static/images/icons/seo.svg" alt="SEO" />
            <span className={CSS.title}>SEO</span>
            <p>
              A good website is only half the battle. 
              During the design and build phase of every website I optimise your website to fit best SEO practises and make sure
              your website has the best chances ranking first in google search results.
            </p>
          </li>
          <li>
            <img src="/static/images/icons/storage.svg" alt="Hosting services" />
            <span className={CSS.title}>Hosting services</span>
            <p>
              I provide lifetime support for every website I built starting with domain registration and finishing with website hosting,
              You will not need to worry about maintenance at all!
            </p>
          </li>
        </ul>
      </div>
    )
  }
}
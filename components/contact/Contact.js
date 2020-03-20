import {Component} from 'react'
import CSS from './Contact.scss'
import GoogleMapReact from 'google-map-react'
import Axios from 'axios'
import Validator from 'validator'

export default class extends Component{
  static defaultProps = {
    center: {lat: 53.0683847, lng: -2.5329062},
    zoom: 11,
  }
  state = {
    form:{
      name: {err: false, msg: "Please enter a valid name", value: ""},
      email: {err: false, msg: "Please enter a valid email", value: ""},
      message: {err: false, msg: "Please enter your message", value: ""},
    },
    emailSent:	false
  }
  handleChange(e, inputName){
    this.setState({
      form:{
        ...this.state.form,
        [inputName]: {
          ...this.state.form[inputName],
          value: e.currentTarget.value
        }
      }
    })
  }
  submit(e){
    e.preventDefault()

    this.setState({
      form:{
        name: {
          ...this.state.form.name,
          err: !Validator.isLength(this.state.form.name.value, {min: 3, max: 40})
        },
        email: {
          ...this.state.form.email,
          err: !Validator.isEmail(this.state.form.email.value)
        },
        message: {
          ...this.state.form.message,
          err: !Validator.isLength(this.state.form.message.value, {min: 10, max: 1500})
        }
      }
    }, () =>{
      const errors = Object.keys(this.state.form)
        .reduce((acumulator, input) =>  this.state.form[input].err == true && ++acumulator , 0)

      if(errors === false)
        Axios.post('/_api/contact', {
          name: this.state.form.name.value,
          email: this.state.form.email.value,
          message: this.state.form.message.value
        })
        .then((response) => {
          this.setState({
            form:{
              name: {...this.state.form.name, err: false, value: ""},
              email: {...this.state.form.email, err: false, value: ""},
              message: {...this.state.form.message, err: false, value: ""},
            },
            emailSent: true
          })

          setTimeout(() => this.setState({emailSent: false}), 6000)
        })
        .catch((error)=>{
          console.log(error)
        })
    })
  }
  render(){
    return (
      <div className={CSS.wrapper}>
        <h4>Get in Touch</h4>

        <div className={CSS.formWrapper}>
          <form action="" className={CSS.form}>
            <div className={CSS.name+' '+CSS.inputWrapper+' '+(this.state.form.name.err ? CSS.error : undefined)}>
              <div className={CSS.errMessage}>{this.state.form.name.msg}</div>
              <input 
                placeholder="Your Name" 
                type="text" 
                className={CSS.input} 
                onChange={(e)=>this.handleChange(e, "name")}
                value={this.state.form.name.value}
              />
            </div>
            <div className={CSS.email+' '+CSS.inputWrapper+' '+(this.state.form.email.err ? CSS.error : undefined)}>
              <div className={CSS.errMessage}>{this.state.form.email.msg}</div>
              <input 
                placeholder="Email Address" 
                type="email" 
                className={CSS.input} 
                onChange={(e)=>this.handleChange(e, "email")}
                value={this.state.form.email.value}
              />
            </div>
            <div className={CSS.message+' '+CSS.inputWrapper+' '+(this.state.form.message.err ? CSS.error : undefined)}>
              <div className={CSS.errMessage}>{this.state.form.message.msg}</div>	
              <textarea 
                placeholder="Enter your message" 
                className={CSS.input}
                onChange={(e)=>this.handleChange(e, "message")}
                value={this.state.form.message.value}
              ></textarea>
            </div>
            <input onClick={(e)=>this.submit(e)} type="button" className={CSS.submit} value="Send" />
            <div className={CSS.submitMessage+' '+(this.state.emailSent ? CSS.messageSent : undefined)}>
              Your message has been sent, I will get back to you shortly!
            </div>
          </form>
          <div className={CSS.contactInfo}>
            <div className={CSS.info}>
              <div className={CSS.infoRow}>
                <span>Linas Rakauskas</span>
                <span>+44 7392 828970</span>
              </div>

              <div className={CSS.infoRow}>
                <span>
                  <img src="/static/images/icons/gmail.svg" className={CSS.gmail} alt="Gmail" title="Gmail" />
                  <a href="mailto:linas.rakauskas.uk@gmail.com">linas.rakauskas.uk@gmail.com</a>
                </span>
                <span>
                  <img src="/static/images/icons/skype.svg" className={CSS.gmail} alt="Skype" title="Skype" />
                  <a href="skype:linas.rakauskas?chat">linas.rakauskas</a>
                </span>
              </div>
            </div>

            <div className={CSS.map}>
              <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyANm8GXhXue1eec6o9DlZaQ1WJCSLjm_rU" }}
                defaultCenter={this.props.center}
                defaultZoom={this.props.zoom}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
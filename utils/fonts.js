let WebFont

if(typeof window !== "undefined")
	WebFont = require("webfontloader");

export default function(){
	WebFont.load({
		custom: {
			families: ['fontawesome'],
			urls: ['https://use.fontawesome.com/releases/v5.0.10/css/all.css']
		},
		google: {
			families: ['Montserrat:300,400,500,700']
		}
	})
}
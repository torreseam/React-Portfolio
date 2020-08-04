(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,function(e,t,a){},,,,,,,function(e,t,a){e.exports=a.p+"static/media/cover-image-1.62e47b19.jpg"},function(e,t,a){e.exports=a.p+"static/media/linkedin.bfd34028.jpg"},function(e){e.exports=JSON.parse('[{"id":1,"name":"Drink & Think","image":"https://raw.githubusercontent.com/torreseam/Drink-and-Think/master/assets/screenshots/mainpage.jpg","github":"https://github.com/torreseam/Drink-and-Think.git","deployedapp":"https://torreseam.github.io/Drink-and-Think/","description":"Trivia"},{"id":2,"name":"Budget Tracker","image":"https://raw.githubusercontent.com/torreseam/Budget-Tracker/master/public/chromeDevtools.PNG","github":"https://github.com/torreseam/Budget-Tracker.git","deployedapp":"https://calm-headland-75460.herokuapp.com/","description":"Budget & Spending"},{"id":3,"name":"Note Taker","image":"https://raw.githubusercontent.com/torreseam/Note-Taker/master/src/heroku-page.PNG","github":"https://github.com/torreseam/Note-Taker.git","deployedapp":"https://warm-caverns-62816.herokuapp.com/","description":"Note Taker"},{"id":4,"name":"Grading Book","image":"https://raw.githubusercontent.com/torreseam/Teachers-Grading-Book/master/src/titlepage.jpg","github":"https://github.com/torreseam/Teachers-Grading-Book.git","deployedapp":"https://teachersgradingbook.herokuapp.com/","description":"Grading Book"},{"id":5,"name":"Team Profile Generator","image":"https://raw.githubusercontent.com/torreseam/Team-Profile-Generator/master/src/Browserpg.PNG","github":"https://github.com/torreseam/Team-Profile-Generator.git","deployedapp":"https://github.com/torreseam/Team-Profile-Generator","description":"Team Profile Generator"},{"id":6,"name":"Git It Done","image":"https://raw.githubusercontent.com/torreseam/git-it-done/master/assets/main.JPG","github":"https://torreseam.github.io/git-it-done/","deployedapp":"https://github.com/torreseam/git-it-done.git","description":"Git It Done"}]')},function(e,t,a){e.exports=a(19)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/github-icon.3f42676e.png"},function(e,t,a){e.exports=a.p+"static/media/linkedin-circle.d8571986.png"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),o=a.n(l),i=(a(16),a(1),a(3));a(2);var s=function(e){return r.a.createElement("ul",{className:"nav "},["About Me","Portfolio","Contact","Resume"].map((function(t){return r.a.createElement("li",{className:"",key:t},r.a.createElement("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link"},t))})))},c=a(8),m=a.n(c),u=a(9),d=a.n(u);var p=function(){return r.a.createElement("section",{className:""},r.a.createElement("h1",{id:"about"},"Edgar Torres"),r.a.createElement("img",{src:m.a,className:"hero",alt:"cover"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-4 ip-picture"},r.a.createElement("img",{src:d.a,className:"linkedin-picture",alt:"no name"})),r.a.createElement("div",{className:"col-7 ip-desc"},r.a.createElement("h4",null,"About Edgar"),r.a.createElement("p",null,"Experience Information Technology System Engineer with a demonstrated history of working in the airline/aviation industry. Skilled in LAN Rooms-WAN & MAN, Windows, UPS and automation systems, direct Technical Support, Testing, System Management and Operating Systems. Strong Information Technology background professional with a proven track record of delivering projects on time. Quick learner known for follow-through, determination and communication skills. Self-motivated team player who works well individually or as part of a team."))))},g=a(10);function h(e){return r.a.createElement("div",{className:"card-container col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{alt:e.name,src:e.image,className:"card-img"}),r.a.createElement("h3",null,e.name),r.a.createElement("a",{href:e.github,target:"_blank",rel:"noopener noreferrer"},"Github"),r.a.createElement("div",null,r.a.createElement("a",{href:e.deployedapp,target:"_blank",rel:"noopener noreferrer"},"Deployed Application"))))}function E(e){return r.a.createElement("div",{className:""},e.children)}var b=function(){var e=Object(n.useState)(g),t=Object(i.a)(e,2),a=t[0];return t[1],r.a.createElement(E,null,r.a.createElement("h1",{className:"project-list"},"Project List"),a.map((function(e){return function(e){return r.a.createElement(h,{name:e.name,image:e.image,id:e.id,github:e.github,deployedapp:e.deployedapp,key:e.id})}(e)})))},f=a(4),v=a(5);var k=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(i.a)(e,2),a=t[0],l=t[1],o=a.name,s=a.email,c=a.message,m=Object(n.useState)(""),u=Object(i.a)(m,2),d=u[0],p=u[1];function g(e){if(l(Object(v.a)(Object(v.a)({},a),{},Object(f.a)({},e.target.name,e.target.value))),"email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);console.log(t),p(t?"":"Your email is invalid.")}else e.target.value.length?p(""):p("".concat(e.target.name," is required."));"message"===e.target.name||(e.target.value.length?p(""):p("".concat(e.target.name," is required."))),console.log("errorMessage",d),d||l(Object(v.a)(Object(v.a)({},a),{},Object(f.a)({},e.target.name,e.target.value)))}return r.a.createElement("section",{className:""},r.a.createElement("h1",{className:"contact-container"},"Contact"),r.a.createElement("form",{id:"contact-form",className:"contact-form",onSubmit:function(e){e.preventDefault(),console.log(a)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:")),r.a.createElement("div",null,r.a.createElement("input",{className:"form-input",type:"text",name:"name",defaultValue:o,onBlur:g})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email Address:")),r.a.createElement("div",null,r.a.createElement("input",{className:"form-input",type:"email",name:"email",defaultValue:s,onBlur:g})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:")),r.a.createElement("div",null,r.a.createElement("textarea",{className:"form-input",name:"message",rows:"5",defaultValue:c,onBlur:g}),d&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},d))),r.a.createElement("button",{type:"submit"},"Submit")))},w=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"resume-list"},"Resume"),r.a.createElement("div",{className:"resume-link"},r.a.createElement("a",{href:"https://docs.google.com/document/d/1dCIAW3WCw3a6JwPqb7JRYAQbPwqKV5gjhHJtW7Q1sEc/edit?usp=sharing",target:"blank",alt:"Resume"},"Download my Resume")),r.a.createElement("div",{className:"resume-main"},r.a.createElement("div",null,r.a.createElement("h1",{className:""},"Skills")),r.a.createElement("div",null,r.a.createElement("p",null,"Develop best practice solutions by facilitating meetings with Technology and Business Leaders to develop needs and requirements. Consult with business managers to develop project scope, translate and understand business principles and technical requirements by developing solutions to existing problems/issues, compliance and adherence to principles Key on-site engineer and team member of Data Center Migration and decommissioning project team. Responsible for equipment installation, testing, troubleshooting of operating systems including hardware & software, provide technical support as needed, project management, change management requests, server moves and cutovers, physical removal of equipment and proper disposal of company assets. Install, test, and terminate data/telecommunications cabling, including Cat6e and Fiber media to United Airlines standards. Install equipment cabinets to house network data equipment, and power circuit. Monitor and properly address facility alarms such as: equipment alarms, overheating, circuit overloads, etc. Establish and maintain written, verbal, and online communications channels with regional management to ensure they are always up to date for their respective facility")),r.a.createElement("div",null,r.a.createElement("h5",{className:"header-space"},"Technology and DataBase Skills ")),r.a.createElement("div",null,r.a.createElement("ul",null,"HTML/CSS"),r.a.createElement("ul",null,"JavaScript/jQuery"),r.a.createElement("ul",null,"Handlebars"),r.a.createElement("ul",null,"Local Storage, Session Storage, IndexedDB"),r.a.createElement("ul",null,"React.js"),r.a.createElement("ul",null,"MySQL,NoSQL, Sequelize"),r.a.createElement("ul",null,"MongoDB, Mongoose")),r.a.createElement("div",null,r.a.createElement("h5",{className:"header-space"},"Development Skills")),r.a.createElement("div",null,r.a.createElement("ul",null,"User Authentication"),r.a.createElement("ul",null,"Progressive Web Applications (PWAs)"),r.a.createElement("ul",null,"MERN Stack (MongoDB, Express.js, React.js, Node.js)"))))};var N=function(){var e=Object(n.useState)("About"),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement(s,{currentPage:a,handlePageChange:l}),r.a.createElement("div",null,function(){switch(a){case"About":return r.a.createElement(p,null);case"Portfolio":return r.a.createElement(b,null);case"Contact":return r.a.createElement(k,null);case"Resume":return r.a.createElement(w,null);default:return r.a.createElement(p,null)}}()))},y=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"https://github.com/torreseam",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"Github",className:"footer-img",src:a(17)})),r.a.createElement("a",{href:"https://www.linkedin.com/in/edgar-torres-3349203a/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{alt:"LinkedIn",className:"footer-img",src:a(18)}))))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(N,null)),r.a.createElement("div",null,r.a.createElement(y,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[11,1,2]]]);
//# sourceMappingURL=main.f02dace8.chunk.js.map
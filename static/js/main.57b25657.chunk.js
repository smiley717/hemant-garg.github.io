(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){"use strict";var n=a(0),o=a.n(n);a(58);t.a=function(e){var t=e.text,a=e.color,n=e.iconClass,r=e.onclick,c=e.delay,s={borderRadius:e.border,backgroundColor:a,animationDelay:c+"s"};return o.a.createElement("button",{onClick:r,className:"button",style:s},t,o.a.createElement("i",{className:n}))}},,,function(e,t,a){"use strict";a.r(t);var n=a(7),o=a(8),r=a(10),c=a(9),s=a(11),i=a(0),l=a.n(i),m=a(19),u=a(87),p=(a(26),a(18)),d=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("main",{className:"Projects-section"},l.a.createElement(m.Helmet,null,l.a.createElement("meta",{charSet:"utf-8"}),l.a.createElement("title",null,"Hemant Garg | Projects"),l.a.createElement("meta",{name:"description",content:"The List of Projects that I have done recently. Please have a look :) "}),l.a.createElement("meta",{name:"keywords",content:"React Projects, eCell MSIT, ecell, esummit, social network for developers, face scanner reactjs, youtube mini reactjs, mailzy, stephen grider nodejs course, Brad Traversy MERN stack course, Hemant Garg MERN Stack Developer, Full Stack Web Developer, hemant-garg, hemantgarg6"})),l.a.createElement("nav",{className:"projects-nav"},l.a.createElement(u.a,{to:"/"},"\u2190 Back")),l.a.createElement("div",{className:"projects"},h.map(function(e){return l.a.createElement(p.default,{project:e,key:e.name})})))}}]),t}(l.a.Component),h=[{name:"Flat UI Colors",image:"flatUiColors.png",desp1:"A Simple beautiful looking Clone of website like flatuicolors.com with some extra functionalities i.e. Users can create their own palettes of their favourite colors and They can easily delete some palettes that they don't like.",desp2:"Want some beautiful colors for next project?? If yes, then you must check this website. Thanks ;)",repo:"https://github.com/hemant-garg/FlatUIColors",website:"https://flatuicolors.netlify.com/",tech:["HTML5","CSS3","reactjs","npm","chroma-js","material-ui","react-router-transition","react-sortable-hoc"]},{name:"Social Network for Devs",image:"socialNetwork.png",desp1:"Social Network website for developers. Create a developer profile/portfolio, share posts and get help from other developers",desp2:"Its a pretty big website, So please check out the complete information on github repo. Thanks ;)",repo:"https://github.com/hemant-garg/Social-Network",website:"https://social-network-v1.herokuapp.com/",tech:["HTML5","CSS3","reactjs","redux","moment","npm","nodejs","mongoose","mongoDB","expressjs","passport-jwt","bcryptjs","jsonwebtoken"]},{name:"Portfolio",image:"portfolio.png",desp1:"Okay So, I have created this simple website for showcasing my recent work. You can call it as my portfolio website.",desp2:"P.S. I know the profile photo is really bad, I'll change that soon. Thanks ;)",repo:"https://github.com/hemant-garg/hemant-garg.github.io",website:"http://hemantgarg.me",tech:["HTML5","CSS3","reactjs","npm","react-router-transition","react-tilt"]},{name:"Mailzy",image:"mailzy.png",desp1:"The app that can be used to send mass emails to a big list of users for the purpose of collecting feedback.",desp2:"If you are running a startup or any kind of business and you want to collect some feedback from your users to expand or improve your business then this website is for you.",repo:"https://github.com/hemant-garg/mailzy",website:"https://mailzy.herokuapp.com/",tech:["HTML5","CSS3","reactjs","redux","react-router","redux-form","nodejs","google-OAuth","expressjs","mongoDB","sendgrid","passport","stripe","mlab","mongooose","npm"]},{name:"Entrepreneurship Cell of MSIT",image:"ecellmsit.png",desp1:"The official website of the Entrepreneurship Cell of MSIT. ",desp2:"I\u2019ve used MERN stack ( mongoDB, expressjs, reactjs, nodejs ) for the development of the website. Students can register themselves and their data will be stored in the database (mlab). I have also applied some SVG animations for the first time.",repo:"https://github.com/hemant-garg/ecellmsit2019",website:"https://www.ecellmsit.in/",tech:["Adobe Illustrator","HTML5","CSS3","sass","reactjs","react-router","disqus","wordpress-api","nodejs","expressjs","mongoDB","mlab","mongooose","npm"]},{name:"Youtube Mini",image:"youtubeMini.png",desp1:"A simple React Website which shows five videos based upon the users search",desp2:" I have used Youtube API for the data.",repo:"https://github.com/hemant-garg/youtube-mini",website:"https://youtube-mini.netlify.com/",tech:["HTML5","CSS3","reactjs","redux","npm","youtube-api"]},{name:"Face Scanner",image:"faceScanner.png",desp1:"This App analyzes images and returns information on age, gender, and multicultural appearance for each detected face based on facial characteristics.",desp2:"API used - Clarifai ( Demographic Model )",repo:"https://github.com/hemant-garg/face-scanner",website:"https://face-scanner.netlify.com/",tech:["HTML5","CSS3","reactjs","redux","npm","Clarifai API"]}];t.default=d},function(e,t,a){"use strict";a.r(t);var n=a(7),o=a(8),r=a(10),c=a(9),s=a(11),i=a(0),l=a.n(i),m=a(14),u=(a(26),function(e){function t(){var e,a;Object(n.a)(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={isModalOpen:!1},a.showModal=function(){a.setState({isModalOpen:!0})},a.closeModal=function(){a.setState({isModalOpen:!1})},a.handleEyeButton=function(e){e.stopPropagation(),window.open(a.props.project.website)},a.handleOutsideModalClick=function(e){e.stopPropagation(),document.getElementById("myModal")===e.target&&a.closeModal()},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.project,t=l.a.createElement("div",{onClick:this.handleOutsideModalClick,key:e.name,id:"myModal",className:"modal"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("span",{onClick:this.closeModal,className:"close"},"\xd7"),l.a.createElement("h1",{className:"modal-content-title"},e.name),l.a.createElement("p",{className:"modal-content-description"},e.desp1),l.a.createElement("br",null),l.a.createElement("p",{className:"modal-content-description"},e.desp2),l.a.createElement("p",{className:"modal-content-tech"},"Skills that I've used: ",l.a.createElement("br",null),e.tech.map(function(e){return l.a.createElement("span",{key:e},e)})),l.a.createElement(m.a,{delay:"0.3",onclick:function(){return window.open(e.repo)},border:".5rem",color:"#006266",text:"REPO",iconClass:"fas fa-file-code"}),l.a.createElement(m.a,{delay:"0.6",onclick:function(){return window.open(e.website)},border:".5rem",color:"#2980b9",text:"LIVE",iconClass:"fas fa-desktop"})));return l.a.createElement("div",{onClick:this.showModal,className:"projectBox"},l.a.createElement("h1",{className:"projectBox-name"},e.name),l.a.createElement("i",{className:"far fa-eye eyeIcon",onClick:this.handleEyeButton}),l.a.createElement("div",{className:"projectBox-overlay"}),l.a.createElement("button",{className:"projectBox-moreBtn"},"MORE"),l.a.createElement("img",{src:a(68)("./".concat(e.image))}),this.state.isModalOpen&&t)}}]),t}(i.Component));t.default=u},,,,,,,,function(e,t,a){},,,,,,,,function(e,t,a){e.exports=a.p+"static/media/hemant garg.e9359a36.jpg"},,,,,,,,function(e,t,a){e.exports=a(84)},,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,function(e,t,a){var n={"./ProjectBox":18,"./ProjectBox.js":18,"./Projects":17,"./Projects.css":26,"./Projects.js":17,"./Projects.scss":69,"./ecellmsit.png":71,"./faceScanner.png":72,"./flatUiColors.png":73,"./mailzy.png":74,"./portfolio.png":75,"./socialNetwork.png":76,"./youtubeMini.png":77};function o(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}o.keys=function(){return Object.keys(n)},o.resolve=r,e.exports=o,o.id=68},function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/ecellmsit.5ee11082.png"},function(e,t,a){e.exports=a.p+"static/media/faceScanner.b7b68ef8.png"},function(e,t,a){e.exports=a.p+"static/media/flatUiColors.28b9b658.png"},function(e,t,a){e.exports=a.p+"static/media/mailzy.e5f4cae4.png"},function(e,t,a){e.exports=a.p+"static/media/portfolio.26d83c30.png"},function(e,t,a){e.exports=a.p+"static/media/socialNetwork.87934c0f.png"},function(e,t,a){e.exports=a.p+"static/media/youtubeMini.df988a89.png"},,,,function(e,t,a){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),c=a.n(r),s=a(40),i=a(32),l=a(12),m=Object(l.c)({state:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}}}),u=a(7),p=a(8),d=a(10),h=a(9),f=a(11),g=a(89),b=a(88),y=a(91),k=a(92),E=a(90),j=a(87),v=a(19),w=a(33),N=a.n(w),C=(a(56),function(e){var t=e.logo,a=e.width,n=e.delay,r=e.height,c=e.onclick,s=e.text,i=e.gradient,l={width:a,height:r,animationName:e.anim,animationDelay:n+"s"},m={background:i};return o.a.createElement("div",{className:"MyPhoto",onClick:c},o.a.createElement(N.a,{className:"Tilt MyPhoto-tilt",style:l,options:{max:55}},o.a.createElement("div",{className:"Tilt-inner"},o.a.createElement("img",{src:t,className:"MyPhoto-tilt__img",alt:"hemant garg"}),o.a.createElement("div",{style:m,className:"MyPhoto-tilt-gradient"}),o.a.createElement("div",{className:"MyPhoto-tilt-text"},s))))}),M=a(14),S=(a(60),function(e){var t=e.link,a=e.icon,n=e.name,r=e.backColor;return o.a.createElement("li",{title:n,style:{backgroundColor:r},className:"social-link-item"},o.a.createElement("a",{href:t,className:"social-link"},o.a.createElement("i",{className:a})))}),O=(a(62),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).renderLinks=function(){return x.map(function(e){return o.a.createElement(S,{key:e.name,backColor:e.color,name:e.name,icon:e.icon,link:e.link})})},a}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("ul",{className:"social-link-list"},this.renderLinks())}}]),t}(o.a.Component)),x=[{icon:"fab fa-github",link:"https://github.com/hemant-garg",name:"Github",color:"#222f3e"},{icon:"fab fa-facebook-f",link:"https://www.facebook.com/hemantgarg6",name:"Facebook",color:"#273c75"},{icon:"fab fa-linkedin-in",link:"https://www.linkedin.com/in/hemantgarg6/",name:"Linkedin",color:"#2980b9"},{icon:"fas fa-envelope",link:"mailto:hemant.gr6@gmail.com",name:"Mail",color:"#cf6a87"}],T=O,P=a(34),I=a.n(P),D=(a(64),function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"goToResume",value:function(){window.open("https://drive.google.com/file/d/1q7FuiYNVzGn4nBWbL1uCHJ2Q0_BGlUGA/view?usp=sharing")}},{key:"render",value:function(){return o.a.createElement("main",{className:"Home"},o.a.createElement(v.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"Hemant Garg"),o.a.createElement("meta",{name:"description",content:"A Full Stack Web Developer who plays Guitar. Pursuing B.Tech in the field of computer science from Maharaja Surajmal Institue of Technology. "}),o.a.createElement("meta",{name:"keywords",content:"Hemant, Hemant Garg, Web Developer, MERN Stack, Hemant Garg Web Developer, MERN stack developer, Hemant Garg MERN Stack Developer, Full Stack Web Developer, hemant-garg, hemantgarg6"})),o.a.createElement(C,{logo:I.a,width:"27rem",height:"27rem"}),o.a.createElement("h1",{className:"my-name",style:{animationDelay:"1.5s"}},"Hemant Garg"),o.a.createElement("h3",{className:"my-tagline",style:{animationDelay:"2s"}},"A Full Stack Web Developer who plays Guitar"," "),o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(j.a,{to:{pathname:"/projects",state:{prev:!0}}},o.a.createElement(M.a,{delay:"2.5",color:"#6D214F",text:"PROJECTS",iconClass:"fas fa-briefcase"})),o.a.createElement(M.a,{delay:"2.8",onclick:this.goToResume,color:"#b71540",text:"RESUME",iconClass:"fas fa-location-arrow"})),o.a.createElement("div",{className:"social-link-container"},o.a.createElement(T,null)))}}]),t}(o.a.Component)),B=a(17),H=a(35),R=a.n(H),G=a(93);var L=Object(G.a)(function(e){var t=e.children,a=e.color,n=e.background,r=e.location.state,c=R()({page:!0,"page--prev":r&&r.prev});return o.a.createElement("section",{className:c,style:{color:a,background:n}},t)}),A=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement(g.a,null,o.a.createElement(b.a,{render:function(e){var t=e.location;return o.a.createElement(k.a,null,o.a.createElement(E.a,{key:t.pathname,classNames:"page",timeout:{enter:1e3,exit:1e3}},o.a.createElement(b.a,{location:t,render:function(){return o.a.createElement(y.a,null,o.a.createElement(b.a,{exact:!0,path:"/",render:function(){return o.a.createElement(L,null,o.a.createElement(D,null))}}),o.a.createElement(b.a,{exact:!0,path:"/projects",render:function(){return o.a.createElement(L,null,o.a.createElement(B.default,null))}}))}})))}}))}}]),t}(n.Component),F=(a(81),Object(l.d)(m,{},Object(l.a)(i.a)));c.a.render(o.a.createElement(s.a,{store:F},o.a.createElement(A,null)),document.getElementById("root"))}],[[42,2,1]]]);
//# sourceMappingURL=main.57b25657.chunk.js.map
(this.webpackJsonpresumeweb=this.webpackJsonpresumeweb||[]).push([[0],{13:function(e,t,i){},14:function(e,t,i){},15:function(e,t,i){"use strict";i.r(t);var n=i(0),o=i(1),c=i.n(o),a=i(3),r=i.n(a),s=(i(13),i(4)),l=i(5),d=i(7),p=i(6),j=(i(14),i.p+"static/media/img.235532e8.jpg"),h=i.p+"static/media/react.1c26ab6d.png",b=i.p+"static/media/java.ce608878.jpg",m=i.p+"static/media/javascript.ab65e723.png",x=i.p+"static/media/python.f22d1fce.png",u=[{job:"Mets - Citi Field",jobtitle:"Guest Experience",jobyear:"2017-2019",jobdescription:"Working for the Mets may not have lead to a lot of technical opportunities but it has lead me to learn different skills that could be applied to other environments. I learned to: ",joblist:["work in a fast paced environment","interact with thousands on a daily basis","handle different situations under pressure","work not just as a team but as a family"]},{job:"CodeNow - Workshop",jobtitle:"Intern",jobyear:"2015-2016",jobdescription:"This was a workshop that I attended during high school that really helped introduce coding and a coding language that I haven't heard of. I learned:",joblist:["the basics of programming","what Ruby on Rails is and how to use it","modify and experiment with the code to make it work like we want it to"]}],g=[{projectname:"Programming Language Concepts - CSCI 318 - Semester Project",projectdescription:"As a group we created an application using React Native. I worked on getting a profile, home, and login screen. With the login I used Expo Authentication with FireBase to keep track of the users. This allowed for a seamless Google login for the users. This would apply to the user's profile picture and name.",projectlist:["used React Native and JavaScript for the first time","used Google Sign-in for the application","created a basic feed using json","created a profile screen based on the user's Google account information"]},{projectname:"Websites - (including this one)",projectdescription:"I created this website after the project above, as I wanted to see what the differences were between React and React Native and to also update my website to make it easier for me to add information as I go along.",projectlist:["created mini-projects that would use JavaScript to interact with the user","learned how to use APIs at a basic level","allows me to maintain the website better than the previous one which was made solely off of html"]}],f=[{picture:m,name:"JavaScript"},{picture:h,name:"React & React Native"},{picture:b,name:"Java"},{picture:x,name:"Python"}];function y(){return Object(n.jsx)("div",{children:u.map((function(e){return Object(n.jsxs)("div",{style:{marginLeft:"15px"},children:[Object(n.jsxs)("div",{style:{lineHeight:"5px"},children:[Object(n.jsx)("h2",{children:e.job}),Object(n.jsxs)("div",{style:{display:"flex"},children:[Object(n.jsx)("h5",{style:{marginTop:"0px",marginRight:"10px"},children:e.jobtitle}),Object(n.jsx)("h6",{style:{marginTop:"0px"},children:e.jobyear})]}),Object(n.jsx)("div",{style:{marginTop:"0px",marginLeft:"15px",lineHeight:"20px"},children:e.jobdescription})]}),Object(n.jsx)("div",{style:{marginTop:"10px",marginLeft:"15px"},children:e.joblist.map((function(e){return Object(n.jsx)("li",{children:e})}))}),Object(n.jsx)("br",{})]})}))})}function O(){return Object(n.jsx)("div",{children:g.map((function(e){return Object(n.jsx)("div",{style:{marginLeft:"15px"},children:Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{style:{marginBottom:"0px",marginTop:"15px"},children:e.projectname}),Object(n.jsx)("div",{style:{marginTop:"0px",marginLeft:"15px",lineHeight:"20px",paddingRight:"30px"},children:e.projectdescription}),Object(n.jsx)("div",{style:{marginTop:"10px",marginLeft:"15px",lineHeight:"22px",paddingRight:"30px"},children:e.projectlist.map((function(e){return Object(n.jsx)("li",{children:e})}))}),Object(n.jsx)("br",{})]})})}))})}function v(e){return Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row",marginBottom:"15px",marginLeft:"15px"},children:[Object(n.jsx)("img",{alt:"",src:e.image,width:50,height:50,style:{marginRight:"15px"}}),Object(n.jsx)("p",{children:e.children})]})}function w(e){var t="#464341";return Object(n.jsx)("div",{style:{position:"absolute",color:"white",marginTop:"250px",marginLeft:"".concat(e.mL,"px"),overflow:"hidden",opacity:"".concat(e.opacity)},children:Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(n.jsx)("p",{style:{borderRadius:"15px",backgroundColor:t,marginBottom:"-10px"},children:"solanojovanni@gmail.com"}),Object(n.jsx)("p",{style:{borderRadius:"15px",backgroundColor:t,marginBottom:"-10px"},children:"jsolan06@nyit.edu"})," ",Object(n.jsx)("p",{style:{borderRadius:"15px",backgroundColor:t},children:"347-956-6482"})," "]})})}var k=function(e){Object(d.a)(i,e);var t=Object(p.a)(i);function i(e){var n;return Object(s.a)(this,i),(n=t.call(this,e)).hoveredOver=function(){n.setState({opacity:.6,opacity2:1})},n.hoveredGone=function(){!1===n.state.clicked&&n.setState({opacity:1,opacity2:0}),console.log("hovered over")},n.clickOn=function(){!1===n.state.clicked?(console.log("clicked"),n.setState({opacity:.6,opacity2:1,clicked:!0})):n.setState({clicked:!1})},n.state={showInfo:!1,opacity:1,opacity2:0,clicked:!1},n}return Object(l.a)(i,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"topBarContainer",children:[Object(n.jsxs)("div",{className:"cropThis",style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[Object(n.jsx)("img",{alt:"",src:j,className:"imageCropped",onMouseEnter:this.hoveredOver,onMouseLeave:this.hoveredGone,onClick:this.clickOn,style:{opacity:this.state.opacity}}),Object(n.jsx)(w,{mL:"25",opacity:this.state.opacity2}),Object(n.jsxs)("div",{style:{color:"white"},children:[Object(n.jsx)("h1",{children:"Jovanni Solano"}),Object(n.jsx)("p",{children:"Junior at the New York Institute of Technology"}),Object(n.jsx)("p",{style:{color:"#2c2c2c"},children:"click on my picture to see my contact information"})]})]}),Object(n.jsx)("hr",{})]})," ",Object(n.jsxs)("div",{style:{color:"white",marginLeft:"35px"},children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"About me"}),Object(n.jsx)("p",{children:"Hi my name is Jovanni. I'm in my third year of college at NYIT majoring in Computer Science."})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Languages I Know"}),f.map((function(e){return Object(n.jsx)(v,{image:e.picture,children:e.name})}))]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Experience"}),Object(n.jsx)(y,{})]}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("h1",{children:"Projects"}),Object(n.jsx)(O,{})]})]})]})}}]),i}(c.a.Component);r.a.render(Object(n.jsx)(k,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.4aa62874.chunk.js.map
(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c.n(a),n=c(4),r=c.n(n),i=(c(9),c(2)),l=(c(10),c.p+"static/media/Weather-img.e2d00873.jpg"),j=c(0);var o=function(){var e,t=Object(a.useState)({}),c=Object(i.a)(t,2),s=c[0],n=c[1],r=Object(a.useState)(""),o=Object(i.a)(r,2),d=o[0],h=o[1],m=Object(a.useState)("tamilnadu"),b=Object(i.a)(m,2),x=b[0],p=b[1],u="https://api.openweathermap.org/data/2.5/weather?q=".concat(x,"&appid=c3c16cd01bfa7473bb8a03d996fc2933");return Object(a.useEffect)((function(){fetch(u).then((function(e){return e.json()})).then((function(e){console.log(e),n(e)}))}),[u]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("header",{className:"d-flex  justify-content-center align-items-center",children:Object(j.jsx)("h2",{children:"React Weather App"})}),Object(j.jsxs)("div",{className:"card text-white",children:[Object(j.jsx)("img",{src:l,className:"card-img",alt:"..."}),Object(j.jsxs)("div",{className:"card-img-overlay d-flex flex-column justify-content-center align-items-center",children:[Object(j.jsxs)("div",{className:"d-flex form-item",children:[Object(j.jsx)("label",{htmlFor:"location-name",className:"col-form-label label",children:" Enter Location :"}),Object(j.jsx)("input",{type:"text",id:"location-name",className:"search d-flex",onChange:function(e){h(e.target.value)},value:d,placeholder:"Search"}),Object(j.jsx)("i",{onClick:function(){p(d)},className:"fas fa-search bg-secondary "})]}),Object(j.jsx)("div",{className:"card-body mx-auto",children:s.main?Object(j.jsxs)("div",{className:"text-center",children:[Object(j.jsx)("img",{src:"http://openweathermap.org/img/w/".concat(s.weather[0].icon,".png"),alt:"weather status icon",className:"weather-icon"}),Object(j.jsxs)("p",{children:[" ",Object(j.jsx)("strong",{children:s.weather[0].main})," "]}),Object(j.jsxs)("p",{className:"card-text city-name",children:[Object(j.jsx)("i",{className:"fas fa-map-marker-alt"})," ",Object(j.jsx)("strong",{children:s.name})]}),Object(j.jsx)("p",{className:"card-text country-name",children:s.sys.country}),Object(j.jsxs)("div",{className:"col-md-6 mx-auto",children:[Object(j.jsxs)("p",{className:"card-text temperature ",children:[(e=s.main.temp,(e-273.15).toFixed(2)),"\xb0c"]}),Object(j.jsxs)("p",{className:"card-text wind",children:[Object(j.jsx)("i",{className:"fas fa-wind"}),s.wind.speed,"km/hr"]})]})]}):Object(j.jsx)("h3",{children:"Loading..."})})]})]}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("code",{children:["Created by"," ",Object(j.jsx)("a",{href:"https://www.github.com/Haritha101-19.com",target:"none",children:"Haritha"})," ","using React"]})})]})},d=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(o,{})}),document.getElementById("root")),d()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.c2d80d25.chunk.js.map
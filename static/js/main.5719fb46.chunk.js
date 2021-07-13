(this["webpackJsonpweather-now"]=this["webpackJsonpweather-now"]||[]).push([[0],{17:function(e,t,c){},19:function(e,t,c){},20:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(5),i=c.n(r),a=c(6),j=c(7),l=c(11),h=c(9),d=c(3),b=c.n(d),o=c(4),O=c(8),x=c(10),u=(c(17),c(0)),m=function(e){var t=e.onSubmitClick,c=Object(n.useState)({city:""}),s=Object(x.a)(c,2),r=s[0],i=s[1],a="a1fa4db70938102cc249c6f256af961a";function j(){return(j=Object(O.a)(b.a.mark((function e(c){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.preventDefault(),""!==r.city){e.next=6;break}t(null),alert("City is required"),e.next=10;break;case 6:return e.next=8,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r.city,"&APPID=").concat(a)).then((function(e){return e.json()})).then((function(e){return e}));case 8:n=e.sent,t(n);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(u.jsx)("div",{className:"search-container",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("input",{type:"text",placeholder:"City",name:"city",className:"search-input",onChange:function(e){return function(e){var t=e.target.value;i(Object(o.a)(Object(o.a)({},r),{},{city:t}))}(e)}}),Object(u.jsx)("button",{className:"getweatherBtn",onClick:function(e){return function(e){return j.apply(this,arguments)}(e)},children:"Submit"})]})})};c(19);var p=function(e){var t=e.data,c="http://openweathermap.org/img/wn/"+"".concat(404!=t.cod?t.weather[0].icon:null)+".png";return Object(u.jsx)("div",{className:"result-container",children:404!=t.cod?Object(u.jsxs)(s.a.Fragment,{children:[Object(u.jsxs)("div",{className:"maincard",children:[Object(u.jsxs)("span",{className:"cardtitle",children:[t.name," , ",t.sys.country,". Weather"]}),Object(u.jsxs)("span",{className:"cardsubtitle",children:["As of ",(new Date).toLocaleTimeString()]}),Object(u.jsxs)("h1",{children:[" ",Math.floor(t.main.temp-273.15),Object(u.jsx)("sup",{children:"o"})]}),Object(u.jsx)("span",{className:"weather-main",children:t.weather[0].main}),Object(u.jsx)("img",{className:"weather-icon",src:c,alt:"",srcset:""}),Object(u.jsxs)("span",{className:"weather-description",children:[" ",t.weather[0].description]})]}),Object(u.jsxs)("div",{className:"weatherdetails",children:[Object(u.jsx)("div",{className:"section1",children:Object(u.jsxs)("table",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"High/Low"})}),Object(u.jsx)("td",{children:Object(u.jsxs)("span",{children:[Math.floor(t.main.temp_max-273.15),"/",Math.floor(t.main.temp_min-273.15)]})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Humidity"})}),Object(u.jsx)("td",{children:Object(u.jsxs)("span",{children:[t.main.humidity," %"]})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Pressure"})}),Object(u.jsx)("td",{children:Object(u.jsxs)("span",{children:[t.main.pressure," hPa"]})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Visibility"})}),Object(u.jsx)("td",{children:Object(u.jsxs)("span",{children:[t.visibility/1e3," Km"]})})]})]})}),Object(u.jsx)("div",{className:"section2",children:Object(u.jsxs)("table",{children:[Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Wind"})}),Object(u.jsx)("td",{children:Object(u.jsxs)("span",{children:[Math.floor(18*t.wind.speed/5)," km/hr"]})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Wind Direction"})}),Object(u.jsx)("td",{children:Object(u.jsxs)("span",{children:[t.wind.deg,Object(u.jsx)("sup",{children:"o"})," deg"]})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Sunrise"})}),Object(u.jsx)("td",{children:Object(u.jsx)("span",{children:new Date(1e3*t.sys.sunrise).toLocaleTimeString()})})]}),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:Object(u.jsx)("h4",{children:"Sunset"})}),Object(u.jsx)("td",{children:Object(u.jsx)("span",{children:new Date(1e3*t.sys.sunset).toLocaleTimeString()})})]})]})})]})]}):Object(u.jsx)("div",{className:"maincard",children:Object(u.jsx)("h2",{children:t.message})})})},f=(c(20),function(e){Object(l.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={weather:null},e.handleSubmitClick=function(t){e.setState({weather:t})},e}return Object(j.a)(c,[{key:"render",value:function(){var e=this.state.weather;return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)("div",{className:"weather-container",children:[Object(u.jsx)("span",{className:"title",children:"Weather App"}),Object(u.jsx)("br",{}),Object(u.jsx)(m,{onSubmitClick:this.handleSubmitClick}),e?Object(u.jsx)(p,{data:e}):null]})})}}]),c}(s.a.Component));i.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.5719fb46.chunk.js.map
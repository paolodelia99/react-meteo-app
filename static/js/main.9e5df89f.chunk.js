(this["webpackJsonpreact-meteo-web-app"]=this["webpackJsonpreact-meteo-web-app"]||[]).push([[0],{118:function(e,t,a){e.exports=a(230)},123:function(e,t,a){},124:function(e,t,a){},136:function(e,t){},138:function(e,t){},172:function(e,t){},173:function(e,t){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),s=a.n(c),i=(a(123),a(25)),l=a(26),o=a(29),m=a(27),u=a(30),p=a(31),d=a(20);a(124),a(125),a(126);var h=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-transparent"},r.a.createElement("div",{className:"d-flex w-50 order-0"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement(p.b,{className:"navbar-brand ml-3",to:"/"},r.a.createElement("h5",{className:"py-4 text-white app-logo"},"React Weather App"))),r.a.createElement("div",{className:"navbar-collapse collapse justify-content-center order-2",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav justify-content-center pull-sm-left"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.c,{className:"nav-link text-light p-3",to:"/"},r.a.createElement("b",null,"Search"))),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.c,{className:"nav-link text-light p-3",to:"/favourites"},r.a.createElement("b",null,"Favourites"))))))},y=a(15),v=a.n(y);var f=function(e){return r.a.createElement("div",{className:"container h-100"},r.a.createElement("div",null,e.error?r.a.createElement("div",{className:"alert alert-danger mx-5",role:"alert"},"Please enter city and country"):null),r.a.createElement("form",{onSubmit:e.loadWeather},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-3  offset-md-2"},r.a.createElement("input",{type:"text",className:"form-control",name:"city",autoComplete:"off",placeholder:"City"})),r.a.createElement("div",{className:"col-md-3"},r.a.createElement("input",{type:"text",className:"form-control",name:"country",autoComplete:"off",placeholder:"Country"})),r.a.createElement("div",{className:"col-md-3 mt-md-0 py-2 text-md-left"},r.a.createElement("button",{className:"btn btn-warning"},"Get Weather")))))},w=a(48),E=a(28),b=a(66);function g(e){var t=new Date(1e3*e),a=t.getHours(),n="0"+t.getMinutes(),r="0"+t.getSeconds();return a+":"+n.substr(-2)+":"+r.substr(-2)}var N=Object(E.b)(null,{addCity:function(e){return function(t){t({type:"ADD_CITY",payload:e})}}})((function(e){var t=e.addCity,a=e.cityname,c=e.country,s=e.weatherIcon,i=e.temp_celsius,l=e.temp_max,o=e.temp_min,m=e.description,u=e.isSearchPage,p=e.pressure,d=e.humidity,h=e.windSpeed,y=e.windDegree,v=e.sunrise,f=e.sunset,E=Object(n.useState)(!1),N=Object(w.a)(E,2),x=N[0],S=N[1];return r.a.createElement("div",{className:"container text-light"},r.a.createElement("div",{className:"Card"},a?r.a.createElement("h1",{className:"text-white text-center"},"Today"):null,r.a.createElement("br",null),r.a.createElement("h1",{className:"text-white py-3"},a),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(s," display-1")})),i?r.a.createElement("h1",{className:"py-2"},i,"\xb0"):null,function(e,t){if(e&&t)return r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},e,"\xb0"),r.a.createElement("span",{className:"px-4"},t,"\xb0"))}(o,l),r.a.createElement("h4",{className:"py-3"},m.charAt(0).toUpperCase()+m.slice(1)),r.a.createElement("br",null),a?r.a.createElement("div",{className:"details-container"},r.a.createElement("p",null,r.a.createElement("button",{className:"btn bg-transparent text-white",type:"button",onClick:function(){S(!x)},"data-toggle":"collapse","data-target":"#collapseExample","aria-expanded":"false","aria-controls":"collapseExample"},x?"Hide details":"Details")),r.a.createElement("div",{className:"collapse",id:"collapseExample"},r.a.createElement("div",null,r.a.createElement("h5",{className:"my-2"},"pressure: ",p," hPa"),r.a.createElement("h5",{className:"my-2"},"humidity: ",d," %"),r.a.createElement("h5",{className:"my-2"},"wind speed: ",h," meter/sec"),r.a.createElement("h5",{className:"my-2"},"wind deg: ",y,"\xb0"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-12 pl-2"},r.a.createElement("h5",{className:"my-2"},"sunrise time: ",g(v))),r.a.createElement("div",{className:"col-md-6 col-sm-12 pl-2"},r.a.createElement("h5",{className:"my-2"},"sunset time: ",g(f))))))):null,!u&&a?r.a.createElement("button",{className:"btn btn-warning my-3",onClick:function(){var e={id:Object(b.v4)(),cityName:a,country:c};t(e)}},"Add to Favourites"):null))})),x=function(e){var t=new Date;t.setDate(t.getDate()+e);var a=t.getDate(),n=t.getMonth()+1;return n<10&&(n="0"+n),a+"/"+n},S=function(e){return Math.floor(e-273.15)},C=function(e,t){if(e&&t)return r.a.createElement("h3",null,r.a.createElement("span",{className:"px-4"},e,"\xb0"),r.a.createElement("span",{className:"px-4"},t,"\xb0"))},_=function(e){var t=e.date,a=(e.cityname,e.weatherId),c=e.temp_celsius,s=e.temp_max,i=e.temp_min,l=e.description,o=Object(n.useState)(""),m=Object(w.a)(o,2),u=m[0],p=m[1];return Object(n.useEffect)((function(){!function(e){switch(!0){case e>=200&&e<232:p("wi-thunderstorm");break;case e>=300&&e<=321:p("wi-sleet");break;case e>=500&&e<=521:p("wi-storm-showers");break;case e>=600&&e<=622:p("wi-snow");break;case e>=701&&e<=781:p("wi-fog");break;case 800===e:p("wi-day-sunny");break;case e>=801&&e<=804:p("wi-day-fog");break;default:p("wi-day-fog")}}(a)}),[a]),r.a.createElement("div",{className:"text-white"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("h3",null,x(t)),r.a.createElement("h5",{className:"py-4"},r.a.createElement("i",{className:"wi ".concat(u," display-1")})))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col p-5"},c?r.a.createElement("h2",{className:"py-2"},S(c),"\xb0"):null,C(S(i),S(s)),r.a.createElement("h4",{className:"py-3"},l.charAt(0).toUpperCase()+l.slice(1)))))},k=a(113),I=a.n(k),j=function(e){var t,a=e.forecastList,n=e.cityname;return t=void 0!==a?a.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(_,{date:t+1,cityname:n,weatherId:e.weather[0].id,temp_celsius:e.main.temp,temp_max:e.main.temp_max,temp_min:e.main.temp_min,description:e.weather[0].description}))})):null,console.log(t),void 0!==a&&void 0!==n?r.a.createElement("div",{className:"text-center align-content-center forecast-big-wrapper"},r.a.createElement("h2",{className:"text-white py-3"},"Forecast for the next 6 days"),r.a.createElement("div",{className:"slider-container"},r.a.createElement(I.a,{dots:!0,infinite:!0,speed:500,slidesToShow:1,slidesToScroll:1},t))):null},O=a(47),T=O.API_KEY,W=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).getWeather=function(t){var a,n,r,c,s,i,l,o;return v.a.async((function(m){for(;;)switch(m.prev=m.next){case 0:if(t.preventDefault(),a=t.target.elements.country.value,n=t.target.elements.city.value,!a||!n){m.next=29;break}return m.prev=4,r="http:"===location.protocol?"http://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(a,"&appid=").concat(T):"https://api.openweathermap.org/data/2.5/weather?q=".concat(n,",").concat(a,"&appid=").concat(T),m.next=8,v.a.awrap(fetch(r));case 8:return c=m.sent,s="http:"===location.protocol?"http://api.openweathermap.org/data/2.5/forecast?q=".concat(n,",").concat(a,"&appid=").concat(T):"https://api.openweathermap.org/data/2.5/forecast?q=".concat(n,",").concat(a,"&appid=").concat(T),m.next=12,v.a.awrap(fetch(s));case 12:return i=m.sent,m.next=15,v.a.awrap(c.json());case 15:return l=m.sent,m.next=18,v.a.awrap(i.json());case 18:o=m.sent,e.setState({city:"".concat(l.name,", ").concat(l.sys.country),country:l.sys.country,main:l.weather[0].main,celsius:""+e.calCelsius(l.main.temp),temp_max:""+e.calCelsius(l.main.temp_max),temp_min:""+e.calCelsius(l.main.temp_min),description:l.weather[0].description,pressure:l.main.pressure,humidity:l.main.humidity,windSpeed:l.wind.speed,windDegree:l.wind.deg,sunrise:l.sys.sunrise,sunset:l.sys.sunset,error:!1,forecastList:o.list.slice(0,6)}),e.get_WeatherIcon(e.weatherIcon,l.weather[0].id),console.log(l),m.next=27;break;case 24:m.prev=24,m.t0=m.catch(4),e.setState({error:!0});case 27:m.next=30;break;case 29:e.setState({error:!0});case 30:case"end":return m.stop()}}),null,null,[[4,24]])},e.state={city:void 0,country:void 0,icon:void 0,main:void 0,celsius:void 0,temp_max:null,temp_min:null,pressure:null,humidity:null,windSpeed:null,windDegree:null,sunrise:null,sunset:null,description:"",error:!1,forecastList:void 0,isForecastingLoading:!0},e.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"get_WeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<232:this.setState({icon:e.Thunderstorm});break;case t>=300&&t<=321:this.setState({icon:e.Drizzle});break;case t>=500&&t<=521:this.setState({icon:e.Rain});break;case t>=600&&t<=622:this.setState({icon:e.Snow});break;case t>=701&&t<=781:this.setState({icon:e.Atmosphere});break;case 800===t:this.setState({icon:e.Clear});break;case t>=801&&t<=804:this.setState({icon:e.Clouds});break;default:this.setState({icon:e.Clouds})}}},{key:"calCelsius",value:function(e){return Math.floor(e-273.15)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,{loadWeather:this.getWeather,error:this.state.error}),r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-12 my-5"},r.a.createElement(N,{cityname:this.state.city,country:this.state.country,weatherIcon:this.state.icon,temp_celsius:this.state.celsius,temp_max:this.state.temp_max,temp_min:this.state.temp_min,description:this.state.description,pressure:this.state.pressure,humidity:this.state.humidity,windSpeed:this.state.windSpeed,windDegree:this.state.windDegree,sunrise:this.state.sunrise,sunset:this.state.sunset,isSearchPage:!1})),r.a.createElement("div",{className:"col-md-6 col-sm-12 my-5"},this.state.forecastList?r.a.createElement(j,{forecastList:this.state.forecastList,cityname:this.state.city}):null))))}}]),t}(n.Component),D=a(70),A=O.API_KEY,P=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentCity:"",currentCountry:"",currentWeatherIcon:"",currentTemp_celsius:"",currentTemp_max:"",currentTemp_min:"",currentDescription:"",currentPressure:null,currentHumidity:null,currentWindSpeed:null,currentWindDegree:null,currentSunriseTime:null,currentSunsetTime:null,error:!1},a.weatherIcon={Thunderstorm:"wi-thunderstorm",Drizzle:"wi-sleet",Rain:"wi-storm-showers",Snow:"wi-snow",Atmosphere:"wi-fog",Clear:"wi-day-sunny",Clouds:"wi-day-fog"},a.setCurrentCity=function(e){var t,n,r,c;return v.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:if(!e.country||!e.cityName){s.next=14;break}return t=e.cityName.split(",")[0],n="http:"===location.protocol?"http://api.openweathermap.org/data/2.5/weather?q=".concat(t,",").concat(e.country,"&appid=").concat(A):"https://api.openweathermap.org/data/2.5/weather?q=".concat(t,",").concat(e.country,"&appid=").concat(A),s.next=5,v.a.awrap(fetch(n));case 5:return r=s.sent,s.next=8,v.a.awrap(r.json());case 8:c=s.sent,console.log(c),a.setState({currentCity:e.cityName,currentCountry:e.country,currentWeatherIcon:e.weatherIcon,currentTemp_celsius:""+a.calCelsius(c.main.temp),currentTemp_max:""+a.calCelsius(c.main.temp_max),currentTemp_min:""+a.calCelsius(c.main.temp_min),currentDescription:c.weather[0].description,currentPressure:c.main.pressure,currentHumidity:c.main.humidity,currentWindSpeed:c.wind.speed,currentWindDegree:c.wind.deg,currentSunriseTime:c.sys.sunrise,currentSunsetTime:c.sys.sunset,error:!1}),a.get_WeatherIcon(a.weatherIcon,c.weather[0].id),s.next=15;break;case 14:a.setState({error:!0});case 15:case"end":return s.stop()}}))},a.calCelsius=function(e){return Math.floor(e-273.15)},a.removeFav=function(e,t){t===a.state.currentCity&&a.setState({currentCity:"",currentCountry:"",currentWeatherIcon:"",currentTemp_celsius:"",currentTemp_max:"",currentTemp_min:"",currentDescription:""}),a.props.removeCity(e)},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"get_WeatherIcon",value:function(e,t){switch(!0){case t>=200&&t<232:this.setState({currentWeatherIcon:e.Thunderstorm});break;case t>=300&&t<=321:this.setState({currentWeatherIcon:e.Drizzle});break;case t>=500&&t<=521:this.setState({currentWeatherIcon:e.Rain});break;case t>=600&&t<=622:this.setState({currentWeatherIcon:e.Snow});break;case t>=701&&t<=781:this.setState({currentWeatherIcon:e.Atmosphere});break;case 800===t:this.setState({currentWeatherIcon:e.Clear});break;case t>=801&&t<=804:this.setState({currentWeatherIcon:e.Clouds});break;default:this.setState({currentWeatherIcon:e.Clouds})}}},{key:"render",value:function(){var e=this,t=this.props.favourites.favourites;console.log(t);var a=t.map((function(t){return r.a.createElement("li",{key:t.id,className:"list-group-item bg-transparent",onClick:function(a){return e.setCurrentCity(t)}},r.a.createElement("p",{className:"fav-cityname-p"},t.cityName),r.a.createElement("button",{className:"btn delelte-fav-btn pull-right",onClick:function(a){return e.removeFav(t.id,t.cityName)}},r.a.createElement(D.b,{icon:D.a,size:"small",className:"delete-fav-icon"})))}));return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6 col-sm-12"},r.a.createElement("div",null,r.a.createElement("div",{className:"text-light"},r.a.createElement("h3",{className:"text-white py-3"},"Your favorites"),t?r.a.createElement("ul",{className:"list-group list-group-flush"},a):r.a.createElement("h3",null,"Not favourites yet")))),r.a.createElement("div",{className:"col-md-6 col-sm-12"},this.state.error?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Error"):null,r.a.createElement(N,{isSearchPage:!0,cityname:this.state.currentCity,weatherIcon:this.state.currentWeatherIcon,temp_celsius:this.state.currentTemp_celsius,temp_max:this.state.currentTemp_max,temp_min:this.state.currentTemp_min,description:this.state.currentDescription,pressure:this.state.currentPressure,humidity:this.state.currentHumidity,windSpeed:this.state.currentWindSpeed,windDegree:this.state.currentWindDegree,sunrise:this.state.currentSunriseTime,sunset:this.state.currentSunsetTime})))}}]),t}(n.Component),z=Object(E.b)((function(e){return{favourites:e.favourites}}),{removeCity:function(e){return function(t){t({type:"REMOVE_CITY",payload:e})}}})(P),M=a(19),R=a(114),Y=a(115),L=a(117),q=a(71),F={favourites:[],loading:!0},H=Object(M.combineReducers)({favourites:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"ADD_CITY":return Object(q.a)({},e,{favourites:[n].concat(Object(L.a)(e.favourites)),loading:!1});case"REMOVE_CITY":return Object(q.a)({},e,{favourites:e.favourites.filter((function(e){return e.id!==n}))});default:return e}}}),J=a(116),K=a.n(J),B=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),U=[Y.a],V=Object(M.createStore)(H,B,Object(R.composeWithDevTools)(M.applyMiddleware.apply(void 0,U)));V.subscribe(K()((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){}}(V.getState())}),1e3));var G=V,$=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{store:G},r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(h,null),r.a.createElement(d.c,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:W}),r.a.createElement(d.a,{exact:!0,path:"/favourites",component:z}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},47:function(e){e.exports=JSON.parse('{"API_KEY":"b6c401972b7a8c623e78936ba160fe1d"}')}},[[118,1,2]]]);
//# sourceMappingURL=main.9e5df89f.chunk.js.map
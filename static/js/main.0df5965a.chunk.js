(this.webpackJsonptmdb_movie_app=this.webpackJsonptmdb_movie_app||[]).push([[0],{21:function(e,t,a){},34:function(e,t,a){e.exports=a(65)},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(31),i=a.n(c),s=a(11),l=a(7),o=a(5),m=a.n(o),g=a(12),p=a(13),u=a(15),d=a(14),v=a(16),h=(a(21),a(9)),E=a.n(h);a(57);var f=function(e){var t=e.title,a=e.date,n=e.overview,c=e.poster;return r.a.createElement("div",{className:"movies_movie"},r.a.createElement("img",{src:c,alt:t,title:t}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},t),r.a.createElement("h5",{className:"movie_date"},a),r.a.createElement("p",{className:"overview"},n)))};a(58);var b=function(e){var t=e.getPrevPage,a=e.getNextPage,n=e.page,c=e.total_pages;return 1===n?r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"currnet"},n,"/",c),r.a.createElement("div",{className:"next",onClick:function(){return a()}},"Next \u2192")):n===c?r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"prev",onClick:function(){return t()}},"\u2190 Prev"),r.a.createElement("div",{className:"currnet"},n,"/",c)):r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"prev",onClick:function(){return t()}},"\u2190 Prev"),r.a.createElement("div",{className:"currnet"},n,"/",c),r.a.createElement("div",{className:"next",onClick:function(){return a()}},"Next \u2192"))};a(59);var N=function(){return r.a.createElement("ul",null,r.a.createElement(s.b,{to:"/Popular"},r.a.createElement("li",null,"Popular")),r.a.createElement(s.b,{to:"/TopRate"},r.a.createElement("li",null,"Top rated")),r.a.createElement("li",null,"Upcoming"),r.a.createElement("li",null,"Now playing"))},_=function(e){function t(e){var a;return Object(g.a)(this,t),console.log("this is initializer"),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getMoviesBytitle=function(e){var t,n,r,c;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.target.value,n="https://api.themoviedb.org/3/search/movie?api_key=b1306395631dc84cde154096963c13db&language=en-US&query="+t,i.next=4,m.a.awrap(E.a.get(n));case 4:r=i.sent,c=r.data,a.setState({url:n,isLoading:!1,db:c,page:c.page,total_pages:c.total_pages});case 7:case"end":return i.stop()}}))},a.getMovieList=function(e){var t,n,r;return m.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log(e),t=a.state.url+"&page="+e,c.next=4,m.a.awrap(E.a.get(t));case 4:n=c.sent,r=n.data,a.setState({url:t,isLoading:!1,db:r,page:r.page,total_pages:r.total_pages});case 7:case"end":return c.stop()}}))},a.getNextPage=function(){return m.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:a.getMovieList(a.state.page+1);case 1:case"end":return e.stop()}}))},a.getPrevPage=function(){a.getMovieList(a.state.page-1)},a.state={url:"https://api.themoviedb.org/3/movie/popular?api_key=b1306395631dc84cde154096963c13db&language=en-US",isLoading:!0,page:1,total_pages:1,db:[]},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){console.log("rendered"),this.getMovieList(1)}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.db,n=e.page,c=e.total_pages;return r.a.createElement("div",{className:"Home"},r.a.createElement("header",null,r.a.createElement("a",{href:"/"},r.a.createElement("h1",null,"The MovieDB"))),r.a.createElement("div",{className:"nav"},r.a.createElement(N,null),r.a.createElement("input",{onChange:this.getMoviesBytitle.bind(),placeholder:"Enter Search Items",className:"inputbox"})),r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title"},"Popular Movies"),r.a.createElement("div",{className:"contents"},t?r.a.createElement("div",{className:"loading"},r.a.createElement("span",{className:"load_text"},"Loading..")):a.results.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,title:e.title,date:e.release_date,overview:e.overview,poster:"http://image.tmdb.org/t/p/w185"+e.poster_path})}))),r.a.createElement(b,{getPrevPage:this.getPrevPage,getNextPage:this.getNextPage,page:n,total_pages:c})))}}]),t}(r.a.Component),x=function(e){function t(e){var a;return Object(g.a)(this,t),console.log("this is initializer"),(a=Object(u.a)(this,Object(d.a)(t).call(this,e))).getMoviesBytitle=function(e){var t,n,r,c;return m.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return t=e.target.value,n="https://api.themoviedb.org/3/search/movie?api_key=b1306395631dc84cde154096963c13db&language=en-US&query="+t,i.next=4,m.a.awrap(E.a.get(n));case 4:r=i.sent,c=r.data,a.setState({url:n,isLoading:!1,db:c,page:c.page,total_pages:c.total_pages});case 7:case"end":return i.stop()}}))},a.getMovieList=function(e){var t,n,r;return m.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return console.log(e),t=a.state.url+"&page="+e,c.next=4,m.a.awrap(E.a.get(t));case 4:n=c.sent,r=n.data,a.setState({url:t,isLoading:!1,db:r,page:r.page,total_pages:r.total_pages});case 7:case"end":return c.stop()}}))},a.getNextPage=function(){a.getMovieList(a.state.page+1)},a.getPrevPage=function(){a.getMovieList(a.state.page-1)},a.state={url:"https://api.themoviedb.org/3/movie/top_rated?api_key=b1306395631dc84cde154096963c13db&language=en-US",isLoading:!0,page:1,total_pages:1,db:[]},a}return Object(v.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){console.log("rendered"),this.getMovieList(1)}},{key:"render",value:function(){console.log("rendering");var e=this.state,t=e.isLoading,a=e.db,n=e.page,c=e.total_pages;return r.a.createElement("div",{className:"Home"},r.a.createElement("header",null,r.a.createElement("a",{href:"/"},r.a.createElement("h1",null,"The MovieDB"))),r.a.createElement("div",{className:"nav"},r.a.createElement(N,null),r.a.createElement("input",{onChange:this.getMoviesBytitle.bind(),placeholder:"Enter Search Items",className:"inputbox"})),r.a.createElement("div",{className:"container"},r.a.createElement("h2",{className:"title"},"Top Rated Movies"),r.a.createElement("div",{className:"contents"},t?r.a.createElement("div",{className:"loading"},r.a.createElement("span",{className:"load_text"},"Loading..")):a.results.map((function(e){return r.a.createElement(f,{key:e.id,id:e.id,title:e.title,date:e.release_date,overview:e.overview,poster:"http://image.tmdb.org/t/p/w185"+e.poster_path})}))),r.a.createElement(b,{getPrevPage:this.getPrevPage,getNextPage:this.getNextPage,page:n,total_pages:c})))}}]),t}(r.a.Component);var P=function(){return r.a.createElement(s.a,{basename:window.location.pathname||""},r.a.createElement(l.a,{path:"/",exact:!0,component:_}),r.a.createElement(l.a,{path:"/popular",component:_}),r.a.createElement(l.a,{path:"/TopRate",exact:!0,component:x}))};i.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.0df5965a.chunk.js.map
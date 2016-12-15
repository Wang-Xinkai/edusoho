webpackJsonp(["app/js/course-manage/teachers/index"],{d8ed64338f14092afe30:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(e,t,a,r){var n,i={itemId:Math.random(),nickname:t[r.nickname],isVisible:1==t[r.isVisible],avatar:t[r.avatar],seq:a,outputValue:(n={},o(n,r.id,t[r.id]),o(n,r.isVisible,t[r.isVisible]),n)};e.push(i)}function l(e,t){e.map(function(a,r){a.itemId==t&&(e[r].isVisible=!e[r].isVisible,e[r].outputValue.isVisible=e[r].isVisible?1:0)})}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),f=a("33a776824bec073629e5"),p=r(f),d=a("92755c6227786723f528"),b=r(d),h=a("ebb28bc7cbfe4a3eb1ef"),m=r(h),y=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.searchResult=null,a}return s(t,e),c(t,[{key:"componentWillMount",value:function(){var e=this;this.state={dataSourceUi:[],list:[],outputSets:[]},this.props.dataSource.map(function(t,a){u(e.state.dataSourceUi,t,a+1,e.props)}),this.state.list=this.getList(),this.getOutputSets()}},{key:"onChecked",value:function(e){var t=e.currentTarget.value;l(this.state.dataSourceUi,t),this.getOutputSets(),this.setState({list:this.getList()})}},{key:"addItem",value:function(e){this.searchResult&&(u(this.state.dataSourceUi,this.searchResult,this.state.dataSourceUi.length+1,this.props),this.searchResult=null,this.getOutputSets(),this.setState({list:this.getList()}))}},{key:"onSearch",value:function(e){this.searchResult=JSON.parse(e)}},{key:"getList",value:function(){var e=this;return p.default.createElement(m.default,{listClassName:this.props.listClassName,dataSourceUi:this.state.dataSourceUi,removeItem:function(t){return e.removeItem(t)},sortItem:function(t){return e.sortItem(t)},onChecked:function(t){return e.onChecked(t)},sortable:this.props.sortable})}}]),t}(b.default);t.default=y,b.default.propTypes={multiInputClassName:p.default.PropTypes.string,listClassName:p.default.PropTypes.string,dataSource:p.default.PropTypes.array.isRequired,sortable:p.default.PropTypes.bool,addable:p.default.PropTypes.bool,searchable:p.default.PropTypes.shape({enable:p.default.PropTypes.bool,url:p.default.PropTypes.string}),id:p.default.PropTypes.string,nickname:p.default.PropTypes.string,avatar:p.default.PropTypes.string,isVisible:p.default.PropTypes.string},b.default.defaultProps={multiInputClassName:"multi-group",listClassName:"",dataSource:[],sortable:!0,addable:!0,searchable:{enable:!1,url:""},outputDataElement:"hidden-input",id:"id",nickname:"nickname",avatar:"avatar",isVisible:"isVisible"}},ebb28bc7cbfe4a3eb1ef:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),u=a("33a776824bec073629e5"),l=r(u),c=a("8f840897d9471c8c1fbd"),f=r(c),p=function(e){function t(e){n(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.listId=Math.random().toString().replace(".",""),a}return s(t,e),o(t,[{key:"componentDidMount",value:function(){var e=this;this.props.sortable&&(0,f.default)({element:"#"+this.listId,itemSelector:"li",ajax:!1},function(t){e.props.sortItem(t)})}},{key:"render",value:function(){var e=this,t=this.props.dataSourceUi,a="";return t.length>0&&(a="list-group"),l.default.createElement("ul",{id:this.listId,className:"sortable-list "+a+" "+this.props.listClassName},t.map(function(t,a){return l.default.createElement("li",{className:"list-group-item",id:t.itemId,key:t.itemId,"data-seq":t.seq},l.default.createElement("img",{src:t.avatar}),t.nickname,l.default.createElement("label",null,l.default.createElement("input",{type:"checkbox",checked:t.isVisible,onChange:function(t){return e.props.onChecked(t)},value:t.itemId}),"显示"),l.default.createElement("a",{className:"pull-right",onClick:function(t){return e.props.removeItem(t)},id:t.itemId},l.default.createElement("i",{className:"es-icon es-icon-close01"})))}))}}]),t}(u.Component);t.default=p},0:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var n=a("5fdcf1aea784583ca083"),i=r(n),s=a("33a776824bec073629e5"),o=r(s),u=a("d8ed64338f14092afe30"),l=r(u),c=a("8f840897d9471c8c1fbd");r(c);i.default.render(o.default.createElement(l.default,{addable:!0,dataSource:$("#course-teachers").data("init-value"),outputDataElement:"teachers",searchable:{enable:!0,url:"/course/273/manage/teachersMatch?q={{query}}"}}),document.getElementById("course-teachers"))}});
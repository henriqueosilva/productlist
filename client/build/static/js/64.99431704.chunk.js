"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[64],{64:function(e,t,n){n.r(t);var r=n(885),a=n(313),i=n(214),l=n(43),u=n(417),o=a.forwardRef((function(e,t){var n=t.weightRef,o=(0,a.useState)(""),c=(0,r.Z)(o,2),s=c[0],d=c[1];function h(e){if(!e)return e;var t=e.replace(/[^\d]/g,"");if(t.length<=2)return t;var n=t.slice(t.length-2),r=t.slice(0,t.length-2);return"".concat(r,".").concat(n)}return(0,a.useEffect)((function(){var e;null!==(e=n.current)&&void 0!==e&&e.value&&(n.current.value="")}),[n]),(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.Z.Label,{htmlFor:"",visuallyHidden:!0,children:"Weight"}),(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(l.Z.Text,{children:"KG"}),(0,u.jsx)(i.Z.Control,{id:"weight",type:"text",placeholder:"Weight",ref:n,value:s,onChange:function(e){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=arguments.length>2?arguments[2]:void 0;e.target.value.length>=t&&(e.target.value=e.target.value.substr(0,t));var r=h(e.target.value);n(r)}(e,11,d)},required:!0}),(0,u.jsx)(i.Z.Control.Feedback,{type:"valid",children:"Looks good!"}),(0,u.jsx)(i.Z.Control.Feedback,{type:"invalid",children:"Please insert a Weight"})]})]})}));t.default=o},43:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(987),a=n(413),i=n(123),l=n.n(i),u=n(313),o=n(864),c=n(524),s=n(84),d=u.createContext(null);d.displayName="InputGroupContext";var h=d,v=n(417),f=["bsPrefix","size","hasValidation","className","as"],x=(0,o.Z)("input-group-text",{Component:"span"}),g=u.forwardRef((function(e,t){var n=e.bsPrefix,i=e.size,o=e.hasValidation,s=e.className,d=e.as,x=void 0===d?"div":d,g=(0,r.Z)(e,f);n=(0,c.vE)(n,"input-group");var p=(0,u.useMemo)((function(){return{}}),[]);return(0,v.jsx)(h.Provider,{value:p,children:(0,v.jsx)(x,(0,a.Z)((0,a.Z)({ref:t},g),{},{className:l()(s,n,i&&"".concat(n,"-").concat(i),o&&"has-validation")}))})}));g.displayName="InputGroup";var p=Object.assign(g,{Text:x,Radio:function(e){return(0,v.jsx)(x,{children:(0,v.jsx)(s.Z,(0,a.Z)({type:"radio"},e))})},Checkbox:function(e){return(0,v.jsx)(x,{children:(0,v.jsx)(s.Z,(0,a.Z)({type:"checkbox"},e))})}})}}]);
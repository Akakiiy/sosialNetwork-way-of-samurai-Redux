"use strict";(self.webpackChunkway_of_samurai=self.webpackChunkway_of_samurai||[]).push([[831],{8831:function(n,e,t){t.r(e),t.d(e,{default:function(){return In}});var o=t(9439),i=t(2791),a="ChatPage_chatMessagesList__4NJZp",c="ChatPage_chatMessageForm__Ypd9k",r="ChatPage_chatMessageFormTextarea__Y7rUp",l="ChatPage_chatMessageFormBtns__m3dtv",d="ChatPage_chatMessageFormSwitch__a+0qX",s=t(4247),u=t(2962),h=t(1087),g=t(8687),p=t(6916),b=(0,p.P1)((function(n){return n.chatPage.messages}),(function(n){return n})),f=(0,p.P1)((function(n){return n.chatPage.chatStatus}),(function(n){return n})),S=t(184),m=function(n){var e=n.autoscrollMode,t=n.fontSize,o=(0,i.useRef)(null),c=(0,g.v9)(b);return(0,i.useEffect)((function(){var n;e&&(null===(n=o.current)||void 0===n||n.scrollIntoView({behavior:"smooth"}))}),[c]),(0,S.jsx)(s.ZP,{className:a,itemLayout:"horizontal",dataSource:c,renderItem:function(n,e){return(0,S.jsx)(S.Fragment,{children:(0,S.jsxs)(s.ZP.Item,{children:[(0,S.jsx)(s.ZP.Item.Meta,{avatar:(0,S.jsx)(h.rU,{to:"/profile/".concat(n.userId),children:(0,S.jsx)(u.C,{src:n.photo})}),title:(0,S.jsx)(h.rU,{style:{fontSize:"".concat(t,"px")},to:"/profile/".concat(n.userId),children:n.userName}),description:(0,S.jsx)("div",{style:{fontSize:"".concat(t,"px")},children:n.message})}),(0,S.jsx)("div",{ref:e===c.length-1?o:null})]})})}})},w=t(5705),v=t(4942),C=t(1694),x=t.n(C),k=t(5179);var Z=t(1929),I=t(4107),y=i.createContext(null),M=y.Provider,E=y,P=i.createContext(null),z=P.Provider,j=t(7462),O=t(1413),B=t(5987),D=["prefixCls","className","style","checked","disabled","defaultChecked","type","onChange"],N=(0,i.forwardRef)((function(n,e){var t,a=n.prefixCls,c=void 0===a?"rc-checkbox":a,r=n.className,l=n.style,d=n.checked,s=n.disabled,u=n.defaultChecked,h=void 0!==u&&u,g=n.type,p=void 0===g?"checkbox":g,b=n.onChange,f=(0,B.Z)(n,D),S=(0,i.useRef)(null),m=(0,k.Z)(h,{value:d}),w=(0,o.Z)(m,2),C=w[0],Z=w[1];(0,i.useImperativeHandle)(e,(function(){return{focus:function(){var n;null===(n=S.current)||void 0===n||n.focus()},blur:function(){var n;null===(n=S.current)||void 0===n||n.blur()},input:S.current}}));var I=x()(c,r,(t={},(0,v.Z)(t,"".concat(c,"-checked"),C),(0,v.Z)(t,"".concat(c,"-disabled"),s),t));return i.createElement("span",{className:I,style:l},i.createElement("input",(0,j.Z)({},f,{className:"".concat(c,"-input"),ref:S,onChange:function(e){s||("checked"in n||Z(e.target.checked),null===b||void 0===b||b({target:(0,O.Z)((0,O.Z)({},n),{},{type:p,checked:e.target.checked}),stopPropagation:function(){e.stopPropagation()},preventDefault:function(){e.preventDefault()},nativeEvent:e.nativeEvent}))},disabled:s,checked:!!C,type:p})),i.createElement("span",{className:"".concat(c,"-inner")}))})),R=N,H=t(8834),T=t(9125),_=t(1940),W=t(1178),L=t(5564),F=t(9922),A=t(7521),X=new W.E4("antRadioEffect",{"0%":{transform:"scale(1)",opacity:.5},"100%":{transform:"scale(1.6)",opacity:0}}),G=function(n){var e,t=n.componentCls,o=n.antCls,i="".concat(t,"-group");return(0,v.Z)({},i,Object.assign(Object.assign({},(0,A.Wf)(n)),(e={display:"inline-block",fontSize:0},(0,v.Z)(e,"&".concat(i,"-rtl"),{direction:"rtl"}),(0,v.Z)(e,"".concat(o,"-badge ").concat(o,"-badge-count"),{zIndex:1}),(0,v.Z)(e,"> ".concat(o,"-badge:not(:first-child) > ").concat(o,"-button-wrapper"),{borderInlineStart:"none"}),e)))},V=function(n){var e,t,o=n.componentCls,i=n.radioWrapperMarginRight,a=n.radioCheckedColor,c=n.radioSize,r=n.motionDurationSlow,l=n.motionDurationMid,d=n.motionEaseInOut,s=n.motionEaseInOutCirc,u=n.radioButtonBg,h=n.colorBorder,g=n.lineWidth,p=n.radioDotSize,b=n.colorBgContainerDisabled,f=n.colorTextDisabled,S=n.paddingXS,m=n.radioDotDisabledColor,w=n.lineType,C=n.radioDotDisabledSize,x=n.wireframe,k=n.colorWhite,Z="".concat(o,"-inner");return(0,v.Z)({},"".concat(o,"-wrapper"),Object.assign(Object.assign({},(0,A.Wf)(n)),(t={position:"relative",display:"inline-flex",alignItems:"baseline",marginInlineStart:0,marginInlineEnd:i,cursor:"pointer"},(0,v.Z)(t,"&".concat(o,"-wrapper-rtl"),{direction:"rtl"}),(0,v.Z)(t,"&-disabled",{cursor:"not-allowed",color:n.colorTextDisabled}),(0,v.Z)(t,"&::after",{display:"inline-block",width:0,overflow:"hidden",content:'"\\a0"'}),(0,v.Z)(t,"".concat(o,"-checked::after"),{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:"100%",height:"100%",border:"".concat(g,"px ").concat(w," ").concat(a),borderRadius:"50%",visibility:"hidden",animationName:X,animationDuration:r,animationTimingFunction:d,animationFillMode:"both",content:'""'}),(0,v.Z)(t,o,Object.assign(Object.assign({},(0,A.Wf)(n)),{position:"relative",display:"inline-block",outline:"none",cursor:"pointer",alignSelf:"center"})),(0,v.Z)(t,"".concat(o,"-wrapper:hover &,\n        &:hover ").concat(Z),{borderColor:a}),(0,v.Z)(t,"".concat(o,"-input:focus-visible + ").concat(Z),Object.assign({},(0,A.oN)(n))),(0,v.Z)(t,"".concat(o,":hover::after, ").concat(o,"-wrapper:hover &::after"),{visibility:"visible"}),(0,v.Z)(t,"".concat(o,"-inner"),{"&::after":{boxSizing:"border-box",position:"absolute",insetBlockStart:"50%",insetInlineStart:"50%",display:"block",width:c,height:c,marginBlockStart:c/-2,marginInlineStart:c/-2,backgroundColor:x?a:k,borderBlockStart:0,borderInlineStart:0,borderRadius:c,transform:"scale(0)",opacity:0,transition:"all ".concat(r," ").concat(s),content:'""'},boxSizing:"border-box",position:"relative",insetBlockStart:0,insetInlineStart:0,display:"block",width:c,height:c,backgroundColor:u,borderColor:h,borderStyle:"solid",borderWidth:g,borderRadius:"50%",transition:"all ".concat(l)}),(0,v.Z)(t,"".concat(o,"-input"),{position:"absolute",insetBlockStart:0,insetInlineEnd:0,insetBlockEnd:0,insetInlineStart:0,zIndex:1,cursor:"pointer",opacity:0}),(0,v.Z)(t,"".concat(o,"-checked"),(0,v.Z)({},Z,{borderColor:a,backgroundColor:x?u:a,"&::after":{transform:"scale(".concat(p/c,")"),opacity:1,transition:"all ".concat(r," ").concat(s)}})),(0,v.Z)(t,"".concat(o,"-disabled"),(e={cursor:"not-allowed"},(0,v.Z)(e,Z,{backgroundColor:b,borderColor:h,cursor:"not-allowed","&::after":{backgroundColor:m}}),(0,v.Z)(e,"".concat(o,"-input"),{cursor:"not-allowed"}),(0,v.Z)(e,"".concat(o,"-disabled + span"),{color:f,cursor:"not-allowed"}),(0,v.Z)(e,"&".concat(o,"-checked"),(0,v.Z)({},Z,{"&::after":{transform:"scale(".concat(C/c,")")}})),e)),(0,v.Z)(t,"span".concat(o," + *"),{paddingInlineStart:S,paddingInlineEnd:S}),t)))},K=function(n){var e,t=n.radioButtonColor,o=n.controlHeight,i=n.componentCls,a=n.lineWidth,c=n.lineType,r=n.colorBorder,l=n.motionDurationSlow,d=n.motionDurationMid,s=n.radioButtonPaddingHorizontal,u=n.fontSize,h=n.radioButtonBg,g=n.fontSizeLG,p=n.controlHeightLG,b=n.controlHeightSM,f=n.paddingXS,S=n.borderRadius,m=n.borderRadiusSM,w=n.borderRadiusLG,C=n.radioCheckedColor,x=n.radioButtonCheckedBg,k=n.radioButtonHoverColor,Z=n.radioButtonActiveColor,I=n.radioSolidCheckedColor,y=n.colorTextDisabled,M=n.colorBgContainerDisabled,E=n.radioDisabledButtonCheckedColor,P=n.radioDisabledButtonCheckedBg;return(0,v.Z)({},"".concat(i,"-button-wrapper"),(e={position:"relative",display:"inline-block",height:o,margin:0,paddingInline:s,paddingBlock:0,color:t,fontSize:u,lineHeight:"".concat(o-2*a,"px"),background:h,border:"".concat(a,"px ").concat(c," ").concat(r),borderBlockStartWidth:a+.02,borderInlineStartWidth:0,borderInlineEndWidth:a,cursor:"pointer",transition:["color ".concat(d),"background ".concat(d),"border-color ".concat(d),"box-shadow ".concat(d)].join(","),a:{color:t}},(0,v.Z)(e,"> ".concat(i,"-button"),{position:"absolute",insetBlockStart:0,insetInlineStart:0,zIndex:-1,width:"100%",height:"100%"}),(0,v.Z)(e,"&:not(:first-child)",{"&::before":{position:"absolute",insetBlockStart:-a,insetInlineStart:-a,display:"block",boxSizing:"content-box",width:1,height:"100%",paddingBlock:a,paddingInline:0,backgroundColor:r,transition:"background-color ".concat(l),content:'""'}}),(0,v.Z)(e,"&:first-child",{borderInlineStart:"".concat(a,"px ").concat(c," ").concat(r),borderStartStartRadius:S,borderEndStartRadius:S}),(0,v.Z)(e,"&:last-child",{borderStartEndRadius:S,borderEndEndRadius:S}),(0,v.Z)(e,"&:first-child:last-child",{borderRadius:S}),(0,v.Z)(e,"".concat(i,"-group-large &"),{height:p,fontSize:g,lineHeight:"".concat(p-2*a,"px"),"&:first-child":{borderStartStartRadius:w,borderEndStartRadius:w},"&:last-child":{borderStartEndRadius:w,borderEndEndRadius:w}}),(0,v.Z)(e,"".concat(i,"-group-small &"),{height:b,paddingInline:f-a,paddingBlock:0,lineHeight:"".concat(b-2*a,"px"),"&:first-child":{borderStartStartRadius:m,borderEndStartRadius:m},"&:last-child":{borderStartEndRadius:m,borderEndEndRadius:m}}),(0,v.Z)(e,"&:hover",{position:"relative",color:C}),(0,v.Z)(e,"&:has(:focus-visible)",Object.assign({},(0,A.oN)(n))),(0,v.Z)(e,"".concat(i,"-inner, input[type='checkbox'], input[type='radio']"),{width:0,height:0,opacity:0,pointerEvents:"none"}),(0,v.Z)(e,"&-checked:not(".concat(i,"-button-wrapper-disabled)"),{zIndex:1,color:C,background:x,borderColor:C,"&::before":{backgroundColor:C},"&:first-child":{borderColor:C},"&:hover":{color:k,borderColor:k,"&::before":{backgroundColor:k}},"&:active":{color:Z,borderColor:Z,"&::before":{backgroundColor:Z}}}),(0,v.Z)(e,"".concat(i,"-group-solid &-checked:not(").concat(i,"-button-wrapper-disabled)"),{color:I,background:C,borderColor:C,"&:hover":{color:I,background:k,borderColor:k},"&:active":{color:I,background:Z,borderColor:Z}}),(0,v.Z)(e,"&-disabled",{color:y,backgroundColor:M,borderColor:r,cursor:"not-allowed","&:first-child, &:hover":{color:y,backgroundColor:M,borderColor:r}}),(0,v.Z)(e,"&-disabled".concat(i,"-button-wrapper-checked"),{color:E,backgroundColor:P,borderColor:r,boxShadow:"none"}),e))},Q=(0,L.Z)("Radio",(function(n){var e=n.padding,t=n.lineWidth,o=n.controlItemBgActiveDisabled,i=n.colorTextDisabled,a=n.colorBgContainer,c=n.fontSizeLG,r=n.controlOutline,l=n.colorPrimaryHover,d=n.colorPrimaryActive,s=n.colorText,u=n.colorPrimary,h=n.marginXS,g=n.controlOutlineWidth,p=n.colorTextLightSolid,b=n.wireframe,f="0 0 0 ".concat(g,"px ").concat(r),S=f,m=c,w=m-8,v=b?w:m-2*(4+t),C=u,x=s,k=l,Z=d,I=e-t,y=i,M=h,E=(0,F.TS)(n,{radioFocusShadow:f,radioButtonFocusShadow:S,radioSize:m,radioDotSize:v,radioDotDisabledSize:w,radioCheckedColor:C,radioDotDisabledColor:i,radioSolidCheckedColor:p,radioButtonBg:a,radioButtonCheckedBg:a,radioButtonColor:x,radioButtonHoverColor:k,radioButtonActiveColor:Z,radioButtonPaddingHorizontal:I,radioDisabledButtonCheckedBg:o,radioDisabledButtonCheckedColor:y,radioWrapperMarginRight:M});return[G(E),V(E),K(E)]})),U=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(t[o[i]]=n[o[i]])}return t},J=function(n,e){var t,a,c,r=i.useContext(E),l=i.useContext(P),d=i.useContext(Z.E_),s=d.getPrefixCls,u=d.direction,h=i.useRef(null),g=(0,H.sQ)(e,h),p=i.useContext(_.aM).isFormItemInput,b=n.prefixCls,f=n.className,S=n.rootClassName,m=n.children,w=n.style,C=U(n,["prefixCls","className","rootClassName","children","style"]),k=s("radio",b),I="button"===((null===r||void 0===r?void 0:r.optionType)||l)?"".concat(k,"-button"):k,y=Q(k),M=(0,o.Z)(y,2),z=M[0],j=M[1],O=Object.assign({},C),B=i.useContext(T.Z);r&&(O.name=r.name,O.onChange=function(e){var t,o;null===(t=n.onChange)||void 0===t||t.call(n,e),null===(o=null===r||void 0===r?void 0:r.onChange)||void 0===o||o.call(r,e)},O.checked=n.value===r.value,O.disabled=null!==(a=O.disabled)&&void 0!==a?a:r.disabled),O.disabled=null!==(c=O.disabled)&&void 0!==c?c:B;var D=x()("".concat(I,"-wrapper"),(t={},(0,v.Z)(t,"".concat(I,"-wrapper-checked"),O.checked),(0,v.Z)(t,"".concat(I,"-wrapper-disabled"),O.disabled),(0,v.Z)(t,"".concat(I,"-wrapper-rtl"),"rtl"===u),(0,v.Z)(t,"".concat(I,"-wrapper-in-form-item"),p),t),f,S,j);return z(i.createElement("label",{className:D,style:w,onMouseEnter:n.onMouseEnter,onMouseLeave:n.onMouseLeave},i.createElement(R,Object.assign({},O,{type:"radio",prefixCls:I,ref:g})),void 0!==m?i.createElement("span",null,m):null))};var Y=i.forwardRef(J),q=i.forwardRef((function(n,e){var t,a=i.useContext(Z.E_),c=a.getPrefixCls,r=a.direction,l=(0,k.Z)(n.defaultValue,{value:n.value}),d=(0,o.Z)(l,2),s=d[0],u=d[1],h=n.prefixCls,g=n.className,p=n.rootClassName,b=n.options,f=n.buttonStyle,S=void 0===f?"outline":f,m=n.disabled,w=n.children,C=n.size,y=n.style,E=n.id,P=n.onMouseEnter,z=n.onMouseLeave,j=n.onFocus,O=n.onBlur,B=c("radio",h),D="".concat(B,"-group"),N=Q(B),R=(0,o.Z)(N,2),H=R[0],T=R[1],_=w;b&&b.length>0&&(_=b.map((function(n){return"string"===typeof n||"number"===typeof n?i.createElement(Y,{key:n.toString(),prefixCls:B,disabled:m,value:n,checked:s===n},n):i.createElement(Y,{key:"radio-group-value-options-".concat(n.value),prefixCls:B,disabled:n.disabled||m,value:n.value,checked:s===n.value,style:n.style},n.label)})));var W=(0,I.Z)(C),L=x()(D,"".concat(D,"-").concat(S),(t={},(0,v.Z)(t,"".concat(D,"-").concat(W),W),(0,v.Z)(t,"".concat(D,"-rtl"),"rtl"===r),t),g,p,T);return H(i.createElement("div",Object.assign({},function(n){return Object.keys(n).reduce((function(e,t){return!t.startsWith("data-")&&!t.startsWith("aria-")&&"role"!==t||t.startsWith("data-__")||(e[t]=n[t]),e}),{})}(n),{className:L,style:y,onMouseEnter:P,onMouseLeave:z,onFocus:j,onBlur:O,id:E,ref:e}),i.createElement(M,{value:{onChange:function(e){var t=s,o=e.target.value;"value"in n||u(o);var i=n.onChange;i&&o!==t&&i(e)},value:s,disabled:n.disabled,name:n.name,optionType:n.optionType}},_)))})),$=i.memo(q),nn=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(t[o[i]]=n[o[i]])}return t},en=function(n,e){var t=i.useContext(Z.E_).getPrefixCls,o=n.prefixCls,a=nn(n,["prefixCls"]),c=t("radio",o);return i.createElement(z,{value:"button"},i.createElement(Y,Object.assign({prefixCls:c},a,{type:"radio",ref:e})))},tn=i.forwardRef(en),on=Y;on.Button=tn,on.Group=$,on.__ANT_RADIO=!0;var an=on,cn=t(9004),rn=t(7106),ln=t(1354),dn=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],sn=i.forwardRef((function(n,e){var t,a=n.prefixCls,c=void 0===a?"rc-switch":a,r=n.className,l=n.checked,d=n.defaultChecked,s=n.disabled,u=n.loadingIcon,h=n.checkedChildren,g=n.unCheckedChildren,p=n.onClick,b=n.onChange,f=n.onKeyDown,S=(0,B.Z)(n,dn),m=(0,k.Z)(!1,{value:l,defaultValue:d}),w=(0,o.Z)(m,2),C=w[0],Z=w[1];function I(n,e){var t=C;return s||(Z(t=n),null===b||void 0===b||b(t,e)),t}var y=x()(c,r,(t={},(0,v.Z)(t,"".concat(c,"-checked"),C),(0,v.Z)(t,"".concat(c,"-disabled"),s),t));return i.createElement("button",(0,j.Z)({},S,{type:"button",role:"switch","aria-checked":C,disabled:s,className:y,ref:e,onKeyDown:function(n){n.which===ln.Z.LEFT?I(!1,n):n.which===ln.Z.RIGHT&&I(!0,n),null===f||void 0===f||f(n)},onClick:function(n){var e=I(!C,n);null===p||void 0===p||p(e,n)}}),u,i.createElement("span",{className:"".concat(c,"-inner")},i.createElement("span",{className:"".concat(c,"-inner-checked")},h),i.createElement("span",{className:"".concat(c,"-inner-unchecked")},g)))}));sn.displayName="Switch";var un=sn,hn=t(6760),gn=t(9391),pn=function(n){var e,t,o,i,a,c=n.componentCls,r="".concat(c,"-inner");return(0,v.Z)({},c,(0,v.Z)({},"&".concat(c,"-small"),(a={minWidth:n.switchMinWidthSM,height:n.switchHeightSM,lineHeight:"".concat(n.switchHeightSM,"px")},(0,v.Z)(a,"".concat(c,"-inner"),(e={paddingInlineStart:n.switchInnerMarginMaxSM,paddingInlineEnd:n.switchInnerMarginMinSM},(0,v.Z)(e,"".concat(r,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSizeSM+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMaxSM,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSizeSM+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMaxSM,"px)")}),(0,v.Z)(e,"".concat(r,"-unchecked"),{marginTop:-n.switchHeightSM,marginInlineStart:0,marginInlineEnd:0}),e)),(0,v.Z)(a,"".concat(c,"-handle"),{width:n.switchPinSizeSM,height:n.switchPinSizeSM}),(0,v.Z)(a,"".concat(c,"-loading-icon"),{top:(n.switchPinSizeSM-n.switchLoadingIconSize)/2,fontSize:n.switchLoadingIconSize}),(0,v.Z)(a,"&".concat(c,"-checked"),(o={},(0,v.Z)(o,"".concat(c,"-inner"),(t={paddingInlineStart:n.switchInnerMarginMinSM,paddingInlineEnd:n.switchInnerMarginMaxSM},(0,v.Z)(t,"".concat(r,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),(0,v.Z)(t,"".concat(r,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMaxSM,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSizeSM+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMaxSM,"px)")}),t)),(0,v.Z)(o,"".concat(c,"-handle"),{insetInlineStart:"calc(100% - ".concat(n.switchPinSizeSM+n.switchPadding,"px)")}),o)),(0,v.Z)(a,"&:not(".concat(c,"-disabled):active"),(i={},(0,v.Z)(i,"&:not(".concat(c,"-checked) ").concat(r),(0,v.Z)({},"".concat(r,"-unchecked"),{marginInlineStart:n.marginXXS/2,marginInlineEnd:-n.marginXXS/2})),(0,v.Z)(i,"&".concat(c,"-checked ").concat(r),(0,v.Z)({},"".concat(r,"-checked"),{marginInlineStart:-n.marginXXS/2,marginInlineEnd:n.marginXXS/2})),i)),a)))},bn=function(n){var e,t=n.componentCls;return(0,v.Z)({},t,(e={},(0,v.Z)(e,"".concat(t,"-loading-icon").concat(n.iconCls),{position:"relative",top:(n.switchPinSize-n.fontSize)/2,color:n.switchLoadingIconColor,verticalAlign:"top"}),(0,v.Z)(e,"&".concat(t,"-checked ").concat(t,"-loading-icon"),{color:n.switchColor}),e))},fn=function(n){var e,t,o=n.componentCls,i=n.motion,a="".concat(o,"-handle");return(0,v.Z)({},o,(t={},(0,v.Z)(t,a,{position:"absolute",top:n.switchPadding,insetInlineStart:n.switchPadding,width:n.switchPinSize,height:n.switchPinSize,transition:"all ".concat(n.switchDuration," ease-in-out"),"&::before":{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,backgroundColor:n.colorWhite,borderRadius:n.switchPinSize/2,boxShadow:n.switchHandleShadow,transition:"all ".concat(n.switchDuration," ease-in-out"),content:'""'}}),(0,v.Z)(t,"&".concat(o,"-checked ").concat(a),{insetInlineStart:"calc(100% - ".concat(n.switchPinSize+n.switchPadding,"px)")}),(0,v.Z)(t,"&:not(".concat(o,"-disabled):active"),i?(e={},(0,v.Z)(e,"".concat(a,"::before"),{insetInlineEnd:n.switchHandleActiveInset,insetInlineStart:0}),(0,v.Z)(e,"&".concat(o,"-checked ").concat(a,"::before"),{insetInlineEnd:0,insetInlineStart:n.switchHandleActiveInset}),e):{}),t))},Sn=function(n){var e,t,o,i,a=n.componentCls,c="".concat(a,"-inner");return(0,v.Z)({},a,(i={},(0,v.Z)(i,c,(e={display:"block",overflow:"hidden",borderRadius:100,height:"100%",paddingInlineStart:n.switchInnerMarginMax,paddingInlineEnd:n.switchInnerMarginMin,transition:"padding-inline-start ".concat(n.switchDuration," ease-in-out, padding-inline-end ").concat(n.switchDuration," ease-in-out")},(0,v.Z)(e,"".concat(c,"-checked, ").concat(c,"-unchecked"),{display:"block",color:n.colorTextLightSolid,fontSize:n.fontSizeSM,transition:"margin-inline-start ".concat(n.switchDuration," ease-in-out, margin-inline-end ").concat(n.switchDuration," ease-in-out"),pointerEvents:"none"}),(0,v.Z)(e,"".concat(c,"-checked"),{marginInlineStart:"calc(-100% + ".concat(n.switchPinSize+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMax,"px)"),marginInlineEnd:"calc(100% - ".concat(n.switchPinSize+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMax,"px)")}),(0,v.Z)(e,"".concat(c,"-unchecked"),{marginTop:-n.switchHeight,marginInlineStart:0,marginInlineEnd:0}),e)),(0,v.Z)(i,"&".concat(a,"-checked ").concat(c),(t={paddingInlineStart:n.switchInnerMarginMin,paddingInlineEnd:n.switchInnerMarginMax},(0,v.Z)(t,"".concat(c,"-checked"),{marginInlineStart:0,marginInlineEnd:0}),(0,v.Z)(t,"".concat(c,"-unchecked"),{marginInlineStart:"calc(100% - ".concat(n.switchPinSize+2*n.switchPadding,"px + ").concat(2*n.switchInnerMarginMax,"px)"),marginInlineEnd:"calc(-100% + ".concat(n.switchPinSize+2*n.switchPadding,"px - ").concat(2*n.switchInnerMarginMax,"px)")}),t)),(0,v.Z)(i,"&:not(".concat(a,"-disabled):active"),(o={},(0,v.Z)(o,"&:not(".concat(a,"-checked) ").concat(c),(0,v.Z)({},"".concat(c,"-unchecked"),{marginInlineStart:2*n.switchPadding,marginInlineEnd:2*-n.switchPadding})),(0,v.Z)(o,"&".concat(a,"-checked ").concat(c),(0,v.Z)({},"".concat(c,"-checked"),{marginInlineStart:2*-n.switchPadding,marginInlineEnd:2*n.switchPadding})),o)),i))},mn=function(n){var e,t=n.componentCls;return(0,v.Z)({},t,Object.assign(Object.assign(Object.assign(Object.assign({},(0,A.Wf)(n)),(0,v.Z)({position:"relative",display:"inline-block",boxSizing:"border-box",minWidth:n.switchMinWidth,height:n.switchHeight,lineHeight:"".concat(n.switchHeight,"px"),verticalAlign:"middle",background:n.colorTextQuaternary,border:"0",borderRadius:100,cursor:"pointer",transition:"all ".concat(n.motionDurationMid),userSelect:"none"},"&:hover:not(".concat(t,"-disabled)"),{background:n.colorTextTertiary})),(0,A.Qy)(n)),(e={},(0,v.Z)(e,"&".concat(t,"-checked"),(0,v.Z)({background:n.switchColor},"&:hover:not(".concat(t,"-disabled)"),{background:n.colorPrimaryHover})),(0,v.Z)(e,"&".concat(t,"-loading, &").concat(t,"-disabled"),{cursor:"not-allowed",opacity:n.switchDisabledOpacity,"*":{boxShadow:"none",cursor:"not-allowed"}}),(0,v.Z)(e,"&".concat(t,"-rtl"),{direction:"rtl"}),e)))},wn=(0,L.Z)("Switch",(function(n){var e=n.fontSize*n.lineHeight,t=n.controlHeight/2,o=e-4,i=t-4,a=(0,F.TS)(n,{switchMinWidth:2*o+8,switchHeight:e,switchDuration:n.motionDurationMid,switchColor:n.colorPrimary,switchDisabledOpacity:n.opacityLoading,switchInnerMarginMin:o/2,switchInnerMarginMax:o+2+4,switchPadding:2,switchPinSize:o,switchBg:n.colorBgContainer,switchMinWidthSM:2*i+4,switchHeightSM:t,switchInnerMarginMinSM:i/2,switchInnerMarginMaxSM:i+2+4,switchPinSizeSM:i,switchHandleShadow:"0 2px 4px 0 ".concat(new gn.C("#00230b").setAlpha(.2).toRgbString()),switchLoadingIconSize:.75*n.fontSizeIcon,switchLoadingIconColor:"rgba(0, 0, 0, ".concat(n.opacityLoading,")"),switchHandleActiveInset:"-30%"});return[mn(a),Sn(a),fn(a),bn(a),pn(a)]})),vn=function(n,e){var t={};for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&e.indexOf(o)<0&&(t[o]=n[o]);if(null!=n&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(n);i<o.length;i++)e.indexOf(o[i])<0&&Object.prototype.propertyIsEnumerable.call(n,o[i])&&(t[o[i]]=n[o[i]])}return t},Cn=i.forwardRef((function(n,e){var t,a=n.prefixCls,c=n.size,r=n.disabled,l=n.loading,d=n.className,s=n.rootClassName,u=vn(n,["prefixCls","size","disabled","loading","className","rootClassName"]),h=i.useContext(Z.E_),g=h.getPrefixCls,p=h.direction,b=i.useContext(T.Z),f=(null!==r&&void 0!==r?r:b)||l,S=g("switch",a),m=i.createElement("div",{className:"".concat(S,"-handle")},l&&i.createElement(rn.Z,{className:"".concat(S,"-loading-icon")})),w=wn(S),C=(0,o.Z)(w,2),k=C[0],y=C[1],M=(0,I.Z)(c),E=x()((t={},(0,v.Z)(t,"".concat(S,"-small"),"small"===M),(0,v.Z)(t,"".concat(S,"-loading"),l),(0,v.Z)(t,"".concat(S,"-rtl"),"rtl"===p),t),d,s,y);return k(i.createElement(hn.Z,null,i.createElement(un,Object.assign({},u,{prefixCls:S,className:E,disabled:f,ref:e,loadingIcon:m}))))}));Cn.__ANT_SWITCH=!0;var xn=Cn,kn=t(3060),Zn=function(n){var e=n.autoscrollMode,t=n.setAutoscrollMode,o=n.setFontSize,i=n.fontSize,a=(0,g.I0)(),s=(0,g.v9)(f);return(0,S.jsx)(w.J9,{initialValues:{newMessageText:""},onSubmit:function(n,e){var t=e.resetForm;n.newMessageText&&a((0,kn.bG)(n.newMessageText)),t()},children:(0,S.jsxs)(w.l0,{className:c,children:[(0,S.jsxs)(an.Group,{onChange:function(n){o(n.target.value)},value:i,children:[(0,S.jsx)(an,{value:12,children:"12"}),(0,S.jsx)(an,{value:13,children:"13"}),(0,S.jsx)(an,{value:14,children:"14"}),(0,S.jsx)(an,{value:15,children:"15"})]}),(0,S.jsx)("div",{children:(0,S.jsx)(w.gN,{style:{fontSize:"".concat(i,"px")},className:r,as:"textarea",type:"text",name:"newMessageText"})}),(0,S.jsxs)("div",{className:l,children:[(0,S.jsx)(cn.ZP,{disabled:"pending"===s||"error"===s,type:"primary",htmlType:"submit",children:"Submit"}),(0,S.jsx)(xn,{className:d,onChange:function(){return t(!e)},checkedChildren:"autoscroll",unCheckedChildren:"no autoscroll",checked:e})]})]})})},In=function(){var n=(0,i.useState)(!0),e=(0,o.Z)(n,2),t=e[0],a=e[1],c=(0,i.useState)(12),r=(0,o.Z)(c,2),l=r[0],d=r[1],s=(0,g.I0)();return(0,i.useEffect)((function(){return s((0,kn.WE)()),s((0,kn.vI)()),function(){s((0,kn.re)()),s((0,kn.R7)())}}),[]),(0,S.jsxs)("div",{children:[(0,S.jsx)(m,{fontSize:l,autoscrollMode:t}),(0,S.jsx)(Zn,{fontSize:l,setFontSize:d,autoscrollMode:t,setAutoscrollMode:a})]})}}}]);
//# sourceMappingURL=831.5e5aea35.chunk.js.map
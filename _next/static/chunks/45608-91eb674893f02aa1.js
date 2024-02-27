"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[45608],{45608:function(e,t,o){o.d(t,{h:function(){return U}});var r=o(27378),n=o(71078),a=o(92082),l=o(83453),i=o(96739),s=o(6231),d=o(63433),c=o(71656);let[u,b]=(0,c.R)("Combobox component was not found in tree");var p=o(13685),m=o(96217);let f=(0,r.forwardRef)(({size:e,onMouseDown:t,onClick:o,onClear:n,...a},l)=>r.createElement(m.P,{ref:l,size:e||"sm",variant:"transparent",tabIndex:-1,"aria-hidden":!0,...a,onMouseDown:e=>{e.preventDefault(),t?.(e)},onClick:e=>{n(),o?.(e)}}));f.displayName="@mantine/core/ComboboxClearButton";var w=o(20410),x=o(62443);let v={},y=(0,w.d)((e,t)=>{let{classNames:o,styles:n,className:a,style:l,hidden:s,...c}=(0,i.w)("ComboboxDropdown",v,e),u=b();return r.createElement(d.J.Dropdown,{...c,ref:t,role:"presentation","data-hidden":s||void 0,...u.getStyles("dropdown",{className:a,style:l,classNames:o,styles:n})})});y.classes=x.Z,y.displayName="@mantine/core/ComboboxDropdown";var C=o(513);let h={refProp:"ref"},g=(0,w.d)((e,t)=>{let{children:o,refProp:n}=(0,i.w)("ComboboxDropdownTarget",h,e);if(b(),!(0,C.k)(o))throw Error("Combobox.DropdownTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");return r.createElement(d.J.Target,{ref:t,refProp:n},o)});g.displayName="@mantine/core/ComboboxDropdownTarget";var E=o(56589);let k={},A=(0,w.d)((e,t)=>{let{classNames:o,className:n,style:a,styles:l,vars:s,...d}=(0,i.w)("ComboboxEmpty",k,e),c=b();return r.createElement(E.x,{ref:t,...c.getStyles("empty",{className:n,classNames:o,styles:l,style:a}),...d})});A.classes=x.Z,A.displayName="@mantine/core/ComboboxEmpty";var D=o(72840);function S({onKeyDown:e,withKeyboardNavigation:t,withAriaAttributes:o,withExpandedAttribute:n,targetType:a,autoComplete:l}){let i=b(),[s,d]=(0,r.useState)(null),c=o?{"aria-haspopup":"listbox","aria-expanded":n&&!!(i.store.listId&&i.store.dropdownOpened)||void 0,"aria-controls":i.store.listId,"aria-activedescendant":i.store.dropdownOpened&&s||void 0,autoComplete:l,"data-expanded":i.store.dropdownOpened||void 0,"data-mantine-stop-propagation":i.store.dropdownOpened||void 0}:{};return{...c,onKeyDown:o=>{if(e?.(o),!i.readOnly&&t){if("ArrowDown"===o.nativeEvent.code&&(o.preventDefault(),i.store.dropdownOpened?d(i.store.selectNextOption()):(i.store.openDropdown("keyboard"),d(i.store.selectActiveOption()))),"ArrowUp"===o.nativeEvent.code&&(o.preventDefault(),i.store.dropdownOpened?d(i.store.selectPreviousOption()):(i.store.openDropdown("keyboard"),d(i.store.selectActiveOption()))),"Enter"===o.nativeEvent.code||"NumpadEnter"===o.nativeEvent.code){let e=i.store.getSelectedOptionIndex();i.store.dropdownOpened&&-1!==e?(o.preventDefault(),i.store.clickSelectedOption()):"button"===a&&(o.preventDefault(),i.store.openDropdown("keyboard"))}"Escape"===o.nativeEvent.code&&i.store.closeDropdown("keyboard"),"Space"===o.nativeEvent.code&&"button"===a&&(o.preventDefault(),i.store.toggleDropdown("keyboard"))}}}}let O={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},T=(0,w.d)((e,t)=>{let{children:o,refProp:n,withKeyboardNavigation:a,withAriaAttributes:l,withExpandedAttribute:s,targetType:d,autoComplete:c,...u}=(0,i.w)("ComboboxEventsTarget",O,e);if(!(0,C.k)(o))throw Error("Combobox.EventsTarget component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let p=b(),m=S({targetType:d,withAriaAttributes:l,withKeyboardNavigation:a,withExpandedAttribute:s,onKeyDown:o.props.onKeyDown,autoComplete:c});return(0,r.cloneElement)(o,{...m,...u,[n]:(0,D.Yx)(t,p.store.targetRef,o?.ref)})});T.displayName="@mantine/core/ComboboxEventsTarget";let N={},I=(0,w.d)((e,t)=>{let{classNames:o,className:n,style:a,styles:l,vars:s,...d}=(0,i.w)("ComboboxFooter",N,e),c=b();return r.createElement(E.x,{ref:t,...c.getStyles("footer",{className:n,classNames:o,style:a,styles:l}),...d})});I.classes=x.Z,I.displayName="@mantine/core/ComboboxFooter";let R={},Z=(0,w.d)((e,t)=>{let{classNames:o,className:n,style:a,styles:l,vars:s,children:d,label:c,...u}=(0,i.w)("ComboboxGroup",R,e),p=b();return r.createElement(E.x,{ref:t,...p.getStyles("group",{className:n,classNames:o,style:a,styles:l}),...u},c&&r.createElement("div",{...p.getStyles("groupLabel",{classNames:o,styles:l})},c),d)});Z.classes=x.Z,Z.displayName="@mantine/core/ComboboxGroup";let K={},q=(0,w.d)((e,t)=>{let{classNames:o,className:n,style:a,styles:l,vars:s,...d}=(0,i.w)("ComboboxHeader",K,e),c=b();return r.createElement(E.x,{ref:t,...c.getStyles("header",{className:n,classNames:o,style:a,styles:l}),...d})});q.classes=x.Z,q.displayName="@mantine/core/ComboboxHeader";let $={},P=(0,w.d)((e,t)=>{let o=(0,i.w)("ComboboxOption",$,e),{classNames:n,className:a,style:l,styles:s,vars:d,onClick:c,id:u,active:p,onMouseDown:m,onMouseOver:f,disabled:w,selected:x,mod:v,...y}=o,C=b(),h=(0,r.useId)();return r.createElement(E.x,{...C.getStyles("option",{className:a,classNames:n,styles:s,style:l}),...y,ref:t,id:u||h,mod:["combobox-option",{"combobox-active":p,"combobox-disabled":w,"combobox-selected":x},v],role:"option",onClick:e=>{w?e.preventDefault():(C.onOptionSubmit?.(o.value,o),c?.(e))},onMouseDown:e=>{e.preventDefault(),m?.(e)},onMouseOver:e=>{C.resetSelectionOnOptionHover&&C.store.resetSelectedOption(),f?.(e)}})});P.classes=x.Z,P.displayName="@mantine/core/ComboboxOption";var F=o(31002);let M={},_=(0,w.d)((e,t)=>{let o=(0,i.w)("ComboboxOptions",M,e),{classNames:n,className:a,style:l,styles:s,id:d,onMouseDown:c,labelledBy:u,...p}=o,m=b(),f=(0,F.M)(d);return(0,r.useEffect)(()=>{m.store.setListId(f)},[f]),r.createElement(E.x,{ref:t,...m.getStyles("options",{className:a,style:l,classNames:n,styles:s}),...p,id:f,role:"listbox","aria-labelledby":u,onMouseDown:e=>{e.preventDefault(),c?.(e)}})});_.classes=x.Z,_.displayName="@mantine/core/ComboboxOptions";var z=o(42487);let H={withAriaAttributes:!0,withKeyboardNavigation:!0},V=(0,w.d)((e,t)=>{let o=(0,i.w)("ComboboxSearch",H,e),{classNames:n,styles:a,unstyled:l,vars:s,withAriaAttributes:d,onKeyDown:c,withKeyboardNavigation:u,size:p,...m}=o,f=b(),w=f.getStyles("search"),x=S({targetType:"input",withAriaAttributes:d,withKeyboardNavigation:u,withExpandedAttribute:!1,onKeyDown:c,autoComplete:"off"});return r.createElement(z.I,{ref:(0,D.Yx)(t,f.store.searchRef),classNames:[{input:w.className},n],styles:[{input:w.style},a],size:p||f.size,...x,...m,__staticSelector:"Combobox"})});V.classes=x.Z,V.displayName="@mantine/core/ComboboxSearch";let J={refProp:"ref",targetType:"input",withKeyboardNavigation:!0,withAriaAttributes:!0,withExpandedAttribute:!1,autoComplete:"off"},B=(0,w.d)((e,t)=>{let{children:o,refProp:n,withKeyboardNavigation:a,withAriaAttributes:l,withExpandedAttribute:s,targetType:c,autoComplete:u,...p}=(0,i.w)("ComboboxTarget",J,e);if(!(0,C.k)(o))throw Error("Combobox.Target component children should be an element or a component that accepts ref. Fragments, strings, numbers and other primitive values are not supported");let m=b(),f=S({targetType:c,withAriaAttributes:l,withKeyboardNavigation:a,withExpandedAttribute:s,onKeyDown:o.props.onKeyDown,autoComplete:u}),w=(0,r.cloneElement)(o,{...f,...p});return r.createElement(d.J.Target,{ref:(0,D.Yx)(t,m.store.targetRef)},w)});B.displayName="@mantine/core/ComboboxTarget";var G=o(54526);let Y={keepMounted:!0,withinPortal:!0,resetSelectionOnOptionHover:!1,width:"target",transitionProps:{transition:"fade",duration:0}},L=(0,l.Z)((e,{size:t,dropdownPadding:o})=>({options:{"--combobox-option-fz":(0,a.yv)(t),"--combobox-option-padding":(0,a.ap)(t,"combobox-option-padding")},dropdown:{"--combobox-padding":void 0===o?void 0:(0,n.h)(o),"--combobox-option-fz":(0,a.yv)(t),"--combobox-option-padding":(0,a.ap)(t,"combobox-option-padding")}}));function U(e){let t=(0,i.w)("Combobox",Y,e),{classNames:o,styles:n,unstyled:a,children:l,store:c,vars:b,onOptionSubmit:p,onClose:m,size:f,dropdownPadding:w,resetSelectionOnOptionHover:v,__staticSelector:y,readOnly:C,...h}=t,g=(0,G.K)(),E=c||g,k=(0,s.y)({name:y||"Combobox",classes:x.Z,props:t,classNames:o,styles:n,unstyled:a,vars:b,varsResolver:L});return r.createElement(u,{value:{getStyles:k,store:E,onOptionSubmit:p,size:f,resetSelectionOnOptionHover:v,readOnly:C}},r.createElement(d.J,{opened:E.dropdownOpened,...h,onClose:()=>{m?.(),E.closeDropdown()},withRoles:!1,unstyled:a},l))}U.extend=e=>e,U.classes=x.Z,U.displayName="@mantine/core/Combobox",U.Target=B,U.Dropdown=y,U.Options=_,U.Option=P,U.Search=V,U.Empty=A,U.Chevron=p.d,U.Footer=I,U.Header=q,U.EventsTarget=T,U.DropdownTarget=g,U.Group=Z,U.ClearButton=f},54526:function(e,t,o){o.d(t,{K:function(){return a}});var r=o(27378),n=o(58675);function a({defaultOpened:e,opened:t,onOpenedChange:o,onDropdownClose:a,onDropdownOpen:l,loop:i=!0,scrollBehavior:s="instant"}={}){let[d,c]=(0,n.C)({value:t,defaultValue:e,finalValue:!1,onChange:o}),u=(0,r.useRef)(null),b=(0,r.useRef)(-1),p=(0,r.useRef)(null),m=(0,r.useRef)(null),f=(0,r.useRef)(-1),w=(0,r.useRef)(-1),x=(0,r.useRef)(-1),v=(0,r.useCallback)((e="unknown")=>{d||(c(!0),l?.(e))},[c,l,d]),y=(0,r.useCallback)((e="unknown")=>{d&&(c(!1),a?.(e))},[c,a,d]),C=(0,r.useCallback)((e="unknown")=>{d?y(e):v(e)},[y,v,d]),h=(0,r.useCallback)(()=>{let e=document.querySelector(`#${u.current} [data-combobox-selected]`);e?.removeAttribute("data-combobox-selected"),e?.removeAttribute("aria-selected")},[]),g=(0,r.useCallback)(e=>{let t=document.getElementById(u.current),o=t?.querySelectorAll("[data-combobox-option]");if(!o)return null;let r=e>=o.length?0:e<0?o.length-1:e;return(b.current=r,o?.[r]&&!o[r].hasAttribute("data-combobox-disabled"))?(h(),o[r].setAttribute("data-combobox-selected","true"),o[r].setAttribute("aria-selected","true"),o[r].scrollIntoView({block:"nearest",behavior:s}),o[r].id):null},[s,h]),E=(0,r.useCallback)(()=>{let e=document.querySelector(`#${u.current} [data-combobox-active]`);if(e){let t=document.querySelectorAll(`#${u.current} [data-combobox-option]`),o=Array.from(t).findIndex(t=>t===e);return g(o)}return g(0)},[g]),k=(0,r.useCallback)(()=>g(function(e,t,o){for(let o=e+1;o<t.length;o+=1)if(!t[o].hasAttribute("data-combobox-disabled"))return o;if(o){for(let e=0;e<t.length;e+=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(b.current,document.querySelectorAll(`#${u.current} [data-combobox-option]`),i)),[g,i]),A=(0,r.useCallback)(()=>g(function(e,t,o){for(let o=e-1;o>=0;o-=1)if(!t[o].hasAttribute("data-combobox-disabled"))return o;if(o){for(let e=t.length-1;e>-1;e-=1)if(!t[e].hasAttribute("data-combobox-disabled"))return e}return e}(b.current,document.querySelectorAll(`#${u.current} [data-combobox-option]`),i)),[g,i]),D=(0,r.useCallback)(()=>g(function(e){for(let t=0;t<e.length;t+=1)if(!e[t].hasAttribute("data-combobox-disabled"))return t;return -1}(document.querySelectorAll(`#${u.current} [data-combobox-option]`))),[g]),S=(0,r.useCallback)((e="selected",t)=>{x.current=window.setTimeout(()=>{let o=document.querySelectorAll(`#${u.current} [data-combobox-option]`),r=Array.from(o).findIndex(t=>t.hasAttribute(`data-combobox-${e}`));b.current=r,t?.scrollIntoView&&o[r]?.scrollIntoView({block:"nearest",behavior:s})},0)},[]),O=(0,r.useCallback)(()=>{b.current=-1,h()},[h]),T=(0,r.useCallback)(()=>{let e=document.querySelectorAll(`#${u.current} [data-combobox-option]`),t=e?.[b.current];t?.click()},[]),N=(0,r.useCallback)(e=>{u.current=e},[]),I=(0,r.useCallback)(()=>{f.current=window.setTimeout(()=>p.current.focus(),0)},[]),R=(0,r.useCallback)(()=>{w.current=window.setTimeout(()=>m.current.focus(),0)},[]),Z=(0,r.useCallback)(()=>b.current,[]);return(0,r.useEffect)(()=>()=>{window.clearTimeout(f.current),window.clearTimeout(w.current),window.clearTimeout(x.current)},[]),{dropdownOpened:d,openDropdown:v,closeDropdown:y,toggleDropdown:C,selectedOptionIndex:b.current,getSelectedOptionIndex:Z,selectOption:g,selectFirstOption:D,selectActiveOption:E,selectNextOption:k,selectPreviousOption:A,resetSelectedOption:O,updateSelectedOptionIndex:S,listId:u.current,setListId:N,clickSelectedOption:T,searchRef:p,focusSearchInput:I,targetRef:m,focusTarget:R}}}}]);
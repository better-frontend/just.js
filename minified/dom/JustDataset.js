"use strict";import JustInternal from"../JustInternal.js";export default class JustData extends JustInternal{constructor(t){super(t)}replace(...t){return this.set(...t)}add(...t){return this.set(...t)}set(t,e){return this.selection.each(s=>s.dataset[t]=e),this}delete(t){return this.remove(t)}remove(t){return this.selection.each(e=>e.removeAttribute(`data-${t}`)),this}get(t){return this.selection.map(e=>e.getAttribute(`data-${t}`))}contains(t){return this.selection.elements.some(e=>void 0!==e.dataset[t])}toggle(t,e="true"){return this.contains(t)?this.remove(t):this.set(t,e)}clear(){return this.selection.each(t=>{for(const e in t.dataset)t.removeAttribute(`data-${e}`)}),this}all(...t){return this.list(...t)}list(){return this.selection.elements.map(t=>Object.entries(t.dataset)).flat()}}
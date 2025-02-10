/*! For license information please see 258.js.LICENSE.txt */
"use strict";(self.webpackChunkmp_webgl=self.webpackChunkmp_webgl||[]).push([[258],{38319:(e,t,i)=>{i.d(t,{hf:()=>n,lb:()=>o});var s=i(50575);const o=(e=200)=>({resizeDimensions:[{property:s.P.width,setDimension:e=>e.width,duration:e},{property:s.P.height,setDimension:e=>e.height,duration:e},{property:s.P.top,setDimension:()=>0,duration:e},{property:s.P.left,setDimension:()=>0,duration:e}]}),n=(e,t,i,o=200)=>{const n=[];return void 0!==e&&n.push({property:s.P.width,setDimension:t=>t.width+e,duration:o}),void 0!==t&&n.push({property:s.P.height,setDimension:e=>e.height+t,duration:o}),void 0!==i&&n.push({property:s.P.left,setDimension:()=>i,duration:o}),{resizeDimensions:n}}},7402:(e,t,i)=>{i.d(t,{g:()=>c});var s=i(81396),o=i(17878),n=i(56512),r=i(82814),a=i(12529),h=i(53203);class c extends r.S{constructor(e,t,i=o.o.ALL){super(),this._opacity=1,this._chunks=[],this.size=new s.Vector3,this.center=new s.Vector3,this.built=!1,this.layers.mask=i.mask,this.name=`RoomMesh:${e}-${t}`,this.meshGroup=e,this.meshSubgroup=t,this.renderOrder=a.z.default,this.onBeforeRender=(e,t,i,s,o,n)=>{this.updateUniforms(o,n)}}dispose(){this.reset()}reset(){this._chunks.length=0,this.geometry.dispose(),delete this.onBuild,delete this.onOpacityUpdate,this.built=!1}addChunk(e){-1===this._chunks.indexOf(e)&&this._chunks.push(e)}getChunk(e){return this._chunks[e]}build(){if(this.built)throw new Error("build() should only be called once");if(!this._chunks.length)return;const e=(0,n.qf)(this._chunks.map((e=>e.geometry)));e.clearGroups();let t=0;this.material=[],this._chunks.forEach(((i,s)=>{i.geometry&&i.geometry.index&&(e.addGroup(t,i.geometry.index.count,s),t+=i.geometry.index.count,i.geometry.dispose(),i.geometry=e,i.notifyOnMaterialUpdated((e=>{Array.isArray(this.material)&&(this.material[s]=e),this.onMaterialUpdate&&this.onMaterialUpdate()})),i.onOpacityUpdate=e=>{this.opacity=e})})),this.geometry=e,this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere(),this.material=this._chunks.map((e=>e.material)),this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0,this.onBuild&&this.onBuild()}buildWithTileChunk(e){if(this.built)return;const{meshGroup:t,meshSubgroup:i,lod:s}=e;this.name=`RoomMesh:${s}-${t}-${i}-${e.chunkIndex}`,this.meshGroup=t,this.meshSubgroup=i,this._chunks.push(e),e.notifyOnMaterialUpdated((e=>{this.material=e,this.onMaterialUpdate&&this.onMaterialUpdate()})),e.onOpacityUpdate=e=>{this.opacity=e},this.size=this.boundingBox.getSize(this.size),this.center=this.boundingBox.getCenter(this.center),this.built=!0,this.onBuild&&this.onBuild()}updateUniforms(e,t){e instanceof s.RawShaderMaterial&&(t?this.chunks[t.materialIndex].onBeforeDraw(e):this.chunks.length&&this.chunks[0].onBeforeDraw(e))}get boundingBox(){return(0,n.A5)(this.geometry)}set opacity(e){e!==this.opacity&&(this._opacity=e,this.raycastEnabled=e>h.xx.FADE_CLICKABLE_THRESHOLD,this.renderOrder=e<h.xx.FADE_OPAQUE?a.z.ghostFloor:a.z.default,this.onOpacityUpdate&&this.onOpacityUpdate(e))}get opacity(){return this._opacity}get chunks(){return this._chunks}getSortKey(){return this.chunks.length?this._chunks[0].getSortKey():0}}},14564:(e,t,i)=>{i.d(t,{u:()=>r});var s,o,n=i(19663);!function(e){e.all="all",e.byMeshGroup="byMeshGroup",e.byMeshSubGroup="byMeshSubGroup"}(s||(s={})),function(e){e.explicit="explicit",e.random="random"}(o||(o={}));class r extends n.m{constructor(e,t){super(),this.id="SET_MESH_OVERLAY_COLOR",this.payload={selectBy:(null==t?void 0:t.style)||s.all,colorStyle:(null==e?void 0:e.style)||o.explicit,color:(null==e?void 0:e.color)||null,alpha:(null==e?void 0:e.alpha)||.5,index:null==t?void 0:t.index}}}r.selectBy=s,r.colorBy=o,r.COLOR_DIM={x:0,y:0,z:0,w:.3}},75810:(e,t,i)=>{i.d(t,{I:()=>o});var s=i(19663);class o extends s.m{constructor(e){super(),this.id="TOGGLE_MESH_OVERLAY_COLOR",this.payload={enabled:e}}}},21270:(e,t,i)=>{var s;i.d(t,{V:()=>s}),function(e){e[e.Min=0]="Min",e[e.Standard=1]="Standard",e[e.High=2]="High",e[e.Detail=3]="Detail"}(s||(s={}))},51524:(e,t,i)=>{i.d(t,{t:()=>a});var s=i(59279),o=i(53261),n=i(31362),r=i(21270);const a={urlTemplateToken:"<file>",initialMaxLOD:r.V.Min,nonMeshMaxLOD:r.V.Standard,maxLOD:r.V.High,minLOD:r.V.Min,loadSiblings:!0,displayActiveTiles:!1,autoDisableRendererCulling:!0,optimizeRaycast:!1,stopAtEmptyTiles:!1,disableTileUpdates:!1,disposeModel:!1,limitMemoryUsage:(0,n.tq)(),allocatedMegsBeforeLimitingLod:350,lruMinExtraTiles:(0,n.tq)()?0:100,lruMaxTiles:800,lruUnloadPercent:.05,tileAssetRequestPriority:o.ru.MEDIUM,downloadQueueConcurrency:8,parseQueueConcurrency:10,snappingMaxLOD:r.V.Standard,errorTarget:Number((0,s.eY)("errorTarget",(0,n.tq)()?6:4)),errorMultiplierHiddenFloors:.01,errorMultiplierRaycastOcclusion:.1}},26269:(e,t,i)=>{i.d(t,{$4:()=>n,oR:()=>o});var s=i(7402);const o=e=>!!e&&e instanceof s.g,n={hasMeshGroup:e=>"object"==typeof e&&!!e&&"meshGroup"in e,hasMeshSubgroup:e=>"object"==typeof e&&!!e&&"meshSubgroup"in e,isRoomMesh:o,isVisibleRoomMesh:e=>o(e)&&e.raycastEnabled&&e.visible}},38987:(e,t,i)=>{i.d(t,{u:()=>o});var s=i(19663);class o extends s.m{constructor(e=null){super(),this.id="SET_MOUSE_CURSOR",this.payload={cursor:e}}}},34956:(e,t,i)=>{var s;i.d(t,{C:()=>s}),function(e){e.NONE="none",e.DEFAULT="default",e.MOVE="move",e.MOVE_LF="col-resize",e.MOVE_UD="row-resize",e.XHAIR="crosshair",e.PLUS="cell",e.QUESTION="help",e.NOPE="not-allowed",e.FINGER="pointer",e.TEXT="text",e.TEXT_VERT="vertical-text",e.ZOOM_IN="zoom-in",e.ZOOM_OUT="zoom-in",e.GRAB="grab",e.GRABBING="grabbing",e.ARROW_R="e-resize",e.ARROW_L="w-resize",e.ARROW_U="n-resize",e.ARROW_D="s-resize",e.ARROW_UR="ne-resize",e.ARROW_UL="nw-resize",e.ARROW_DR="se-resize",e.ARROW_DL="sw-resize",e.ARROW_LR="ew-resize",e.ARROW_UD="ns-resize",e.ARROW_URDL="nesw-resize",e.ARROW_ULDR="nwse-resize",e.ROOMBOUNDS_DEFAULT="rbe-default",e.ROOMBOUNDS_MOVING="rbe-moving",e.ROOMBOUNDS_PLACE_NODE="rbe-place-node",e.ROOMBOUNDS_FINISH_ROOM="rbe-finish-room"}(s||(s={}))},88338:(e,t,i)=>{i.d(t,{E:()=>s});const s={longerTransitionMaxDist:10,TRANSITION_TIME_DH:650}},20043:(e,t,i)=>{i.d(t,{Tq:()=>r,bG:()=>h});var s=i(98169),o=i(81248),n=i(88338);const r=(e,t,i,s,...o)=>a({sweepData:e,direction:t,directionFactor:i,sourceSweep:s,ignoreSweeps:o}),a=e=>{const{sweepData:t,direction:i,sourceSweep:n,ignoreSweeps:r,directionFactor:a}=e;if(!t.currentSweepObject)return[];const h=n||t.currentSweepObject,c=[s.ff(h),s._k(),s.vO(h),s.pI(h.position,i,a)];for(const e of r)c.push(s.ff(e));const u=[o.o7(h.position,i),o.TE(h.position)],l=t.getSweepNeighbours(h);return t.sortByScore(c,u,l)},h=(e,t,i,r)=>{const a=[s._k(),s._T()],h=[o.Dv(i.point)],c=e.currentSweepObject;t&&c&&a.push(s.ff(c),s.SF(c.position,n.E.longerTransitionMaxDist),s.vO(c)),i.face&&a.push(s.D5(i.point,i.face.normal));const u=r.floorIdFromObject(i.object);u&&h.push(o.Bv(u));const l=e.sortByScore(a,h);if(0===l.length){const t=e.getClosestSweep(i.point,!0);l.push({sweep:t,score:0})}return l}},3907:(e,t,i)=>{i.d(t,{MU:()=>a});var s,o=i(39880),n=i(44584);!function(e){e.GET="GET",e.POST="POST",e.PATCH="PATCH",e.PUT="PUT",e.DELETE="DELETE",e.OPTIONS="OPTIONS"}(s||(s={}));class r extends class{constructor(){this._options={responseType:"json"}}get options(){const e=this._options;return e.headers=(0,n.m)(this.url,this._options.headers||{}),e}}{constructor(e){super(),this.config=e,this.url=e.path}async read(){const{deserialize:e}=this.config;let t=null;return this.config.cachedData&&this.config.cachedData.data?t=this.config.cachedData.data:(t=await this.config.queue.get(this.config.path,this.options),this.config.cachedData&&(this.config.cachedData.data=t)),e(t)}clearCache(){this.config.cachedData&&(this.config.cachedData.data=null)}}class a extends r{constructor(e){super(e),this.config=e,this.acceptsPartial=!1,this.config.batchUpdate="batchUpdate"in this.config&&this.config.batchUpdate}async create(e){throw Error("Not implemented")}updateBatch(e,t){const{serialize:i}=this.config,o=[],n=[...new Set([...Object.keys(e),...Object.keys(t)])];for(const i of n){e[i]||t[i]||o.push(this.config.queue.delete(`${this.config.path}/${i}`,this.options))}const r=i(e,t),a=Object.assign(Object.assign({},this.options),{body:r});return o.push(this.config.queue.request(this.config.httpMethod||s.POST,this.config.path,a)),Promise.all(o)}updateInternal(e,t){const{serialize:i}=this.config,n=[],r=Object.assign({},this.options),a=Object.keys(e),h=Object.keys(t),c=(0,o.XN)(a.concat(h));for(const o in c){const a=c[o],h=e[a]||t[a];if(h){const e={};e[a]=h;const o={},c=t[a];c&&(o[a]=c);const u=i(e,o);r.body=u,n.push(this.config.queue.request(this.config.httpMethod||s.POST,this.config.path,r))}else n.push(this.config.queue.delete(`${this.config.path}/${a}`,this.options))}return Promise.all(n)}async update(e,t){this.clearCache(),await(this.config.batchUpdate?this.updateBatch(e,t||{}):this.updateInternal(e,t||{}))}async delete(e){throw Error("Not implemented")}}},87928:(e,t,i)=>{i.d(t,{E:()=>o});var s=i(81396);class o extends s.Mesh{constructor(e,t){super(e,t)}}}}]);
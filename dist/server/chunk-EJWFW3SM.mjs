import './polyfills.server.mjs';
import{C as F,E as R,F as _,G as O,H as k,I as N,J as L,K as H,L as $,O as z,S as B,T as U,W as Z,X as q,a as P,b as x,c as y,d as s,e as b,f as S,g as p,h as c,i as I,j as D,k as T,l as E,m as M,n as i,o as r,p as m,q as A,r as j,s as n,t as a,u as d,z as w}from"./chunk-7I2MRGUS.mjs";var f=class o{title="metatask";static \u0275fac=function(t){return new(t||o)};static \u0275cmp=s({type:o,selectors:[["app-root"]],standalone:!0,features:[d],decls:1,vars:0,template:function(t,u){t&1&&m(0,"router-outlet")},dependencies:[U]})};var l=class o{constructor(e){this.http=e}getProducts(){return this.http.get("https://fakestoreapi.com/products")}getProductDetails(e){return this.http.get(`https://fakestoreapi.com/products/${e}`)}static \u0275fac=function(t){return new(t||o)(x(_))};static \u0275prov=P({token:o,factory:o.\u0275fac,providedIn:"root"})};var W=(o,e)=>e.id;function X(o,e){if(o&1&&(i(0,"tr")(1,"td"),n(2),r(),i(3,"td"),n(4),r(),i(5,"td"),n(6),r(),i(7,"td"),n(8),r(),i(9,"td")(10,"a",2),m(11,"i",3),r()()()),o&2){let t=e.$implicit;p(2),a(t.id),p(2),a(t.title),p(2),a(t.category),p(2),a(t.price),p(2),j("routerLink","/products/",t.id,"")}}var v=class o{constructor(e){this.productsService=e}products=[];ngOnInit(){this.getProducts()}getProducts(){this.productsService.getProducts().subscribe({next:e=>{this.products=e}})}static \u0275fac=function(t){return new(t||o)(c(l))};static \u0275cmp=s({type:o,selectors:[["app-products"]],standalone:!0,features:[d],decls:18,vars:0,consts:[[1,"container","my-5"],[1,"table","table-hover","text-center"],[1,"cursor-pointer",3,"routerLink"],[1,"bi","bi-exclamation-circle-fill"]],template:function(t,u){t&1&&(i(0,"section")(1,"div",0)(2,"table",1)(3,"thead")(4,"tr")(5,"th"),n(6,"ID"),r(),i(7,"th"),n(8,"Name"),r(),i(9,"th"),n(10,"Category"),r(),i(11,"th"),n(12,"Price"),r(),i(13,"th"),n(14,"Control"),r()()(),i(15,"tbody"),E(16,X,12,6,"tr",null,W),r()()()()),t&2&&(p(16),M(u.products))},dependencies:[Z]})};function Y(o,e){if(o&1&&(i(0,"div",1)(1,"div",2)(2,"div",3)(3,"h5"),n(4),r(),i(5,"h6"),n(6),r(),i(7,"h6"),n(8),r(),i(9,"p"),n(10),r()(),i(11,"div",4),m(12,"img",5),r()()()),o&2){let t=A();p(4),a(t.product.title),p(2),a(t.product.category),p(2),a(t.product.price),p(2),a(t.product.description),p(2),D("src",t.product.image,S)}}var g=class o{constructor(e,t,u,ot){this.productsService=e;this.meta=u;this.title=ot;let C=t.snapshot.paramMap.get("id");this.id=C?+C:0}product;id=0;_PLATFORM_ID=y(b);ngOnInit(){this.removeMetaTags(),this.getProductDetails(this.id)}getProductDetails(e){this.productsService.getProductDetails(e).subscribe({next:t=>{this.product=t,this.title.setTitle(this.product.title),this.meta.addTags([{property:"og:title",content:this.product.title},{property:"og:description",content:this.product.description},{property:"og:image",content:this.product.image},...R(this._PLATFORM_ID)?[{property:"og:url",content:window.location.href}]:[],{property:"og:type",content:"website"}])}})}removeMetaTags(){this.meta.removeTag("property='og:title'"),this.meta.removeTag("property='og:description'"),this.meta.removeTag("property='og:image'"),this.meta.removeTag("property='og:url'"),this.meta.removeTag("property='og:type'")}static \u0275fac=function(t){return new(t||o)(c(l),c(B),c(L),c(H))};static \u0275cmp=s({type:o,selectors:[["app-product-details"]],standalone:!0,features:[d],decls:2,vars:1,consts:[[1,"container","my-5"],[1,"container","d-flex","align-items-center","justify-content-center"],[1,"row","justify-content-center","w-50","p-4","shadow","rounded-4"],[1,"col-10"],[1,"col-10","d-flex","align-items-center","justify-content-center"],["height","300","width","300","alt","product-image",1,"object-fit-contain",3,"src"]],template:function(t,u){t&1&&(i(0,"section",0),I(1,Y,13,5,"div",1),r()),t&2&&(p(),T(u.product?1:-1))}})};var K=[{path:"products",component:v},{path:"products/:id",component:g},{path:"",redirectTo:"products",pathMatch:"full"},{path:"**",redirectTo:"products",pathMatch:"full"}];var Q={providers:[O(k()),w({eventCoalescing:!0}),q(K),$()]};var tt={providers:[z()]},V=F(Q,tt);var et=()=>N(f,V),Ft=et;export{Ft as a};

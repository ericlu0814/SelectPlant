import{_ as d,s as i,r as _,o as s,c as r,a,d as t,F as c,m as p,t as P,b as h,w as m}from"./index-799fc965.js";const{VITE_APP_URL:V,VITE_APP_PATH:f}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2/",VITE_APP_PATH:"test_product",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0},g={data(){return{products:[]}},components:{RouterLink:i},methods:{getProducts(){const n=`${V}api/${f}/products`;this.$http.get(n).then(o=>{this.products=o.data.products,console.log("商品列表:",o.data.products)})}},mounted(){this.getProducts()}},E=["src"];function A(n,o,L,R,u,T){const l=_("RouterLink");return s(),r(c,null,[a(" 這是產品列表 "),t("table",null,[t("tbody",null,[(s(!0),r(c,null,p(u.products,e=>(s(),r("tr",{key:e.id},[t("td",null,P(e.title),1),t("td",null,[t("img",{src:e.imageUrl,width:"200",alt:""},null,8,E)]),t("td",null,[h(l,{to:`/product/${e.id}`},{default:m(()=>[a("連結到單一品項")]),_:2},1032,["to"])])]))),128))])])],64)}const k=d(g,[["render",A]]);export{k as default};

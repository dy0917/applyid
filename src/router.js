import Router from 'vue-router'

const router =new Router ({
  // mode: 'history',
  base: process.env.NODE_ENV=='production'? '/applyid/': '/',
  routes:[{
      path : "",
      name: "index",
      component:()=>import('./components/layout/defaultLayout.vue'),
      redirect:{
        name: "home"
      }
    } 
  ]
})

export default router;
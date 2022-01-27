
export default function ({router}){
    router.addRoute(
        {
            path: "",
            name: "home",
            component:()=>import('../../components/layout/defaultLayout.vue'),
            redirect:{
                name: "home.index",
            },
            children:[
                {
                path: "/home",
                name: "home.index",
                component:()=>import('./pages/home.vue')
                }
              ]
            } 
        
    )
}
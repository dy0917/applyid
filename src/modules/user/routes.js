
export default function ({router}){
    router.addRoute(
        {
            path: "",
            name: "users",
            component:()=>import('@/components/layout/dashBoardLayout.vue'),
            redirect:{
                name: "users.index",
            },
            children:[
                {
                path: "/users",
                name: "users.index",
                component:()=>import('./pages/users.vue')
                }
              ]
            } 
        
    )
}
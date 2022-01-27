import route from "./routes"
export default{
    install(vue, {store, router}){
        route({store, router});
    }
}
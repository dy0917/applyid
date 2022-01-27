import Vue from 'vue';

export default {
    namespaced: true,
    state: () => ({  
        users:{},
        posts:{}
    }),
    mutations: { 
        saveUsers(state,{users}){
            users.forEach(user=>{
                Vue.set(state.users, user.id, user);
            })
        },

        removeUser(state,{user}){
            Vue.delete(state.users, user.id);
            console.log('state.users', state.users);
        }

    },
    actions: { 
        async getData(){
            console.log( await this.services.postService.getPostById("asdfasfasf"));
            console.log('getData');
        },
        async getUsers({commit}){
            // console.log( await this.services.postService.getPostById("asdfasfasf"));
            const users =[{id:1, username:"user1"},{id:2, username:"user2"}];
            commit('saveUsers', {users});
        },

        async getUsers2({commit}){
            // console.log( await this.services.postService.getPostById("asdfasfasf"));
            const users =[{id:3, username:"user a"},{id:4, username:"user b"}];
            commit('saveUsers', {users});
        }
    },
    getters: { 
        getUsers(state){
            return ()=>{
                return Object.values(state.users);
            }
        }
    }
  }


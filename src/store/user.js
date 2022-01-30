import Vue from 'vue';
// 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 
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
        }

    },
    actions: { 
        async getData(){
   
        },
        async searchUsersByName({commit},{name}){
            const data = await this.services.githubService.searchUsersByName(name);
            commit('saveUsers', {users: data});
            return data;
        },
        async getUserByName({commit}){
            const response = await this.services.userService.getUsers();
            const {items} = response.data;
            commit('saveUsers', {users: items});
        },
    },
    getters: { 
        getUsers(state){
            return ()=>{
                return Object.values(state.users);
            }
        },

        getUserById(state){
            return (id)=>{
                return state.users[id];
            }
        }
    }
  }


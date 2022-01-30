<template>
  <el-row style="padding:10px">
      <div class="card">
        <div class="card-body">
          <div class="d-flex flex-column align-items-center text-center">
            <el-image :src="userProfile().avatar_url" alt="Admin" style="width: 200px; height: 200px"/>
            <div class="mt-3">
              <h4>{{userProfile().name}}</h4>
              <div>
                <b>{{userProfile().followers}}</b> Followers
                </div>
                <div>
                  <b>{{userProfile().public_repos}}</b> Repos
                </div>
                 <div>
                  Created at <b>{{userProfile().created_at| moment}}</b> 
                </div>
            </div>
          </div>
        </div>
      </div>
  </el-row>
</template>
<script>
import Vue from "vue";
import {mapGetters} from "vuex";
import moment from "moment";

export default Vue.extend({
 
  computed:{
    ...mapGetters("user",['getUserById']),
  
    userId(){
       return ()=>this.$route.params.id;
    },
    userProfile(){
      return ()=>{
        return this.getUserById(this.userId())
        };
    }
  },
  filters: {
    moment: function (date) {
      return moment(date).format('YYYY-MM-DD');
    }
  }

}
)
</script>

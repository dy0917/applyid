<template>
  <div>
<el-row>
  <el-col :span="8" :offset="8"><div class="grid-content bg-purple-light">
    <el-card>
      <h2>Start </h2>
      <el-form
        class="login-form"
      >
        <div>
          This is a single page app displaying GIhub users. Including following function
          <ul>
            <li>Filter user by name</li>
            <li>Sorting users by, followers, repos and created at</li>
            <li>Detail user page</li>
          </ul>
        </div>
        <el-form-item>
         <async-button :label="'Start'" @nextAction="start()"></async-button>
        </el-form-item>
      </el-form>
    </el-card>
    </div></el-col>
</el-row>
  </div>
</template>

<script>
import Vue from "vue";
import AsyncButton from "../../../components/AsyncButton.vue";

export default Vue.extend({
  components: { AsyncButton },
  methods: {
      async start() {
        await this.$store.dispatch('user/searchUsersByName',{name: ''});
        this.$router.push({name: 'users'});
      }
  }
}
)
</script>
<template>
  <div>
    <el-container>
      <el-header >
         <el-col :span="6" :offset="4"><h3 >ApplyId</h3></el-col>
        <el-dropdown style="float: right; margin-top:15px">
        <i class="el-icon-user" style=" font-size: 2rem;"/>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item @click.native="logout">Log out</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      </el-header>

        <el-row>
        <el-col :offset="4">
          <el-row>
            <el-col :span="4">
              <el-menu class="el-menu-vertical-demo">
                <el-menu-item>
                    <router-link to="/users">Users</router-link>
                </el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="20">
              <router-view></router-view>
            </el-col>
          </el-row>
        </el-col>
        </el-row>
    </el-container>
  </div>
</template>
<script>
export default {
  methods:{
    logout(){
      this.$router.push({name:'home'});
    }
  }
}
</script>

<template>
  <div>
    <el-container>
      <el-header style="text-align: right;">
        <span style="margin-right:40px"><i class="el-icon-user" style=" font-size: 2rem;"/></span>
      </el-header>

        <el-row>
        <el-col :offset="4">
          <e-row>
            <el-col :span="4">
              <el-menu class="el-menu-vertical-demo">
                <el-menu-item>
                    <router-link to="users">Users</router-link>
                </el-menu-item>
                <el-menu-item>
                  <router-link to="a">a</router-link>
                </el-menu-item>
              </el-menu>
            </el-col>
            <el-col :span="20">
              <router-view></router-view>
            </el-col>
          </e-row>
        </el-col>
        </el-row>
    </el-container>
  </div>
</template>

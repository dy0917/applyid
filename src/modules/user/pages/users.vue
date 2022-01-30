<template>
  <div>
    <el-table
     :data="tableData"
      :default-sort = "{prop: 'created_at', order: 'ascending'}"
    style="width: 100%;margin-bottom: 20px;"
    row-key="id"
    border>
      <el-table-column
      width="180">
        <template slot="header">
          <el-row>
             <el-col :span="8">
            Name
             </el-col>
               <el-col :span="16">
                 <div class='el-input el-input--mini'>
                 <input
                    v-model="search"
                    size="mini"
                    class="el-input__inner"
                    placeholder="Search name"/>
                 </div>
             </el-col>
          </el-row>
      </template>
      <template slot-scope="scope">
        <router-link :to="{path: `users/${scope.row.id}`}"> {{scope.row.name}}</router-link>
      </template>
    </el-table-column>
        <el-table-column
      prop="followers"
      label="Followers"
      sortable
      width="180">
    </el-table-column>
         <el-table-column
      prop="public_repos"
      label="Public repos"
      sortable
      width="180">
    </el-table-column>
    <el-table-column
      prop="created_at"
      label="Created at"
      sortable
      width="180">
        <template slot-scope="scope">
          {{scope.row.created_at | moment}}
       <!-- {{prop| moment}} -->
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import Vue from "vue";
import {mapGetters} from "vuex";
import moment from "moment";

export default Vue.extend({
  computed:{
    ...mapGetters("user",['getUsers']),
    tableData(){
      return this.getUsers().filter(data => !this.search || data.name.toLowerCase().includes(this.search.toLowerCase()));
    },
  },
  
  data(){
    return {
      search: ''
    }
  },

  async created(){
     await this.$store.dispatch('user/searchUsersByName',{name: ''});
  },

  filters: {
    moment: function (date) {
       return moment(date).format('YYYY-MM-DD');
    }
  }
}
)
</script>
<template>
  <div>
    <el-button
    :loading="loading"
    class="login-button"
    type="primary"
    block
    @click="buttonAction"
    >{{buttonLabel}}</el-button>
  </div>
</template>

<script>
export default {
  name: "TestComponent",
    props: ['label'],
    computed:{
        buttonLabel(){
            return this.label? this.label : 'OK'
        },
    },
    data(){
        return {
            loading: false,
        }
    },
  methods: {
     async buttonAction(){
        this.loading=true;
        await setTimeout(async ()=>{
            await this.$emit('nextAction');
            this.loading=false;
        }, 1000);
    
     },
  }
}
</script>

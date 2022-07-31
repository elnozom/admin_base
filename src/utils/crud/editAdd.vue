<template>
<div class="py-12">
  <v-container v-if="!loading">
    <Form :form="d.form"/>
     <v-btn color="primary" class="submit-btn mt-8" @click.prevent="submit">{{$t('submit')}}</v-btn>
  </v-container>
</div>
</template>
<script lang="ts">
import Form from '../form/components/Form.vue'
import EditAdd from './editAdd'
// import {snackBar} from '@/utils/Helpers'
export default {
  data(){
    return{
      loading:true
    }
  },
  
 props:{
     d:{
         required: true,
         type:EditAdd
     }
 },
 methods:{
    async submit(){
       this.d.submit().then(res => {
         this.$router.back()
       }).catch(e => {
         console.log(e)
       })
    }
  },
 components:{
     Form
 },
 async created(){
   if (this.$route.params.id) {
     await this.d.setId(parseInt(this.$route.params.id))
   }
   this.loading = false
 }
}
</script>

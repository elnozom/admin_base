<template>
<div class="py-12">
  <v-container>
    <Form :form="d.form"/>
     <v-btn  class="app-btn mt-8" @click.prevent="submit()">{{$t('submit')}}</v-btn>
  </v-container>
</div>
</template>
<script lang="ts">
import Form from '../form/components/Form.vue'
import EditAdd from './editAdd'
import { bus } from "@/main";
// import {snackBar} from '@/utils/Helpers'
export default {
 
  
 props:{
     d:{
         required: true,
         type:EditAdd
     }
 },
 methods:{
    async submit(){
      const isFormValid = await this.d.form.validate()
      if(!isFormValid){
        return
      }

       this.d.submit().then(res => {
         if(this.d.callBack != null){
           this.d.callBack(this.d.form.state)
         } else {
           this.$router.back()
         }
       }).catch(e => {
         this.d.form.error = e
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
   bus.$on("editAddFind", async (id : number) => {
      await this.d.setId(id)
    })
 }
}
</script>

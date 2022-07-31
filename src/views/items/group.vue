<template>
<div class="py-12">
  <v-container>
      <v-row>
          <v-col cols="6">
tree
          </v-col>
          <v-col cols="6">
            <v-card>
            <EditAddComponent :d="d"/>
            </v-card>
          </v-col>
      </v-row>
  </v-container>
</div>
</template>
<script >
import EditAdd from '@/utils/crud/editAdd'
import details from '@/cruds/categories'
import EditAddComponent from '@/utils/crud/editAdd.vue'
export default {
  components:{
    EditAddComponent
  },
  computed:{
   d(){
    //  details.id = parseInt(this.$router.params.id)
     const d = new EditAdd(details)
     return d
   }
  },
}
</script>
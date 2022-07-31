<template>
    <v-text-field
      :label="$t(input.label)"
      :disabled="input.disabled"
      :type="input.type"
      :prepend-icon="input.icon"
      :clearable="!input.required"
      :append-icon="input.required ? 'mdi-asterisk' : ''"
      :rules="input.rules ? input.rules : []"
      :value="initial"
      :hint="input.hint"
      outlined
      @input="change"
    ></v-text-field>
</template>



<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props:['input' , 'initial'],
  methods:{
    change(val:any){
      this.input.val = val

      // if (this.type == 'number') {
      //   val = parseInt(val)
      // }
      if(this.input.isNumber) {
        val = val == '' || val == null ? 0 : parseFloat(val)
      }
      this.$emit('input'  ,val)
    }
  }
});
</script>
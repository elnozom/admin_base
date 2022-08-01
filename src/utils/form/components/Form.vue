<template>
  <v-container>
    <v-skeleton-loader
      v-if="loading"
      type="article"
    ></v-skeleton-loader>
    <v-form
      v-else
      :valid="form.valid"
      ref="appForm"
      enctype='multipart/form-data'
    >
      <v-row>
        <v-col cols="12">
          <v-alert
            border="bottom"
            color="pink darken-1"
            dark
            v-if="form.error"
          > {{form.error}}</v-alert>
        </v-col>
        <v-col
          :cols="input.field.cols"
          v-for="(input , index) in form.inputs"
          :key="index"
        >
          <component
            v-show="typeof input.field.hidden == 'undefined'"
            :is="input.field.generateInputHtml()"
            v-model="form.state[input.field.name]"
            :input="input.field"
          ></component>
        </v-col>
        <v-col
          cols="12"
          v-if="form.submit"
        >
          <v-btn
            class="app-btn"
            :loading="form.loading"
            @click.prevent="submit()"
          >{{$t('submit')}}</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>

</template>

<script lang="ts">
import Form from "../Form";
import Vue from "vue";
import { InputInterface } from "../interface";
import { bus } from "@/main";
export default Vue.extend({
  props: {
    form: Form,
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    submit() {
      this.form.submitAction(this.$refs.appForm);
    },
    // this method will be code when any input in the form changed
    change(input: InputInterface) {
      this.form.valid = false;
      let form = this.form.state;
      form[input.name as keyof typeof form] = input.value;
      if (this.form.validate()) {
        this.form.valid = true;
        this.$emit("change", input.value);
      }
    },
    fileChange(val: InputInterface) {
      let form = this.form.state;
      form[val.name as keyof typeof form] = val.value;
    },
  },
  created() {
    bus.$on("resetAppForm", () => {
      const ref = this.$refs.appForm as any;
      if(typeof ref != 'undefined') {
        this.form.state = {}
        ref.reset();
      }
    });
    bus.$on("changeStateAppForm", () => {
      this.loading = true;
        this.loading = false;
    });
    bus.$on("validateAppForm", () => {
     const ref = this.$refs.appForm as any;
      if(typeof ref != 'undefined') {
        ref.validate();
      }
    });
    bus.$on("resetValidationAppForm", () => {
     const ref = this.$refs.appForm as any;
      if(typeof ref != 'undefined') {
        ref.resetValidation();
      }
    });
    
  },
});
</script>
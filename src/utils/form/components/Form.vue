<template>
<v-container>

    <v-card elevation="0">
        <v-card-title >
            <slot />
        </v-card-title>
        <v-card-text>
            <v-form :valid="form.valid" ref="appFrom" enctype='multipart/form-data'>
                <v-row>
                    <v-col cols="12">
                        <v-alert  border="bottom" color="pink darken-1" dark v-if="form.error"> {{form.error}}</v-alert>
                    </v-col>
                    <v-col :cols="input.field.cols" v-for="(input , index) in form.inputs" :key="index">
                        <component v-show="typeof input.field.hidden == 'undefined'" :is="input.field.generateInputHtml()" :initial="form.state[input.field.name]" v-model="form.state[input.field.name]" :input="input.field"></component>
                    </v-col>
                    <v-col cols="12" v-if="form.submit">
                        <v-btn  color="primary" class="app-btn" :loading="form.loading" @click.prevent="form.submitAction()">{{$t('submit')}}</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</v-container>

</template>

<script lang="ts">
import Form from '../Form'
import Vue from 'vue'
import { InputInterface } from '../interface'
export default Vue.extend({
    props:{
        form:Form
    },
    watch:{
        "$route.name" : {
            handler: function (val, oldVal) {
               console.log("change")
            },
            deep: true
        }
    },
    methods:{
        // this method will be code when any input in the form changed
        change(input:InputInterface) {
            this.form.valid = false
            let form =  this.form.state
            form[input.name as keyof typeof form] = input.value
            if(this.form.validate()){
                this.form.valid = true
                this.$emit('change' , input.value)
            }
        },
        fileChange(val:InputInterface) {
            let form =  this.form.state
            form[val.name as keyof typeof form] = val.value
        }
    }
})
</script>
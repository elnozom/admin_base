import Vue from 'vue';
import TextInputComponent from '@/utils/form/components/Text.vue'
import FileInputComponent from '@/utils/form/components/File.vue'
import ComboInputComponent from '@/utils/form/components/Combo.vue'
import { TextInputInterface, SelectInputInterface } from '@/utils/form/interface';
import {  required } from "@/utils/validations/validations"


export const imgInput: TextInputInterface = {
    name: "Image",
    icon: "",
    generateInputHtml: () => Vue.extend(FileInputComponent),
    rules: [],
    label: "Img",
    isImg: true,
    cols: 12,
    type: 'file',
    value: ""
}


export const nameInput: TextInputInterface = {
    name: "name",
    icon: "",
    generateInputHtml: () => Vue.extend(TextInputComponent),
    rules: [
        (value: string) => required(value),
        // (value:string) => email(value) ,
    ],
    label: "name",
    cols: 6,
    type: 'text',
    value: ""
}


export const nameEnInput: TextInputInterface = {
    name: "name_en",
    icon: "",
    generateInputHtml: () => Vue.extend(TextInputComponent),
    rules: [
        (value: string) => required(value),
    ],
    label: "name_en",
    cols: 6,
    type: 'text',
    value: ""
}


export const code: TextInputInterface = {
    name: "code",
    icon: "",
    generateInputHtml: () => Vue.extend(TextInputComponent),
    label: "code",
    cols: 6,
    type: 'text',
    value: ""
}




export const paretnGroupInput:SelectInputInterface =  {
    name:"parent",
    cache : false,
    text : 'parent_name',
    cols:6,
    initialFetch:true,
    generateInputHtml : () =>   Vue.extend(ComboInputComponent),
    clearable:true,
    valueKey : 'parent_code',
    type : 'combo',
    url:'groups',
    icon : 'mdi-parent-settings-outline',
    label : 'parent'
  }
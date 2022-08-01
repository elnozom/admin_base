import Vue from 'vue';
import TextInputComponent from '@/utils/form/components/Text.vue'
import FileInputComponent from '@/utils/form/components/File.vue'
import ComboInputComponent from '@/utils/form/components/Combo.vue'
import { TextInputInterface, SelectInputInterface } from '@/utils/form/interface';
import {  required } from "@/utils/validations/validations"


export const imgInput: TextInputInterface = {
    name: "imagePath",
    generateInputHtml: () => Vue.extend(FileInputComponent),
    label: "Img",
    cols: 6,
    type: 'file',
    value: ""
}


export const nameInput: TextInputInterface = {
    name: "groupName",
    generateInputHtml: () => Vue.extend(TextInputComponent),
    rules: [
        (value: string) => required(value),
    ],
    
    label: "name",
    cols: 6,
    type: 'text',
    required:true,
    value: ""
}


export const nameEnInput: TextInputInterface = {
    name: "groupNameEn",
    generateInputHtml: () => Vue.extend(TextInputComponent),
    rules: [
        (value: string) => required(value),
    ],
    label: "name_en",
    cols: 6,
    required:true,
    type: 'text',
    value: ""
}





export const paretnGroupInput:SelectInputInterface =  {
    name:"parentCode",
    cache : false,
    text : 'name',
    cols:6,
    initialFetch:true,
    generateInputHtml : () =>   Vue.extend(ComboInputComponent),
    clearable:true,
    valueKey : 'code',
    type : 'combo',
    url:'groups/list',
    label : 'parent'
  }
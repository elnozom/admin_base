import i18n from '@/i18n';
import Vue from 'vue';
import DateInputComponent from '../components/Date.vue'
import TextInputComponent from '../components/Text.vue'
import FileInputComponent from '../components/File.vue'
import SwitchInputComponent from '../components/Switch.vue'
import SelectInputComponent from '../components/Select.vue'
import ComboInputComponent from '../components/Combo.vue'
import { InputInterface } from '@/utils/form/interface';
import { TextInputInterface, SwitchInputInterface, DateInputInterface, SelectInputInterface } from '../interface';
import { name, required, email, num } from "@/utils/validations/validations"


export const usernameInput: TextInputInterface = {
  name: "username",
  icon: "",
  generateInputHtml: () => Vue.extend(TextInputComponent),
  rules: [
    (value: string) => required(value),
    // (value:string) => email(value) ,
  ],
  required:true,
  label: "Email",
  cols: 12,
  
  type: 'text',
  value: ""
}
export const passwordInput: TextInputInterface = {
  name: "password",
  required:true,
  generateInputHtml: () => Vue.extend(TextInputComponent),
  icon: "",
  rules: [
    (value: string) => required(value),
  ],
  label: "Password",
  cols: 12,
  type: 'password',
  value: ""
}

export const convertToRequred = (input: InputInterface) => {
  const req = { ...input }
  req.required = true
  req.rules ?
    req.rules?.push((value: string) => required(value)) :
    req.rules = [(value: string) => required(value)]

  return req
}
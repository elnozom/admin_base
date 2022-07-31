import { VueConstructor } from "vue/types/umd"
import Input from "./inputs/Input"

export type TextInputInterface = {
    name: string
    label: string
    isNumber?:boolean
    hint?:string
    disabled?:boolean
    hidden?:boolean
    icon?: string
    cols: number
    type:string
    generateInputHtml:() => VueConstructor<Vue>

    rules?:Array<Function>,
    val?:any
    isImg?:boolean
    initial?:any,
    required?:boolean
    value:any
}
export type SwitchInputInterface = {
    name: string
    hidden?:boolean
    disabled?:boolean
    label: string
    rules?:Array<Function>,
    cols: number
    generateInputHtml:() => VueConstructor<Vue>
    required?:boolean
    initial?:any,
    value:any,
    type:string
}
export type DateInputInterface = {
    name: string
    label : string
    disabled?:boolean
    min : string
    rules?:Array<Function>,
    max : string
    hidden?:boolean
    required?:boolean
    cols?:number
    generateInputHtml:() => VueConstructor<Vue>
    val?:any
    value : any
    limit:string
    initial?:any
    type: string
}

export type SelectInputInterface = {
    name: string
    generateInputHtml:() => VueConstructor<Vue>
    cache: boolean
    disabled?:boolean
    clearable?:boolean
    hidden?:boolean
    text?: string
    value?: string
    rules?:Array<Function>,
    valueKey?: string
    type:string
    initialFetch:boolean
    initial?:any,
    cols?:number
    items?: Object[]
    icon?: string
    label: string
    url?:string
    change?:Function
    required?:boolean
    payload?:Object
}

export type InputInterface = SelectInputInterface | TextInputInterface | DateInputInterface | SwitchInputInterface

export interface FormInterface {
    inputs: Input[]
    loading?: boolean
    valid?:boolean 
    submit?: (form: any) => Promise<any>
    callBack?: (response: any) => any
}
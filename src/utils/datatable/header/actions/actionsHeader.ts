import DataTable  from '@/utils/datatable/components/datatable.vue'
import { ActionsParamInterface } from './actionsInterface'
import { Action } from '@/utils/datatable/datatableInterface'
import i18n from '@/i18n'
import Vue from 'vue'
import { Delete } from "@/repositories/global"
import router from "@/router"
import {Respond} from "@/repositories/requests"
import ActionsComponent  from '@/utils/datatable/components/actions.vue'
import store  from '@/store'
import { bus } from '@/main'
export default class ActionsHeader{ 
  table:string
  text: string = i18n.t('actions').toString()
  key: string = ''
  isImage?: boolean = false
  total?: number = 0
  actions: Action[] = []
  item : any

  public constructor(tale:string , actions:ActionsParamInterface ){
    this.table = tale
    if (actions.edit) this.actions.push(this._editAction())
    if (actions.view) this.actions.push(this._viewAction())
    if (actions.delete) this.actions.push(this._deleteAction())
    if (actions.approve) this.actions.push(this._approveAction())
    if (actions.decline) this.actions.push(this._declineAction())
    if (actions.pend) this.actions.push(this._pendAction())
    if (actions.respond) this.actions.push(this._respondAction())
  }
  
  private _editAction :() => Action = () => {
    let action : Action = {
      title : 'edit',
      icon : 'mdi-file-edit-outline',
      method : this.edit,
    }
    return action
  }

  private _approveAction :() => Action = () => {
    let action : Action = {
      title : 'approve',
      icon : 'mdi-thumb-up-outline',
      method : this.approve,
    }
    return action
  }
  private _pendAction :() => Action = () => {
    let action : Action = {
      title : 'pend',
      icon : 'mdi-briefcase-clock-outline',
      method : this.pend,
    }
    return action
  }
  private _respondAction :() => Action = () => {
    let action : Action = {
      title : 'respond',
      icon : 'mdi-briefcase-clock-outline',
      method : this.openResponModal,
    }
    return action
  }

  

  private _declineAction :() => Action = () => {
    let action : Action = {
      title : 'decline',
      icon : 'mdi-close-circle-outline',
      method : this.decline,
    }
    return action
  }

  private _viewAction :() => Action = () => {
    let action : Action = {
      title : 'view',
      icon : 'mdi-eye-outline',
      method : this.view,
    }
    return action
  }
  private _deleteAction :() => Action = () => {
    let action : Action = {
      title : 'delete',
      icon : 'mdi-delete-outline',
      method : this.delete,
    }
    return action
  }

  public openResponModal = (item : any) => {
    let st = store as unknown as any
    st.commit('ui/respondModal' , {status: true ,id: item.UserId})
  }
  public delete = (item : any) => {
    Delete({table : this.table ,id : item.Id}).then((res:any) => {
      bus.$emit('getTableData');
    })
  }

  public edit = (item : any) => {
    router.push({name : `${router.currentRoute.name}-edit` , params:{id : item.Id}})
  }



  public respond = (item: any , action: string ) => {
    Respond(item.Id , this.table , action).then((res : any) => {
      bus.$emit('getTableData');
    })
  }
  public approve = (item : any) => {
    this.respond(item ,'approved')
  }

  public decline = (item : any) => {
    this.respond(item ,'declined')
  }
  public pend = (item : any) => {
    this.respond(item ,'pending' )
  }
  public view = (item : any) => {
    router.push({name : `${router.currentRoute.name}-view` , params:{id : item.Id}})
  }
  public  generateColumnHtml(item : any) {
    let c  = Vue.extend(ActionsComponent)
    return c
  }
}
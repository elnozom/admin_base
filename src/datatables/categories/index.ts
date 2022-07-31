import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import TextHeader from '@/utils/datatable/header/textHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import Datatable  from '@/utils/datatable/datatable'
import filters from './filters'
const headers:HeaderInterface[] = [
  new TextHeader('Id'),
  new TextHeader('Name'),
  new TextHeader('Icon'),
  new ActionsHeader('categories'  , {edit : true , view : false , delete : true})
]
const url = "cats"

const params:DatatableIntetrface = {
    title : "categories",
    headers ,
    description:"articles_desc",
    searchable:true,
    filters,
    url,
    hasFooter:false,
    hasEdit:true,
    hasCreate:true
}


const datatable = new Datatable(params)
export default datatable
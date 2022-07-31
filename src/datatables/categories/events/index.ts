import { HeaderInterface } from '@/utils/datatable/header/headerInterface';
import DatatableIntetrface from '@/utils/datatable/datatableInterface'
import TextHeader from '@/utils/datatable/header/textHeader';
import ActionsHeader from '@/utils/datatable/header/actions/actionsHeader';
import Datatable  from '@/utils/datatable/datatable'
const headers:HeaderInterface[] = [
  new TextHeader('Id'),
  new TextHeader('Name'),
  new TextHeader('Icon'),
  new ActionsHeader('categories'  , {edit : true , delete : true})
]
const url = "cats?Type=event"

const params:DatatableIntetrface = {
    title : "categories",
    headers ,
    description:"articles_desc",
    searchable:true,
    url,
    hasFooter:false,
    hasEdit:true,
    hasCreate:true
}


const datatable = new Datatable(params)
export default datatable
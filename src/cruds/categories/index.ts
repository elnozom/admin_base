import categoryForm from '@/forms/category/';
import EditAdd from '@/utils/crud/editAdd';
import EditAddInterface from '@/utils/crud/editAddInterface';
const editAddInterface :EditAddInterface = {
    title : "groups",
    table : "groups",
    form :  categoryForm
}
const editAddCategory = new EditAdd(editAddInterface)
export default editAddCategory
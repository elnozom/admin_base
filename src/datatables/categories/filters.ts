import Form  from '@/utils/form/Form';
import { FormInterface } from '@/utils/form/interface';
import { categoryTypeInput } from './../../utils/form/inputs/InputStore';
import Input from '@/utils/form/inputs/Input';
const inputs:Input[] = [
    new Input(categoryTypeInput),
]
const params :FormInterface = {
    inputs
}

const rolesFilters = new Form(params)

export default rolesFilters
import Input from '@/utils/form/inputs/Input';
import Form from '@/utils/form/Form';
import {FormInterface } from '@/utils/form/interface';
import {
    imgInput,
    nameInput,
    nameEnInput,
    paretnGroupInput,
} from './inputs'

const inputs:Input[] = [
    new Input(nameInput),
    new Input(nameEnInput),
    new Input(paretnGroupInput),
    new Input(imgInput),
]

const params :FormInterface = {
    inputs
}

const categoryForm = new Form(params)

export default categoryForm

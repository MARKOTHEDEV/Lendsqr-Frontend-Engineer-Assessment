import Button from '../Button/Button'
import { InputWithLabel } from '../InputWithLabel/InputWithLabel'
import './InputWithSearch.style.scss'
import {BsSearch} from 'react-icons/bs'

const InputWithSearch =  ():React.ReactElement =>{

    return (
        <div className='inputwithsearch__container'>
            <InputWithLabel 
            label='Search for anything'
            />
            <Button>
                <BsSearch/>
            </Button>
        </div>
    )
}

export default InputWithSearch
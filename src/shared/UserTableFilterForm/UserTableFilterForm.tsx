import Button from "../Button/Button"
import { InputWithLabel } from "../InputWithLabel/InputWithLabel"
import './UserTableFilterForm.style.scss'




const UserTableFilterForm = ()=>{

    return (
        <div 
        className="UserTableFilterForm__container"
        style={{}}>
        <InputWithLabel label='Organization'/>
        <br />
         <InputWithLabel label='Username'/>
        <br />
         <InputWithLabel label='Email'/>
         <br />
         <InputWithLabel label='Date'/>
         <br />
         <InputWithLabel label='Status'/>
      <br />
         <div 
            className="UserTableFilterForm__btncontainer">
          <Button
              styleType='whitBtn'
          >Rest</Button>
          <Button>Filter</Button>
         </div>
        </div>
    )
}

export default UserTableFilterForm
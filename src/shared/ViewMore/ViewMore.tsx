import { useState } from 'react';
import './ViewMore.style.scss'
import dotImg from '../../assets/dot.svg'
import  {BsEye} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom';


type Prop =React.PropsWithChildren<{
    show:boolean;
}>
const ViewMore =({show,children}:Prop):React.ReactElement =>{
    return (
        <div className={`ViewMore__container ${show?'show':''}`}> 
            {children}
        </div>
    )
}

export default ViewMore

type EllipsesBtn ={
    userID:string;
}
export const EllipsesBtn = ({userID}:EllipsesBtn):React.ReactElement=>{
    const [show,setShow]= useState(false)
    const navigate = useNavigate()        
    return (
            <div className='EllipsesBtn__container' >
                 <img src={dotImg}onClick={e=>{
                setShow(!show)
             }}  />
                 {
                    show?
                    <div className='EllipsesBtn__floatingpane'>
                       <div onClick={e=>{
                        navigate(`/user-details/${userID}`)
                       }}>
                           <BsEye/> <p>View Details</p>
                       </div>
                       <div>
                           <BsEye/> <p>Blacklist User</p>
                       </div>
                       <div>
                          <BsEye/> <p>Activate User</p>
                       </div>
                    </div>:''
                 }
            </div>
        )
}
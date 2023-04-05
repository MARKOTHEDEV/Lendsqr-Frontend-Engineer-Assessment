import React, { useState } from "react";
import './InputWithLabel.style.scss'



type Prop ={
    label:string;
    placeholder?:string;
    isTextArea?:boolean;
    register?:any;
    errorMessage?:string;
    type?:'password'|'text';
    style?: React.CSSProperties;
    // containerStyle:
  }

export const InputWithLabel = (
    {style={}, type='text',errorMessage,label,placeholder='',isTextArea=false,register}:Prop
):React.ReactElement=>{
    const [show,setShow] = useState(false);
    const decideType =():string=>{
        if(type=='password'){
          return show?'text':'password'
        }
        return 'text'
      }

      const RenderIcon = ()=>{
        return (
          <>
            {
              show?
              <span className="passwordview" onClick={e=>setShow(!show)}>hide</span>
              :
              <span className="passwordview" onClick={e=>setShow(!show)}>show</span>

            }
          </>
        )
      }
    return (
        <div className="form-group" style={style}>
            {type==='password'&&<RenderIcon/>}
            <input type={decideType()}   placeholder={label} />
            <span style={{'color':'crimson'}}>{errorMessage}</span>
        </div>
    )
}
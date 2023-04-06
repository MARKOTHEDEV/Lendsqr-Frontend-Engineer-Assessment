import { motion } from "framer-motion"
import './Button.style.scss'
export type ButtonProp =React.PropsWithChildren<{
    'styleType'?:'whitBtn'|'danger'|'emptyCustom'|'green',
    'style'?:React.CSSProperties,
    onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void;
    isLoading?:boolean;
    type?:"button" | "reset" | "submit";
  }>
  

const Button = ({styleType,isLoading=false,children,style,type='button',...rest}:ButtonProp):React.ReactElement=>{
    return (

        <motion.button  className={`CustomBtn  ${styleType}`}  style={style} whileTap={{ scale: 0.9 }}
        animate={{
          transition: {
            type:'spring',
            stiffness:70
          }
        }}
        type={type}
        {...rest}>
        {isLoading?'Loading...':children}
      </motion.button>
    )
}

export default Button
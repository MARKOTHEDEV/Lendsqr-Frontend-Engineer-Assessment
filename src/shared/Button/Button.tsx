import { motion } from "framer-motion"
import './Button.style.scss'
export type ButtonProp =React.PropsWithChildren<{
    'styleType'?:'whitBtn'|'danger'|'emptyCustom',
    'style'?:React.CSSProperties,
    onClick?:(e:React.MouseEvent<HTMLButtonElement>)=>void;
    isLoading?:boolean;
  }>
  

const Button = ({styleType,isLoading=false,children,style,onClick,...rest}:ButtonProp):React.ReactElement=>{
    return (

        <motion.div  className={`CustomBtn  ${styleType}`}  style={style} whileTap={{ scale: 0.9 }}
        animate={{
          transition: {
            type:'spring',
            stiffness:70
          }
        }}
        {...rest}>
        {isLoading?'Loading...':children}
      </motion.div>
    )
}

export default Button
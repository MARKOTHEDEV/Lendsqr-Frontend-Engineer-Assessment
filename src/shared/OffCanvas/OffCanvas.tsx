import { AiOutlineCloseCircle } from 'react-icons/ai'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import AppLogo from '../Logo/Logo';

type Prop =React.PropsWithChildren<
{
//   btnContrroller:React.ReactElement;
  size?:number;
  direction?:'left'|'right'|'bottom';
  isOpen:boolean;
 setIsOpen:any;
}>



const OffCanvas = ({children,isOpen,setIsOpen,size=80,direction='left',}:Prop):React.ReactElement=>{
    
    const toggleDrawer = () => {
        setIsOpen((prevState:boolean) => !prevState)
      }
    return (
        <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        className='bla bla bla'
        size={`${size}%`}
        direction={direction}
        zIndex={4000}
        style={{'overflow':'scroll'}}
        // style={{'zIndex':'1000'}}
      >
        <div style={{'padding':'.8rem .3rem','paddingTop':'.8rem','display':'flex','justifyContent':'space-between','alignItems':'center','borderBottom':'1px solid #e5e7eb'}}>
          <AppLogo style={{'width':'120px'}}/>
          <AiOutlineCloseCircle onClick={(e)=>setIsOpen(false)}/>
        </div>
        {
          children
        }
      </Drawer>
    )
}

export default OffCanvas
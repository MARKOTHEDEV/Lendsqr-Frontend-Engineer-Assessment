import Img from '../../assets/logo.svg'

type Prop ={
    style?:React.CSSProperties
}
const AppLogo = ({ style}:Prop):React.ReactElement=>{


    return (
        <div style={style}>
            <img src={Img} alt="" />
        </div>
    )
}

export default AppLogo
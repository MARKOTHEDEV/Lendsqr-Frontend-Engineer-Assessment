import './Pane.style.scss'
type Prop =React.PropsWithChildren<{
    style?:React.CSSProperties
}>
const Pane = ({style,children}:Prop)=>{
    return (
        <div className="pane__container" style={style}>
            {children}
        </div>
    )
}

export default Pane
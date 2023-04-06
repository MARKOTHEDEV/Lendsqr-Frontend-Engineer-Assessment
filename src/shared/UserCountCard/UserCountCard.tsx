import './UserCountCard.style.scss'
import pinkpeopleImage from '../../assets/pinkpeople.svg'

type Prop ={
    colorVariants:'purple'|'pink'|'orange'|'red',
    image:string;
    type:string;
    count:string
}
const UserCountCard = ({colorVariants,image,type,count}:Prop)=>{

    return (
        <div className="usercountcard__container">
                <img src={image} alt="" className={`usercountcard__image ${colorVariants}`}/>
            <p className='usercountcard__type'>{type}</p>
            <h2 className='usercountcard__count'>{count}</h2>
        </div>
    )
}

export default UserCountCard
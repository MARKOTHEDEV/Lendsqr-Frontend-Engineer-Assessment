import './UserListOfInfoWithTitle.scss'


type Prop ={
    heading:string;
    info:{
        heading:string;
        value:string
    }[]
}
const UserListOfInfoWithTitle=({heading,info}:Prop)=>{

    return (
        <div className="userlistofinfowithtitle__container">
            <h2 className="userlistofinfowithtitle__title">{heading}</h2>
            <div className="list_of_each_userinfo__container">
               {
              info.map((d,index)=>(
                    <div className="each_userinfo" key={index}>
                    <p>{d.heading}</p>
                    <h4>{d.value}</h4>
                </div>
                ))
               }
            </div>
            <br />
        </div>
    )
}

export default UserListOfInfoWithTitle 
import UserCountCard from '../../shared/UserCountCard/UserCountCard'
import './UsersPage.style.scss'
import pinkpeopleImage from '../../assets/pinkpeople.svg'
import purpleImage from '../../assets/purple.svg'
import RedMoneyImg from '../../assets/red_money.svg'
import LoadMoneyImg from '../../assets/loan.svg'
import { useMediaQuery } from 'react-responsive'

const UsersPage = ():React.ReactElement=>{
  const isLaptop = useMediaQuery({ query: '(min-width: 1200px)' });

    return (
        <div className="userspage__container">
            <h2>Users</h2>
            <br /><br />

           <div style={{'display':'flex',justifyContent:'space-between','gap':'20px','flexWrap':'wrap'}}>
           <UserCountCard
                colorVariants='pink'
                image={pinkpeopleImage}
                type='Users'
                count='2,453'
            />

<UserCountCard
                colorVariants='purple'
                image={purpleImage}
                type='Active Users'
                count='2,453'
            />


<UserCountCard
                colorVariants='orange'
                image={LoadMoneyImg}
                type='Users with Loans'
                count='12,453'
            />
                        <UserCountCard
                colorVariants='red'
                image={RedMoneyImg}
                type='Users with Savings'
                count='102,453'
            />
           </div>
        </div>
    )
}

export default UsersPage
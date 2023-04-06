import UserCountCard from '../../shared/UserCountCard/UserCountCard'
import './UsersPage.style.scss'
import pinkpeopleImage from '../../assets/pinkpeople.svg'
import purpleImage from '../../assets/purple.svg'
import RedMoneyImg from '../../assets/red_money.svg'
import LoadMoneyImg from '../../assets/loan.svg'
import { useMediaQuery } from 'react-responsive'
import Table, { prop_columnsType } from '../../shared/Tables/Table'
import { useQuery } from 'react-query'
import { getUsersApi } from '../../api/users.api'

const UsersPage = ():React.ReactElement=>{
  const isLaptop = useMediaQuery({ query: '(min-width: 1200px)' });
  const {data,isLoading} = useQuery('users',getUsersApi)
    const columns:prop_columnsType[] = [
        {
            Header:'organization',
            'accessor':'orgName',
        },
        {
            Header:'Username',
            'accessor':'userName',
            id:1,
        },
        {
            Header:'Email',
            'accessor':'email',
            id:2,
        },
        {
            Header:'Phone number',
            'accessor':'phoneNumber',
            id:3,
        },
        {
            Header:'Date joined',
            'accessor':'createdAt',
            id:4,
        },
        {
            Header:'Status',
            'accessor':'id',
            id:5,
            Cell:(tableProps:any)=>{
                return (
                    <p className='table_status'>
                        status
                        {/* tableProps.row.original.paystack */}
                    </p>
                )
            }
        },
    ]
    return (
        <div className="userspage__container">
            <h2>Users</h2>
            <br /><br />
            {
                isLoading&&<h1>loading</h1>
            }
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

           <br />
           <br />

            {
                data?
                <Table  COLUMNS={columns} rest_data={data}/>
            :''
            }
        </div>
    )
}

export default UsersPage
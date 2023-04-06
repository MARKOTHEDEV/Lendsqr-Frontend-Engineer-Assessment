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
import { getRandomInt } from '../../utils/extraFunction'
import moment from "moment";
import {BiFilter} from 'react-icons/bi'
import Preloader from '../../shared/Preloader/Preloader'
import Button from '../../shared/Button/Button'
import ViewMore, { EllipsesBtn } from '../../shared/ViewMore/ViewMore'
import { useState } from 'react'
import { InputWithLabel } from '../../shared/InputWithLabel/InputWithLabel'
import UserTableFilterForm from '../../shared/UserTableFilterForm/UserTableFilterForm'
const UsersPage = ():React.ReactElement=>{
  const isLaptop = useMediaQuery({ query: '(min-width: 1200px)' });
  const [filter,setFilter]=useState(false)
  const [viewMore,setViewMore] = useState(false)
  const {data,isLoading} = useQuery('users',getUsersApi,{'refetchOnWindowFocus':false})
    const columns:prop_columnsType[] = [
        {
            Header:`organization`,
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
            Cell:(tableProps:any)=>(
                <>
                
                {moment(tableProps.row.original.createdAt).format('MMM d, YYYY, h:mm a')}
                </>
            )
        },
        {
            Header:'Status',
            'accessor':'id',
            id:5,
            Cell:(tableProps:any)=>{
                const status:any ={
                    0:{'status':'inactive','color':'gray'},
                    1:{'status':'pending','color':'yellow'},
                    2:{'status':'Blacklisted','color':'red'},
                    3:{'status':'Active','color':'gray'},
                    4:{'status':'inactive','color':'green'},
                }
                let currentState:number = getRandomInt(4)
                return (
                    <p className={`table_status ${status[currentState].color}`}>
                        {status[currentState].status}
                       
                    </p>
                )
            }
        },
        {
            Header:' ',
            accessor:'id',
            id:6,
            Cell:(tableProps:any)=>{
                return (
                    <EllipsesBtn userID={tableProps.row.original.id}/>

                )
            }
        }
    ]
    const isMobile = useMediaQuery({ query: '(min-width: 800px)' })
    return (
        <div className="userspage__container">
            <h2>Users</h2>
            <br /><br />
            <Preloader loading={isLoading}/>
           <div style={{'display':'flex',justifyContent:'space-between','gap':'20px','flexWrap':'wrap','width':'100%',}}>
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
           <br />
           
           <div  style={{'width':'150px','position':'relative'}}>
           <Button 
           styleType='whitBtn'
            onClick={e=>{setFilter(!filter)}}>
                FILTER BY</Button>
           <br />
           <ViewMore show={filter}>
                <UserTableFilterForm/>
                </ViewMore>
           </div>
           
            <div >

         {

            data?
            <Table  COLUMNS={columns} rest_data={data}/>
            :''
            }
        </div>
        </div>
    )
}

export default UsersPage
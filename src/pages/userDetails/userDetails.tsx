import leftarrow from '../../assets/leftarrow.svg'
import Button from '../../shared/Button/Button'
import Pane from '../../shared/Pane/Pane'
import uservector from '../../assets/uservector.svg'
import Star from '../../assets/start (1).svg'
import './userDetails.syle.scss'
import UserListOfInfoWithTitle from '../../shared/UserListOfInfoWithTitle/UserListOfInfoWithTitle'
import { useNavigate, useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getUsersDetailsApi } from '../../api/users.api'
import Preloader from '../../shared/Preloader/Preloader'


const UserDetails =()=>{
    const {id} =useParams()
    const navigate = useNavigate()
    const {data,isLoading,status} =useQuery(['user',id],()=>getUsersDetailsApi(typeof id=='string'?id:'-2'),{
        // enabled:typeof id=='string'?true:false,
        refetchOnWindowFocus:false
    })

    return (
        <div className='userdetails__container'>
            <div className='user_details_goback__container' onClick={e=>{
                navigate('/users')
            }}>
                <img src={leftarrow} alt="" />
                <p>Back to Users</p>
            </div>
            <Preloader loading={isLoading} />
            <div className="user_details_main_nav_container">
                <h2>User Details</h2>
                <div>
                    <Button styleType='danger'>Blacklist User</Button>
                    <Button styleType='green'>Activate User</Button>

                </div>
            </div>
            <br />
            <br />
            <br />

            <Pane style={{'position':'relative','paddingBottom':'60px'}}>
               <div className='user_intro_container'>
                    <div className="user_intro_container__user_image_container">
                        <img src={data?.profile.avatar} alt="" />
                    </div>
                     <div className='user_intro'>
                        <div className='user_intro_detail_container'>
                            <h2>{data?.profile.firstName} {data?.profile.lastName}</h2>
                            <p>{data?.accountNumber}</p>
                        </div>
                        <div className="standing_line"></div>
                            <div className="user_intro_detail_container">
                                <p style={{'marginBottom':'.4rem'}}>User’s Tier</p>
                                <div style={{'transform':'translateX(-16px)'}}>
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                <img src={Star} alt="" />
                                </div>
                            </div>
                        <div className="standing_line"></div>
                        
                        <div className='user_intro_detail_container'>
                            <h2>{data?.profile.currency}{data?.accountBalance}</h2>
                            <p>9912345678/Providus Bank</p>
                        </div>
                     </div>
             </div> 

             {/* <div className="user_info_tabs_container"> */}
                <div className='user_info_tabs_container__links'>
                <p className='active'>General Details</p>
                <p>Documents</p>
                <p>Bank Details</p>
                <p>Loans</p>
                <p>Savings</p>
                <p>App and System</p>

                </div>
             {/* </div> */}
            </Pane>
            <br />
            <br />
            <Pane>
                <br />
                <br />
                <UserListOfInfoWithTitle
                heading='Personal Information'
                info={[
                    {
                        'heading':'full Name',
                        'value':`${data?.profile.firstName} ${data?.profile.lastName}`
                    },
                    {
                        'heading':'Phone Number',
                        'value':`${data?.profile.phoneNumber}`
                    },
                    {
                        'heading':'Email Address',
                        'value':`${data?.email}`
                    },
                    {
                        'heading':'Bvn',
                        'value':`${data?.profile.bvn}`
                    },
                    {
                        'heading':'Gender',
                        'value':`${data?.profile.gender}`
                    },
                    {
                        'heading':'Marital status',
                        'value':'Single'
                    },
                    {
                        'heading':'Children',
                        'value':'None'
                    },
                    {
                        'heading':'Type of residence',
                        'value':`${data?.profile.address}`
                    },
                ]}
                />
                <br />
                <br />
                <UserListOfInfoWithTitle
                heading='Education and Employment'
                info={[
                    {
                        'heading':'level of education ',
                        'value':`${data?.education.level}`
                    },
                    {
                        'heading':'employment status',
                        'value':`${data?.education.employmentStatus}`
                    },
                    {
                        'heading':'Duration of employment',
                        'value':`${data?.education.duration}`
                    },
                    {
                        'heading':'office email',
                        'value':`${data?.education.officeEmail}`
                    },
                    {
                        'heading':'Monthly income',
                        'value':`${data?.education.monthlyIncome}`
                    },
                    {
                        'heading':'loan repayment',
                        'value':`${data?.education.loanRepayment}`
                    },

                ]}
                />
                <br />
                <br />
                <UserListOfInfoWithTitle
                heading='Socials'
                info={[
                    {
                        
                    'heading':'Twitter',
                    'value':`${data?.socials.twitter}`
                    },
                    {
                        
                        'heading':'Facebook',
                        'value':`${data?.socials.facebook}`
                        },
                        {

                        'heading':'Instagram',
                        'value':`${data?.socials.instagram}`
                        },
                ]}
                />
        <br /><br />
        <UserListOfInfoWithTitle
                heading='Guarantor'
                info={[
                    {
                        
                        'heading':'full Name',
                        'value':`${data?.guarantor.firstName} ${data?.guarantor.lastName}`
                        },
                        {
                    
                        'heading':'Phone Number',
                        'value':`${data?.guarantor.phoneNumber} ${data?.guarantor.lastName}`
                        },
                        {
                    
                            'heading':'Phone Number',
                            'value':`${data?.guarantor.phoneNumber} ${data?.guarantor.lastName}`
                            },
                            
                        {

                        'heading':'Email Address',
                        'value':'null'
                        },
                        {
                    
                            'heading':'Relationship',
                            'value':`null`
                            },
                ]}

                />
            </Pane>
        </div>  
    )
}
export default UserDetails
import leftarrow from '../../assets/leftarrow.svg'
import Button from '../../shared/Button/Button'
import Pane from '../../shared/Pane/Pane'
import uservector from '../../assets/uservector.svg'
import Star from '../../assets/start (1).svg'
import './userDetails.syle.scss'


const UserDetails =()=>{

    return (
        <div className='userdetails__container'>
            <div className='user_details_goback__container'>
                <img src={leftarrow} alt="" />
                <p>Back to Users</p>
            </div>

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
                        <img src={uservector} alt="" />
                    </div>
                     <div className='user_intro'>
                        <div className='user_intro_detail_container'>
                            <h2>Grace Effiom</h2>
                            <p>LSQFf587g90</p>
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
                            <h2>₦200,000.00</h2>
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
        </div>  
    )
}
export default UserDetails
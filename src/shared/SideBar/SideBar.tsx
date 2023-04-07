
import {BsHouse} from 'react-icons/bs'
import './SideBar.style.scss'

import React from 'react';
import { NavLink } from 'react-router-dom';
import {HiUsers} from 'react-icons/hi'
import {TbMoneybag} from 'react-icons/tb'
import {FaHandshake} from 'react-icons/fa'
import {FaMoneyBillWave} from 'react-icons/fa'
import {FaUserAlt,FaListAlt,FaPeopleArrows} from 'react-icons/fa'
import {ImPriceTag} from 'react-icons/im'
import {GoSettings} from 'react-icons/go'
import {RiProductHuntLine} from 'react-icons/ri'
import {MdSavings} from 'react-icons/md'
import {GrTransaction} from 'react-icons/gr'
import {GrServicePlay} from 'react-icons/gr'
import {CgTranscript} from 'react-icons/cg'
import {HiDocumentReport} from 'react-icons/hi'


type Prop = {
    heading?:string;
    listLink:{
        name:string;
        link:string
        icon:any
    }[],
    style?:React.CSSProperties
}
const SideBarGroup = ({heading,listLink,style={}}:Prop):React.ReactElement=>{
    return (
        <ul className="sidebar_links_group" style={style}>
        {
            heading?
            <p>{heading}</p>:''
        }

        {
            listLink.map((data,index)=>(
                <li className="sidebar_links" >
                <NavLink
                to={data.link}
                //  className='active'
                 >  
                    {data.icon}
                    {data.name}
                </NavLink>
                </li>
            ))
        }
            
        </ul>

    )
}
const SideBar =  ():React.ReactElement=>{
    return (
        <div className="sidebar__container">
            {/* <p className="org_switcher">Switch Organization</p> */}
        
           <SideBarGroup
           listLink={[{
            'icon':<BsHouse/>,
            'name':'Dashboard',
            'link':''
           }]}
           style={{'marginBottom':'15px'}}
           />

           <SideBarGroup
           heading='CUSTOMERS'
           listLink={[{
            'icon':<HiUsers/>,
            'name':'Users',
            'link':'/users'
           },
           {
            'icon':<HiUsers/>,
            'name':'Guarantors',
            'link':''
           },
           {
            'icon':<TbMoneybag/>,
            'name':'Loans',
            'link':''
           },
           {
            'icon':<FaHandshake/>,
            'name':'Decision Models',
            'link':''
           },
           {
            'icon':<FaMoneyBillWave/>,
            'name':'Savings',
            'link':''
           },
           {
            'icon':<FaMoneyBillWave/>,
            'name':'Loan Requests',
            'link':''
           },
           {
            'icon':<FaUserAlt/>,
            'name':'Whitelist',
            'link':''
           },
           {
            'icon':<FaUserAlt/>,
            'name':'Karma',
            'link':''
           },
        ]}
        style={{'marginBottom':'20px'}}
           />

<SideBarGroup
           heading='BUSINESSES'
           listLink={[{
            'icon':<FaPeopleArrows/>,
            'name':'Organization',
            'link':''
           },
           {
            'icon':<RiProductHuntLine/>,
            'name':'Loan Products',
            'link':''
           }
           ,
           {
            'icon':<MdSavings/>,
            'name':'Savings Products',
            'link':''
           },
           {
            'icon':<BsHouse/>,
            'name':'Fees and Charges ',
            'link':''
           },
           {
            'icon':<GrTransaction/>,
            'name':'Transactions ',
            'link':''
           },
           {
            'icon':<GrServicePlay/>,
            'name':'Services ',
            'link':''
           },
           {
            'icon':<FaUserAlt/>,
            'name':'Service Account ',
            'link':''
           },
           {
            'icon':<CgTranscript/>,
            'name':'Settlements',
            'link':''
           },
           {
            'icon':<HiDocumentReport/>,
            'name':'Reports',
            'link':''
           },
        ]}
        style={{'marginBottom':'20px'}}

           /> 
           
<SideBarGroup
           heading='SETTINGS'
           listLink={[

            {
                'icon':<GoSettings/>,
                'name':'Preferences',
                'link':''
               },

               {
                'icon':<ImPriceTag/>,
                'name':'Fees and Pricing',
                'link':''
               },
               {
                'icon':<FaListAlt/>,
                'name':'Audit Logs',
                'link':''
               },
           ]}/>
        </div>

    )
}
export default SideBar
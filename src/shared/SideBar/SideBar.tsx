
import {BsHouse} from 'react-icons/bs'
import './SideBar.style.scss'
import React from 'react';
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
                <a href=""
                //  className='active'
                 >  
                    {data.icon}
                    {data.name}
                </a>
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
            'icon':<BsHouse/>,
            'name':'Users',
            'link':''
           },
           {
            'icon':<BsHouse/>,
            'name':'Guarantors',
            'link':''
           },
           {
            'icon':<BsHouse/>,
            'name':'Loans',
            'link':''
           },
           {
            'icon':<BsHouse/>,
            'name':'Decision Models',
            'link':''
           },
           {
            'icon':<BsHouse/>,
            'name':'Savings',
            'link':''
           },
           {
            'icon':<BsHouse/>,
            'name':'Loan Requests',
            'link':''
           },
           {
            'icon':<BsHouse/>,
            'name':'Whitelist',
            'link':''
           },
           {
            'icon':<BsHouse/>,
            'name':'Karma',
            'link':''
           },
        ]}
        style={{'marginBottom':'20px'}}
           />

<SideBarGroup
           heading='BUSINESSES'
           listLink={[{
            'icon':<BsHouse/>,
            'name':'Organization',
            'link':''
           },
           {
            'icon':<BsHouse/>,
            'name':'Loan Products',
            'link':''
           }
           ,
           {
            'icon':<BsHouse/>,
            'name':'Savings Products',
            'link':''
           }
        ]}
           /> 
        </div>

    )
}
export default SideBar
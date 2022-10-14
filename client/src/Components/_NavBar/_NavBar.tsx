
import React,{useContext,useRef} from 'react'

import {_Navbar,__NavIcon,__NavIcon_v,__NavIcon_v0} from './_nav_styled'
import {BsMusicNoteBeamed} from 'react-icons/bs'
import {AiOutlineHome,AiOutlineHeart} from 'react-icons/ai'
import {NavLink,Route,Routes} from 'react-router-dom'
import _Home from '../_Home/_Home'
import _Myfavorites from '../_Myfavorites/_Myfavorites';




export const _NavBar:React.FC=()=>{




return (
<>
<_Navbar>
<__NavIcon><BsMusicNoteBeamed fontSize='2em'/></__NavIcon>


<NavLink className={({isActive})=> isActive ? '_Active _nav_link' : '_nav_link'}  to='/' end>
<__NavIcon_v0><AiOutlineHome fontSize='2em'/></__NavIcon_v0>
</NavLink>


<NavLink className={({isActive})=> isActive ? '_Active _nav_link' : '_nav_link'}   to='/Myfavorites/Songs'>
<__NavIcon_v><AiOutlineHeart fontSize='2em'/></__NavIcon_v>
</NavLink>



</_Navbar>
</>
)

}
export const _NavBarRoutes=()=>{



    return (
<Routes>
<Route path='/' element={<_Home/>} />
<Route path='/Myfavorites/Songs' element={<_Myfavorites/>} />
</Routes>



    
    )




}




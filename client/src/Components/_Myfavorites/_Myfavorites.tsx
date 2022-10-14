

import React,{useState,useEffect,useLayoutEffect} from 'react'
import { _SongsCtx } from './../../data/_Songs_data'
import {_SongInfo_interFace,_SongInfo_interFace_toLoop} from './../../_InterFaces/_v0'
import _PlayerControls from '../_PlayerControls/_PlayerControls';



import { 
_Div_P_IS
} from './_Myfavorites_styled'
import { 
_Img_r_Icon ,
_Input_search,
_Song_isSelected,
_Song_isNotSelected
} from '../_Home/_Home_styled'

import {AiOutlineHeart} from 'react-icons/ai'
import {BsPlayFill,BsPause} from 'react-icons/bs'

export default function _Myfavorites() {

return (
<div className='col-11'>
<div className='container-fluid'>
<div className='row'>
<_Myfavorites_Content/>
</div>
</div>
</div>
)
}


const _Myfavorites_Content=()=>{
  const _Songs:any=_SongsCtx()
  const {_PlaySong,_PauseSong,_remove_fromMyFavorites}=_PlayerControls()
  const [_SongsE,SetNewSongsE]=useState([])
const [_k,setNewk]=useState(false)

useEffect(()=>{
setNewk(!_k)
},[_Songs.state])
useLayoutEffect(()=>{
SetNewSongsE(_Songs.state.filter((x:_SongInfo_interFace_toLoop)=>x.isFavorite===true))
},[_k])

const _OnPlay=()=>{
let _e=document.querySelector('.rhap_play-pause-button') as HTMLButtonElement | null
if(_e !== null)_e?.click()
}
const _OnPause=()=>{
let _e=document.querySelector('.rhap_play-pause-button') as HTMLButtonElement | null
if(_e !== null) _e?.click()
}

let onPlaySong=(_SongId:(number | undefined))=>{
_PlaySong(_SongId)
if(_Songs.state.filter((x:_SongInfo_interFace_toLoop)=>x.isSelected==true).length > 0  )_OnPlay()
}
let onPauseSong=(_SongId:(number | undefined))=>{
_PauseSong(_SongId)
if(_Songs.state.filter((x:_SongInfo_interFace_toLoop)=>x.isSelected==true).length > 0  ) _OnPause()
}


const _SongsLoop=_SongsE.map((x:_SongInfo_interFace_toLoop):JSX.Element=>{
return (
<div className='_div_h_s_i_rT' key={x._song_name+x._id}>
<div className='_div_s_info_v0'>
{ x.isSelected ? 
<_Song_isSelected>
{x.Played ? <BsPause/> : <BsPlayFill/> }
</_Song_isSelected> 
: <_Song_isNotSelected></_Song_isNotSelected> 
}
<img className='_img_s__i_g' src={x._song_img}/>
<div className='_m_i_d_l'>
<div className='_d_d_u_i_s_n75332'>{x._song_name}</div>
<div className='_d_f_d_i_f' >{x._singer}</div>
</div>
</div>






<div className='_div_s_info_v1'>

<div className='_d_h_f_i_e _iMy_F_iS' onClick={(e)=> _remove_fromMyFavorites(x._id)} >
<AiOutlineHeart className='_Icon_H_F_i'/>
</div> 


{
x.isSelected==false 
?
<div className='_d_h_f_i___f_t_or_p'  onClick={(e)=>onPlaySong(x._id)}>
<BsPlayFill className='_Icon_H_F_i'/>
</div>
: <> 
{x.Played 
?  
<div className='_d_h_f_i___f_t_or_p _i_s_v_532552' onClick={(e)=>onPauseSong(x._id)}>
<BsPause className='_Icon_H_F_i'/>
</div>
:
<div className='_d_h_f_i___f_t_or_p  _i_s_v_532552' onClick={(e)=>onPlaySong(x._id)}>
<BsPlayFill className='_Icon_H_F_i'/>
</div>

} </>

}




</div>



</div>
)
})




return ( 
<div className=' col-12 mt-5 _div__l_c'>
<_Div_P_IS>
<p className="p_t_g_t_f_">My Favorites Songs</p>
{_SongsLoop}
<>{
!_SongsLoop.length && 
<div className='_g_n_f_f_n'>You Don't have any favorite <span>music</span></div>
}</>

</_Div_P_IS>
</div>
)


}




import React,{useState,useEffect,useLayoutEffect, FormEvent} from 'react'
import ReactDOM from 'react-dom/client';
import _ImgICon_rr from './../../_static/girl-listening-music-5325078-4443153.png'
import { 
_Img_r_Icon ,
_Input_search,
_Div_P_IS,
_Song_isSelected,
_Song_isNotSelected
} from './_Home_styled'

import { BiSearch} from 'react-icons/bi'
import { _SongsCtx } from './../../data/_Songs_data'
import {_SongInfo_interFace,_SongInfo_interFace_toLoop,Src_Img} from './../../_InterFaces/_v0'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsPlayFill,BsPause} from 'react-icons/bs'
import _PlayerControls from '../_PlayerControls/_PlayerControls';


export default function _Home() {
const _Songs:any=_SongsCtx()
return (
<div className='col-11'>
<div className='container-fluid'>
<div className='row'>
<_left_container _SongsC={_Songs} />
<_right_container/>
</div>
</div>
</div>
)
}

type Prpos={_SongsC:any};
const _left_container:React.FC<Prpos>=({_SongsC})=>{
const _Songs=_SongsC;
const {_PlaySong,_PauseSong,_Add_toMyFavorites,_remove_fromMyFavorites}=_PlayerControls()
const [_SongsE,SetNewSongsE]=useState([])
const [_k,setNewk]=useState(false)
const [_inputval,setNewinputval]=useState("")
useEffect(()=>{
if(!_inputval.length){
setNewk(!_k)
}else{
const qeury=new RegExp('^' +_inputval,'i')
const resalt=_SongsE.filter((x:_SongInfo_interFace_toLoop)=>{
return qeury.test(x._song_name)
});
resalt.length ? SetNewSongsE(resalt) :SetNewSongsE([])


}
},[_inputval])




useLayoutEffect(()=>{
SetNewSongsE(_Songs.state)
},[_Songs.state,_k])

useEffect(()=>{
setNewk(!_k)
},[])


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
<div className='_div_h_s_i_r' key={Math.random()}>
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

{x.isFavorite == true ?
<div className='_d_h_f_i_e _iMy_F_iS' onClick={(e)=> _remove_fromMyFavorites(x._id)} >
<AiOutlineHeart className='_Icon_H_F_i'/>
</div> 
: 
<div className='_d_h_f_i_e'  onClick={(e)=> _Add_toMyFavorites(x._id)} >
<AiOutlineHeart className='_Icon_H_F_i'/>
</div>

}


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

const InputOnChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
setNewinputval(e.target.value)
}




return (
<div className=' col-8 mt-5 _div__l_c'>
<div className='_div_h_i_f'>
<div className='_d_m_66322'><BiSearch className='_icon_search_ii'/></div>
<_Input_search className='form-control'  placeholder='Search for Songs' onChange={(e:React.ChangeEvent<HTMLInputElement>)=>InputOnChange(e)}  />
</div>
<_Div_P_IS>

<>{
!_inputval.length   
? 
<>
<p className='p_t'>POPULAR</p>
<div className='p_t_g'>Popular PlayList From Yanni</div>
</>
: 
<div className='p_t_g' style={{marginBlock:"2rem"}}>Search Resalt</div>



}</>



<div>
{_SongsLoop}
<>{
!_SongsLoop.length && 
<div className='_g_n_f'>!! Sorry No music named <span>{_inputval}</span></div>
}</>
</div>

</_Div_P_IS>
</div>
)
}

const _right_container:React.FC=()=>{



return (
<div className=' col-4 _div__r_c'>
<div>
<_Img_r_Icon src={_ImgICon_rr}/>
</div>
</div>
)
}





import React from 'react'
import {useLocation} from 'react-router-dom'
import AudioPlayer  from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import '../../_static/_Player.css'
import { _SongsCtx } from './../../data/_Songs_data'
import {_SongInfo_interFace_toLoop} from './../../_InterFaces/_v0'
import _PlayerControls from '../_PlayerControls/_PlayerControls';
import { _CustomIcons } from './_custom_Icon'

export default function _Player() {
const _location=useLocation()
const _Songs:any=_SongsCtx()
const _Song_v0=_Songs.state[0]
const isSelected=_Songs.state.filter((x:_SongInfo_interFace_toLoop)=>x.isSelected==true)
const {_PlaySong,_PauseSong,_PlayNextSong,_PlayPreviousSong,
_PlayNextSong_v1,
_PlayPreviousSong_v1
}=_PlayerControls()



let _SongsFavorites=_Songs.state.filter((x:_SongInfo_interFace_toLoop)=>x.isFavorite==true);
let isSelected_v1=_SongsFavorites.filter((x:_SongInfo_interFace_toLoop)=>x.isSelected==true)




return (
<>
{_location.pathname=='/'  ? (
<>
<div className=' _d_f_c_D_4863217'>
{isSelected.length ? 
<>
{isSelected[0].Played ? 
<div className='_d_v_h_r_r7434753'><img className='_img_s_i_p img_animation' src={isSelected[0]?._song_img}/> </div> :
<div className='_d_v_h_r_r7434753'><img className='_img_s_i_p img_animation' src={isSelected[0]?._song_img}/> </div>
}
</>
:  
<div className='_d_v_h_r_r7434753'><img  className='_img_s_i_p'  src={_Song_v0?._song_img}/> </div>   
}


{isSelected.length  ? 
<>
{
isSelected[0].Played==true ?
<AudioPlayer   src={isSelected[0]?._song_src} onPlay={(e)=>_PlaySong(isSelected[0]?._id)} onPause={()=>_PauseSong(isSelected[0]?._id)} 
autoPlay 
showSkipControls={true}
onClickNext={()=>_PlayNextSong(isSelected[0]?._id)} 
onClickPrevious={()=>_PlayPreviousSong(isSelected[0]?._id)} 
preload={'none'}
customIcons={_CustomIcons}
/>
: 
<AudioPlayer  className='rhap_play-status--paused'  src={isSelected[0]?._song_src} onPlay={(e)=>_PlaySong(isSelected[0]?._id)} onPause={()=>_PauseSong(isSelected[0]?._id)} 
autoPlay 
showSkipControls={true} 
onClickNext={()=>_PlayNextSong(isSelected[0]?._id)} 
onClickPrevious={()=>_PlayPreviousSong(isSelected[0]?._id)} 
preload={'none'}
customIcons={_CustomIcons}
/> 



}
</>


:  
<AudioPlayer src={_Song_v0?._song_src} onPlay={(e)=>_PlaySong(_Song_v0?._id) }  onPause={()=>_PauseSong(_Song_v0?._id) } 
showSkipControls={true} 
autoPlayAfterSrcChange={false}   
preload={'none'}
customIcons={_CustomIcons}
/> 
}



</div>
</>

):(

<>
<div className=' _d_f_c_D_4863217'>

{_SongsFavorites.length &&
<>
{ isSelected_v1.length ? 
<>
{isSelected_v1[0].Played ? 
<div className='_d_v_h_r_r7434753'><img className='_img_s_i_p img_animation' src={isSelected_v1[0]?._song_img}/> </div> :
<div className='_d_v_h_r_r7434753'><img className='_img_s_i_p img_animation' src={isSelected_v1[0]?._song_img}/> </div>
}
</>
:  
<div className='_d_v_h_r_r7434753'><img  className='_img_s_i_p'  src={_SongsFavorites[0]?._song_img}/> </div>   
}


{isSelected_v1.length  ? 
<>
{
isSelected_v1[0].Played==true ?
<AudioPlayer   src={isSelected_v1[0]?._song_src} onPlay={(e)=>_PlaySong(isSelected_v1[0]?._id)} onPause={()=>_PauseSong(isSelected_v1[0]?._id)} 
autoPlay 
showSkipControls={_SongsFavorites.length > 1 ? true : false  }
onClickNext={()=>_PlayNextSong_v1(isSelected_v1[0]?._id)} 
onClickPrevious={()=>_PlayPreviousSong_v1(isSelected_v1[0]?._id)} 
preload={'none'}
customIcons={_CustomIcons}
/>
: 
<AudioPlayer  className='rhap_play-status--paused'  src={isSelected_v1[0]?._song_src} onPlay={(e)=>_PlaySong(isSelected_v1[0]?._id)} onPause={()=>_PauseSong(isSelected_v1[0]?._id)} 
autoPlay 
showSkipControls={_SongsFavorites.length > 1 ? true : false  }
onClickNext={()=>_PlayNextSong_v1(isSelected_v1[0]?._id)} 
onClickPrevious={()=>_PlayPreviousSong_v1(isSelected_v1[0]?._id)} 
preload={'none'}
customIcons={_CustomIcons}
/> 



}
</>


:  
<AudioPlayer src={_SongsFavorites[0]?._song_src} onPlay={(e)=>_PlaySong(_SongsFavorites[0]?._id) }  onPause={()=>_PauseSong(_SongsFavorites[0]?._id) } 
showSkipControls={false} 
autoPlayAfterSrcChange={false}   
preload={'none'}
customIcons={_CustomIcons}
/> 
}

</>

}


</div>
</>
) 
}

</>

)
}

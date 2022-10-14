



import React  from  'react'
import { _SongsCtx } from './../../data/_Songs_data'
export default function _PlayerControls() {
const {dispatch}:any=_SongsCtx();
const __LocalStorage=JSON.parse(localStorage.getItem('favorites_songs') ||  '[]' )

const _PlaySong=(_id:number | undefined)=>{
(document.querySelector('._img_s_i_p') as HTMLImageElement ).style.animationPlayState='running' 
dispatch({type:'on_playsong',payload:[{_id:_id}]})

}
const _PauseSong=(_id:number | undefined)=>{
(document.querySelector('._img_s_i_p') as HTMLImageElement ).style.animationPlayState='paused' 
dispatch({type:'on_pausesong',payload:[{_id:_id}]})
}
const _PlayNextSong=function(_id:number | undefined){
dispatch({type:'on_playnextsong',payload:[{_id:_id}]})
}
const _PlayPreviousSong=function(_id:number | undefined){
dispatch({type:'on_playprevioussong',payload:[{_id:_id}]})
}

const _Add_toMyFavorites=(_id:number | undefined)=>{
const _ids=[...__LocalStorage,_id]
localStorage.setItem('favorites_songs',JSON.stringify(_ids))
dispatch({type:'_add_tomyfavorites',payload:[{_id:_id}]})
}

const _remove_fromMyFavorites=(_id:number | undefined)=>{
localStorage.setItem('favorites_songs',JSON.stringify( __LocalStorage.filter((x:number)=>x!==_id) ))
dispatch({type:'_remove_fromfavorites',payload:[{_id:_id}]})
}


const _PlayNextSong_v1=function(_id:number | undefined){
dispatch({type:'on_playnextsong_v1',payload:[{_id:_id}]})
}
const _PlayPreviousSong_v1=function(_id:number | undefined){
dispatch({type:'on_playprevioussong_v1',payload:[{_id:_id}]})
}


const _controls={
_PlaySong:_PlaySong,
_PauseSong:_PauseSong,
_PlayNextSong:_PlayNextSong,
_PlayPreviousSong:_PlayPreviousSong,
_Add_toMyFavorites:_Add_toMyFavorites,
_remove_fromMyFavorites:_remove_fromMyFavorites,
_PlayNextSong_v1:_PlayNextSong_v1,
_PlayPreviousSong_v1:_PlayPreviousSong_v1
}

return _controls
}

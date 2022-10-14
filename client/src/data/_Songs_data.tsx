


import  React,{useReducer,useState,useEffect,Fragment, Reducer,useRef,createContext,useContext,useLayoutEffect}  from 'react';
import {useLocation} from 'react-router-dom'
import {_SongInfo_interFace,Action_InterFace,_SongInfo_interFace_toLoop} from '../_InterFaces/_v0'
import axios from 'axios'
import _Myfavorites from '../Components/_Myfavorites/_Myfavorites';
import _songsData from './songs_info';


type _R={
children:JSX.Element
_axios_key:boolean
}

const __localStorage=JSON.parse(localStorage.getItem('favorites_songs') || '[]')



let initialState:_SongInfo_interFace=[]
type _G=_SongInfo_interFace & Action_InterFace
const Songs_ContentText=createContext<_G | {}>({});




const _reducer:Reducer<_SongInfo_interFace,Action_InterFace>=(state,Action):any=>{

switch(Action.type){
case '_songs_stotaged' :
return  [...state,...Action.payload];
case '_r_d_543364222' :
state.map((x)=>{
x.isSelected=false
x.Played=false
})
return [...state];
case 'on_playsong': 
state.map((x)=>{
if(x._id==Action.payload[0]._id){
x.isSelected=true
x.Played=true
}else{
x.isSelected=false
x.Played=false
}
})
return [...state];
case 'on_pausesong': 
state.map((x)=>{
if(x._id==Action.payload[0]._id){
x.Played=false
}
})
return [...state];
case 'on_playnextsong': 
let _newItam:_SongInfo_interFace_toLoop;
const _itam_index=state.findIndex((x)=>x._id==Action.payload[0]._id) + 1 
let _checkItam=(_itam_index > state.length || _itam_index===state.length )   ? _newItam=state[0] :   _newItam=state[_itam_index]
state.map((x)=>{
if(x._id==_newItam._id){
x.isSelected=true
x.Played=true
}else{
    x.isSelected=false
    x.Played=false
}
})
return [...state];
case 'on_playprevioussong': 
let _newItam_p:_SongInfo_interFace_toLoop;
const _itam_index_p=state.findIndex((x)=>x._id==Action.payload[0]._id) - 1 
let _checkItam_p=(_itam_index_p < 0  )   ? _newItam_p=state[0] :   _newItam_p=state[_itam_index_p]
state.map((x)=>{
if(x._id==_newItam_p._id){
x.isSelected=true
x.Played=true
}else{
x.isSelected=false
x.Played=false
}
})
return [...state];
case '_add_tomyfavorites': 
state.map((x)=>{
if(x._id==Action.payload[0]._id){
x.isFavorite=true;
}
})
return [...state];
case '_remove_fromfavorites': 
state.map((x)=>{
if(x._id==Action.payload[0]._id){
x.isFavorite=false;
}
})
return [...state];
case 'on_playnextsong_v1': 
let _newItam_v2:_SongInfo_interFace_toLoop;
let _Myfavorites=state.filter((x)=>x.isFavorite==true)
const _itam_index_v2=_Myfavorites.findIndex((x)=>x._id==Action.payload[0]._id) + 1 
let _checkItam_v2=(_itam_index_v2 > _Myfavorites.length || _itam_index_v2===_Myfavorites.length )   ? _newItam_v2=_Myfavorites[0] :   _newItam_v2=_Myfavorites[_itam_index_v2]
state.map((x)=>{
if(x._id==_newItam_v2._id){
x.isSelected=true
x.Played=true
}else{
x.isSelected=false
x.Played=false
}
})
return [...state];
case 'on_playprevioussong_v1': 
let _newItam_p_v3:_SongInfo_interFace_toLoop;
let _Myfavorites_v1=state.filter((x)=>x.isFavorite==true)
const _itam_index__v3=_Myfavorites_v1.findIndex((x)=>x._id==Action.payload[0]._id) - 1 
let _checkItam_p_v3=(_itam_index__v3 < 0  )   ? _newItam_p_v3=_Myfavorites_v1[0] :   _newItam_p_v3=_Myfavorites_v1[_itam_index__v3]
state.map((x)=>{
if(x._id==_newItam_p_v3._id){
x.isSelected=true
x.Played=true
}else{
x.isSelected=false
x.Played=false
}
})
return [...state];




default: return state;
}



}

const _SongInfo:React.FC<_R>=({children,_axios_key} )=>{
const [state,dispatch]=useReducer(_reducer,initialState)
let _Key_stotaged=useRef<boolean>(true)
const _Location=useLocation();

useEffect(()=>{
if(_Location.pathname=='/Myfavorites/Songs') dispatch({type:'_r_d_543364222',payload:[{_id:0}]})
},[_Location.pathname])



useLayoutEffect(()=>{
async  function _Songs(){
try{
const _SongInfo=await axios.get('http://localhost:8080/_api/songs')
if(_Key_stotaged.current==true){
_Key_stotaged.current=false;
let _data=_SongInfo.data.map((x:_SongInfo_interFace_toLoop)=>{
x.isFavorite=__localStorage.includes(x._id)
return x;
})
dispatch({type:'_songs_stotaged',payload:_data})
}
}catch(err){
return false;
}
}


if(_axios_key==true){
_Songs()
}else{
if(_Key_stotaged.current==true){
_Key_stotaged.current=false;
let _data=_songsData.map((x:_SongInfo_interFace_toLoop)=>{
x.isFavorite=__localStorage.includes(x._id)
return x;
})
dispatch({type:'_songs_stotaged',payload:_data})
}
}


},[])





let _value:{
state:_SongInfo_interFace; dispatch: React.Dispatch<Action_InterFace>
}={
state:state,
dispatch:dispatch,
}


return (
<>
<Songs_ContentText.Provider value={_value}>
{children}
</Songs_ContentText.Provider>

</>
)

}


export const  _SongsCtx=()=>{
const __Songs_Controls=useContext(Songs_ContentText)
return __Songs_Controls
}





export  default _SongInfo;



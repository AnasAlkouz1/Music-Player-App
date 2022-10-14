


export type _SongInfo_interFace={
_id:number,
_song_src:string,
_song_name:string,
_song_img:string,
isSelected:boolean,
Played:boolean,
Pause:boolean,
_singer:string,
isFavorite?:boolean,
}[]
export type _SongInfo_interFace_toLoop={
_id?:number,
_song_src?:string,
_song_name:string,
_song_img:string,
isSelected:boolean,
Played:boolean,
Pause:boolean,
_singer:string,
isFavorite?:boolean,
}


export interface Action_InterFace {
type:string,
payload:{
_id?:number,
_song_src?:string,
_song_name?:string,
_song_img?:string,
isSelected?:boolean,
Played?:boolean,
Pause?:boolean,
_singer?:string,
isFavorite?:boolean,
}[],
}

export type _SongsContext_interFace=_SongInfo_interFace&Action_InterFace;


export const  Src_Img='../../..'

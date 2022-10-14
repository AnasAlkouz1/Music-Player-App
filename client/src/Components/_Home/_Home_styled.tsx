

import styled from 'styled-components'


export const  _Img_r_Icon=styled.img`
width: 360px;
height: 500px;
object-fit: contain;
margin-top:5rem;
`
export const _Input_search=styled.input`
width: 18rem;
margin-left: 1rem;
border-radius: 50rem;
background-color: transparent;
border: 0;
padding-left: 45px;
font-size: 14px;
height: 40px;


:focus{
    border-color: #E28c97  !im;
    box-shadow: 0 0 0 .25rem rgb(226,140,151,.25);
}



`


export const  _Div_P_IS=styled.div`
margin-top: 1rem;
margin-left:1rem;
background-color: transparent;
height: 400px;
overflow-y: auto;
`

export const _Song_isSelected=styled.div`
min-width: 50px;
height: 50px;
background-color: #d6e5fa;
position: relative;
opacity: 0.8;
border-radius: 50rem;
left: 18px;

& > svg{
margin-left: 10px;
font-size: 2em;
margin-top: 9px;
}
`
export const _Song_isNotSelected=styled.div`
min-width: 50px;
height: 50px;
background-color: transparent;
position: relative;
opacity: 0.8;
border-radius: 50rem;
left: 18px;
`




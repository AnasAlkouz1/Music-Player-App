


import React,{useRef} from "react";
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './_static/_main.css'
import _SongInfo from "./data/_Songs_data";
import {_NavBar,_NavBarRoutes} from './Components/_NavBar/_NavBar'
import _Player from "./Components/Player/_Player";



const _AppComponents=()=>{

return (
    <>
<div className='container'>
<div className='row'>
<div className='col-1 mt-5' >
<div className='d-flex'>
<div className='_div_nav_s me-4'>
<_NavBar/>
</div>  
</div>



</div>
<_NavBarRoutes/>

</div>

</div>
<_Player/>
</>
)
}


function App() {

//FIXME:If you want to use the project with the NodeJs server, change the value to true 
const Axios_Key=useRef<boolean>(false)
return (
<>
<_SongInfo _axios_key={Axios_Key.current}>
<_AppComponents/>
</_SongInfo>
</>
);
}


export default App;

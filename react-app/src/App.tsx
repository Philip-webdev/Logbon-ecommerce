import './App.css'
import { useState } from 'react';
import { BsFillBellFill } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { BsList } from 'react-icons/bs';
import { BsCamera } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';
import search from './search.tsx';


function App() {

const [first, setSecond] = useState({src: 'http://127.0.0.1:8080/public/FILIEKEU_Men_Smart_Watch_for_Android_iOS__Bluetooth_Calls_Voice_Chat_with_Heart_Rate_Sleep_Monitor_Fitness_Tracker__1_3__Full_Touch_Screen_IP67_Waterproof_Stainless_Steel_Activity_Tracker_for_Men-remo.png',
   src1:'http://localhost:8080/public/Vintage_CONTAX_G2_BLACK_Autofocus_Rangefinder_Camera_w__Zeiss_Planar_T__45mm_f_2_lens-removebg-preview.png', src2: 'http://localhost:8080/public/ECOVACS_Deebot_T10_Plus_Robot_Vacuum_Cleaner_-_White__1_-removebg-preview.png' }); // original elements
const [second] = useState({src:'', src1: '', src2:''}); //new element 1
//{first}
//const dblclick =()=>{ // when the user double clicks, the below renders.
  //setFirst({src:'http://127.0.0', src1:'', src2:''}) //set the div back to the previous state. the filepath above is written again here.
//}
const [firstBut] = useState({second}); // new element 1
// const onclick = ()=>{  
  //{firstBut}
//}
const cat1 = 'Other Tech';
const cat2 = 'HVACs';
  return (
    <>
  <div className='All'>
     <div className='header' style={{background:'whitesmoke', borderBottomLeftRadius:'25px', borderBottomRightRadius:'25px', height:'50px'}}>
     <div>
      <img style={{borderRadius:'100%', borderWidth:'5px', borderStyle:'groove', borderColor:'pink', marginTop:'15px', zoom:'9%', marginLeft:'50px'}} src= 'http://127.0.0.1:8080/public/philip.jpg'/></div>
     <div className='notification' style={{marginTop:'15px', marginLeft:'77%'}}><BsFillBellFill /></div>
     <div className='menu' style={{marginTop:'15px', marginRight:'10px'}}><BsList /></div>
     </div>
     <br></br>
     <br></br>
    <div className='follow-up'>Diagnosing made <br></br>easy
      with our AI</div>

     <br></br>
     <br></br>
     <div style={{justifySelf: 'center', margin:'auto', width: '50%'}}>{search()}</div>
<br></br>
     <div className='category' style={{fontWeight:'900px'}}><b>Choose <br></br>a category</b><br></br>
     <br></br>
     <input type='button'  style={{background: '#6C5FA7', color:'whitesmoke', borderRadius:'3px', borderColor:'none', borderStyle:'none'}} onClick = {()=>{{setSecond({src:'http://127.0.0.1:8080/public/FILIEKEU_Men_Smart_Watch_for_Android_iOS__Bluetooth_Calls_Voice_Chat_with_Heart_Rate_Sleep_Monitor_Fitness_Tracker__1_3__Full_Touch_Screen_IP67_Waterproof_Stainless_Steel_Activity_Tracker_for_Men-remo.png', src1:'http://localhost:8080/public/Vintage_CONTAX_G2_BLACK_Autofocus_Rangefinder_Camera_w__Zeiss_Planar_T__45mm_f_2_lens-removebg-preview.png', src2:'http://localhost:8080/public/ECOVACS_Deebot_T10_Plus_Robot_Vacuum_Cleaner_-_White__1_-removebg-preview.png'})}}}  value={cat1} />
     <input type='button' value={cat2}  onClick= {()=>{{setSecond({src:'http://localhost:8080/public/3_electrodom%C3%A9sticos_en_los_que_s%C3%AD_vale_la_pena_invertir_el_aguinaldo-removebg-preview.png', src1:'http://localhost:8080/public/Portable_Air_Conditioner-5200mAh_Rechargeable_Personal_Air_Cooler_with_3_Speeds_Duration_5-10_hrs__Quiet_Mini_Air_Conditioner_Fan__Desk_Cooling_Fan_for_Home__Bedroom__Travel__and_Office-removebg-previ.png', src2:'http://localhost:8080/public/Portable_Humidifier_Air_Cooler_-_Black-removebg-preview.png'})}}}  style={{marginLeft:'5px', color:'whitesmoke', background: 'rgb(21, 148, 223)', borderRadius:'3px', borderColor:'none', borderStyle:'none' }}/>
     <br></br>
     <br></br>
     <div className='swipe'  style={{display:'flex', position:'relative',flexWrap:'wrap', zoom: '50%',justifyContent:'space-around'}}>
      <div className='pdtdiv' style={{background:'rgb(255, 123, 77)', width:'300px', borderRadius:'20px',height:'400px'}}>
        <img src={first.src} style={{zoom:'55%', justifySelf:'center', marginLeft:'5%', marginTop:'30%'}}/></div>
      <div  className='pdtdiv' style={{background: '#6C5FA7', width:'300px', borderRadius:'20px',height:'400px'}}>
        <img src={first.src1} style={{zoom:'55%',  justifySelf:'center', marginLeft:'5%',marginRight:'5%', marginTop:'20%'}}/></div>
      <div  className='pdtdiv' style={{background:'ORANGE', width:'300px', borderRadius:'20px',height:'400px'}}>
        <img src={first.src2}  style={{zoom:'55%', justifySelf:'center', marginLeft:'5%', marginTop:'20%'}}/></div>
      </div> 
     </div>
    <div className='nav' style={{ width:'100%',bottom:'0', margin:'0', borderRadius:'7px', position:'absolute', display:'flex', justifyContent:'center', background:'whitesmoke'}}>
    <div className='comment' style={{marginTop:'10px', marginBottom:'10px'}}><BsChat style={{color:'black'}}/></div> 
<div className='camera-trigger' style={{marginTop:'10px', marginBottom:'10px'}}><a href = 'http://127.0.0.1:8080/public/AiScript.html'><BsCamera style={{bottom:'0.5', marginLeft:'100px', color:'black'} }/></a></div>
<div className='history'  style={{marginTop:'10px', marginBottom:'10px'}}><BsBookmark style={{marginLeft:'100px', color:'black'}}/></div>
</div>

     </div>
     
     </>
 
  );
}

export default App

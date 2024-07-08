
import './App.css'


import { BsSearch } from 'react-icons/bs';

 export default function search(){
  
    return(
        <>
        <div style={{background:'whitesmoke', display:'flex', zoom:'100%', width:'fit-content', borderRadius: '5%'}}>
            <input placeholder="Find possible solutions..."  style={{marginLeft:'5px', height: '40px', border: 'none', fontWeight:'900px', background:'whitesmoke', borderRadius:'7%', marginTop:'5px'}}/> 
            <button style={{height:'50px', marginTop:'5px', width:'70px', border: 'none', background:'none', borderRadius:'10%', marginRight: '25px', paddingBottom:'10px'}}><BsSearch style={{zoom:'300px', width:'72px',marginLeft:'35px'}}/></button>
        </div>
        </>
    );
   
} 


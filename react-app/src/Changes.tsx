import { useState } from "react";

export default function  Changes(){

const [first, setSecond] = useState({scr: 'http://127.0.0.1:8080/public/FILIEKEU_Men_Smart_Watch_for_Android_iOS__Bluetooth_Calls_Voice_Chat_with_Heart_Rate_Sleep_Monitor_Fitness_Tracker__1_3__Full_Touch_Screen_IP67_Waterproof_Stainless_Steel_Activity_Tracker_for_Men-remo.png',
    scr1:' ', scr2: ' '});
 const [second, setThird] = useState({scr3: ' ', scr4:' ', scr5: ' '});
 
 
  const changeOne = ()=> setSecond({scr: 'boy', scr1:'', scr2: ''});
 const changeTwo = ()=> setThird({scr3: 'boy', scr4:'', scr5: ''});
 
}
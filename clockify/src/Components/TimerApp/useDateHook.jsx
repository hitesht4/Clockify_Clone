import React,{useState,useEffect} from 'react';

const useDateHook = () => {
    const [clock,setClock]=useState(new Date());

  useEffect(()=>{
    let time=setInterval(()=>{
       setClock(new Date());
    },1000);
    return ()=>clearInterval(time);
  })

  return {
    hours:clock.getHours(),
    minutes:clock.getMinutes(),
    seconds:clock.getSeconds(),
    day:clock.getDay()
  }
}

export default useDateHook;
import React,{useState,useEffect} from 'react';

const useTime = () => {
    const [clock,setClock]=useState(new Date());

  useEffect(()=>{
    let time=setInterval(()=>{
       setClock(new Date());
    },1000);
    return ()=>clearInterval(time);
  })

  return {
    hours2:clock.getHours(),
    minutes2:clock.getMinutes(),
    seconds2:clock.getSeconds(),
  }
}

export default useTime;
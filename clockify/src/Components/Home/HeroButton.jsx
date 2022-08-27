import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Styles/Header.module.css';
const HeroButton = ({label,router}) => {
  const navigate=useNavigate();
  const handleClick=()=>{
    if(router){
      navigate(router);
    }
  }
  return (
    <div>
        <button className={styles.Herobutton} onClick={handleClick}>
           {label}
        </button>
    </div>
  )
}
export default HeroButton
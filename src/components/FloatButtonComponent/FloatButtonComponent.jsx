import React, {useState} from 'react'; 
import { ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import c from './FloatButtonComponent.module.scss';

export const FloatButtonComponent = () => {
  const [visible, setVisible] = useState(false) 

  const indent = 1000;

  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > indent){ 
      setVisible(true) 
    } 
    else if (scrolled <= indent){ 
      setVisible(false) 
    } 
  }; 

  const scrollToTop = () =>{ 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
  }; 

  window.addEventListener('scroll', toggleVisible); 

  return ( 
    <Button
      onClick={scrollToTop}
      icon={<ArrowUpOutlined />}
      style={{display: visible ? 'inline' : 'none'}}
      className={c.floatButton}
    />
  ); 
}

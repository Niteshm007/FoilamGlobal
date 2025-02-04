import React, { useEffect } from 'react';
import './Home.css';
import Carasoul from '../../Carasole/Carasole';
import OurProducts from './OurProducts/OurProducts'
import Who from './Who We Are/Who';
import Why from './Why/Why';
import HContact from './HContact/HContact';
import IFocus from './IFocus/IFocus';


export default function Home() {
  // useEffect(() => {
  //   // Smoothly scroll to the top of the page
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // }, []);

  return (
    <div className="Home Ovr-hd m-tb">
      <div className="row">
        <div className="carasol">
          <Carasoul/>
        </div>
        <div className="row"></div>
        <OurProducts />
        <Who />
        <Why/>
        <IFocus/>
        <HContact />
      </div>
    </div>
  );
}
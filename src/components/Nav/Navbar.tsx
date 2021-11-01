import React, { FC } from "react";
import {useHistory} from 'react-router-dom';
import {ENavState} from '../../types/ENavState';
type NavbarProps = {
    showNav: ENavState,
    setShowNav:(navState:ENavState) => void

};

export const Navbar: FC<NavbarProps> = ({showNav, setShowNav}) => {

const history = useHistory();
function handleNavigate(navigationString:string):void{
    console.log("pushing")
    history.push(navigationString);
    setShowNav(ENavState.HIDDEN);
}
  return (
    <div
      className={
          showNav === ENavState.SHOWN
          ?
          "fixed h-full w-32 fixed bg-gray-50 top-0 right-0 flex flex-col items-start pl-10 pt-16 space-y-5 transition-right"
          :
          "fixed h-full w-32 fixed bg-gray-50 top-0 -right-44 flex flex-col items-start pl-10 pt-16 space-y-5 transition-right"
          
        }
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex" onClick={e => handleNavigate("/")}>Home</div>
      <div className="flex" onClick={e => handleNavigate("/Work")}>Work</div>
      <div className="flex" onClick={e => handleNavigate("/Vita")}>Vita</div>
      <div className="flex" onClick={e => handleNavigate("/Contact")}>Contact</div>
    </div>
  );
};

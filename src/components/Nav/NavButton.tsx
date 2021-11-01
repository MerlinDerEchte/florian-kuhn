import React, { FC } from "react";
import { ENavState } from "../../types/ENavState";

type NavButtonProps = {
  showNav: ENavState;
  setShowNav: (showNavVal:ENavState) => void;
};

export const NavButton: FC<NavButtonProps> = ({ showNav, setShowNav }) => {
  const s: number = 0;
  const toggleNav = (event: React.MouseEvent<HTMLElement>):void => {
      event.stopPropagation();
      if(showNav === ENavState.SHOWN){
          setShowNav(ENavState.HIDDEN);
      }else{
          setShowNav(ENavState.SHOWN);
      }
  }
  return (
    <div className={
        showNav === ENavState.SHOWN
        ?
        "fixed top-0 right-20 h-8 w-12 flex flex-col justify-center items-center space-y-1 z-10 transition-right delay-100"
        :
        "fixed top-0 right-3 h-8 w-12 flex flex-col justify-center items-center space-y-1 z-10 transition-right delay-100"
    
        }
        onClick = {(event: React.MouseEvent<HTMLElement>) => toggleNav(event)}
    >
      <div className="w-8 h-0.5 bg-gray-400 rounded"></div>
      <div className="w-7 h-0.5 bg-gray-400 rounded"></div>
      <div className="w-8 h-0.5 bg-gray-400 rounded"></div>
    </div>
  );
};

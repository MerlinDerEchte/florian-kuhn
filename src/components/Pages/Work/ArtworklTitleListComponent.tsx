import React, { ReactElement, FC, useEffect, useState } from "react"; // importing FunctionComponent

interface titleProps {
    titles: string[]
}

export const ArtworkTitleListComponent: FC<titleProps> = ({titles}) => {
  const scrollToItem = (item: string) => {
    document.getElementById(item)?.scrollIntoView({block: "start", behavior: "smooth"});
  };
  return (
    <aside className="flex-initial w-1/4">
      <div className=" flex flex-col justify-start items-start space-y-3">
        {titles.map((title:string, index:number) => {
          return (<>
            <div onClick={(e) => scrollToItem(title)} className="flex-1 flex w-full flex-col space-y-3 cursor-pointer text-xl">
              <span className="flex-1">{title}</span>
              {index < titles.length -1 ?
            <hr className="flex-initial w-4/5 gray-900" />
            :
            ''}
            </div>
            
            </>
          );
        })}
      </div>
    </aside>
  );
};

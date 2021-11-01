import React, {createContext, useContext} from 'react';

type ScreenWidthContextType = {
    screenWidth: number;
}
export const ScreenWidthContext = React.createContext<ScreenWidthContextType>({screenWidth:1000});

export const useScreenWidthContext = () => useContext(ScreenWidthContext);

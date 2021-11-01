import React, { ReactElement, FC } from 'react'; // importing FunctionComponent

interface IPageProps {
    title: string
}

export const PageComponent: FC<IPageProps> = ({ title, children }) => {

    return(
            <article className="flex-1 w-full text-xs font-mono flex flex-col overflow-hidden ">
                {children}
            </article>
    )
}
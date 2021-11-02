import React, { ReactElement, FC } from 'react'; // importing FunctionComponent

interface IPageProps {
    title: string
}

export const PageComponent: FC<IPageProps> = ({ title, children }) => {

    return(
            <article className="flex-1 h-full w-screen text-xs font-mono flex flex-col overflow-hidden pl-5 pt-10">
                {children}
            </article>
    )
}
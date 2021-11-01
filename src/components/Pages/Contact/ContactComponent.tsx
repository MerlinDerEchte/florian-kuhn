import React, { ReactElement, FC, useEffect, useState } from "react"; // importing FunctionComponent
import { PageComponent } from "../PageComponent";
import { makeStyles, Theme } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme:Theme) => ({
    instagramIcon : {
        fontSize: 80
    }
}))


export const ContactComponent: FC<any> = () => {

    const classes = useStyles();

    return(
        <PageComponent title="Contact">
            <div className="flex flex-col py-5 justify-evenly space-y-6 px-10">
                <section>Email: scarab@posteo.de</section>
                <section >
                    <InstagramIcon className={classes.instagramIcon}  />
                </section>
                <section>
                    <h2>Impressum und Datenschutz</h2>
                    <p>asdsadsadsadsadsasdasd sadsadsadf asdsad asd sad asdsdads ad sad sa as fasfgasgawg asg asg asg sg sa </p>
                </section>
               
            </div>
        </PageComponent>
    )
}   

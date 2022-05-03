import React from 'react';
import RightMenuText from './RightMenuText';
import './RightMenu.css'

export default function RightMenu() {
    return(
        <div className = "site-menu">
            <RightMenuText name={"backoffice"}/>
            <RightMenuText name={"perfil"}/>
            <RightMenuText name={"sair"}/>
        </div>
    )
}
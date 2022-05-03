import React from 'react';
import BackOfficeMenuText from './BackOfficeMenuText';
import './BackOfficeMenu.css'

export default function BackOfficeMenu() {
    return(
        <div className='backoffice-menu'>
            <BackOfficeMenuText name={"Pedidos"}/>
            <BackOfficeMenuText name={"Usuários"}/>
            <BackOfficeMenuText name={"Refeições"}/>
            <BackOfficeMenuText name={"Categorias de Refeição"}/>
        </div>
    )
}
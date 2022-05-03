import React from 'react';
import TableTitleText from './TableTitleText';
import './TableTitle.css'

export default function TableTitle() {
    return(
        <thead>
            <tr>
                <TableTitleText name = {"Nome"}/>
                <TableTitleText name = {"Email"}/>
                <TableTitleText name = {"Cadastro em"}/>
                <TableTitleText />
            </tr>
        </thead>
    )
}
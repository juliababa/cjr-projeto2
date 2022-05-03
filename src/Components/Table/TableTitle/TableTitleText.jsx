import React from 'react';
import './TableTitle.css'

export default function TableTitleText(props) {
    return(
        <th className='table-title-tex'>{props.name || ''}</th>
    )
}
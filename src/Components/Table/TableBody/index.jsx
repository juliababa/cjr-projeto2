import React from 'react';
import Button from './Button';
import './styles.css'

export default function TableBody(props){
    const {clients, deleteClient} = props
    

    function renderTable(){
        return clients.map((cliente) => {
            return(
                <tr key={cliente.id}>
                    <td>{cliente.first_name + " " + cliente.last_name}</td>
                    <td>{cliente.email}</td>
                    <td>{cliente.created_at}</td>
                    <td className='actions-buttons'>
                        <Button edit text = "editar"/>
                        <Button clienteId={cliente.id} onClick={deleteClient} delete text = "excluir"/>
                    </td>
                </tr>
            )
        })
    }

    return(
        <tbody>
            {renderTable()}
        </tbody>
    )
}
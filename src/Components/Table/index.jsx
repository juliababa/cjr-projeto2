import React, { useEffect, useState } from 'react';
import './styles.css'
import TableBody from './TableBody';
import Pagination from './TableBody/Pagination';
import TableTitle from './TableTitle';
import users from '../../mockdata';

function initialClients(){
    return users.slice(0, 5)
}

export default function Table() {
    const [clients, setClientes] = useState(users)
    const [totalClients, setTotalClients] = useState()
    const [currentPage, setCurrentPage] = useState(1)

    const clientsPerPage = 5

    function deleteClient(id){
       const newClientes = clients.filter(cliente => cliente.id !== id)

       setClientes(newClientes)
    }

    function getCurrentClientsPage(){
        const firstIndex = clientsPerPage * (currentPage - 1)
        const currentClients = clients.slice(firstIndex, firstIndex + 5)

        return currentClients
    }

    function getTotalPages(){
        return Math.ceil(clients.length / clientsPerPage)
    }

    function nextPage(){
        if(currentPage === getTotalPages()){
            setCurrentPage(1)
        }else{
            setCurrentPage(currentPage + 1)
        }
    }

    function previousPage(){
        if(currentPage === 1){
            setCurrentPage(getTotalPages())
        }else{
            setCurrentPage(currentPage -1)
        }
    }

    useEffect(() => {
        setTotalClients(clients.length)
    }, [clients])

    return (
        <main>
            <table>
                <TableTitle/>
                <TableBody clients={getCurrentClientsPage()} deleteClient={deleteClient}/>
            </table>

            <Pagination 
                totalPages={getTotalPages()} 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage} 
                nextPage={nextPage} 
                previousPage={previousPage}/>
        </main>
    )
}
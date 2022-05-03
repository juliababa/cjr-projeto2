import React, { useState } from 'react';
import './Pagination.css'

export default function Pagination(props){
    const {
        totalPages, 
        currentPage, 
        setCurrentPage, 
        nextPage, 
        previousPage
    } = props

    function renderPagination(){
        return [...Array(totalPages)].map((_, index) => {
            return(
            <button 
                className={currentPage === index + 1 ? 'active' : false} 
                onClick={() => {
                    setCurrentPage(index+1)
                }}>
                
                {index+1}
            </button>
            ) 
        })
    }

    return(
        <div className='pagination'>
            <button onClick={() => previousPage()}>{'<<'}</button>
            {renderPagination()}
            <button onClick={() => nextPage()}>{'>>'}</button>
        </div>
    )
}
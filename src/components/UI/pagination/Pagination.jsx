import React from 'react'
import { usePagination } from '../../../hooks/usePagination'

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
    const pagesArray = usePagination(totalPages)
    return (
        <div className='pages-wrapper'>
            {pagesArray.map(p =>
                <span
                    key={p}
                    onClick={() => setCurrentPage(p)}
                    className={p === currentPage ? 'page current' : 'page'}>
                    {p}
                </span>)
            }
        </div>
    )
}

export default Pagination

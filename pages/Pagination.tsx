import React from "react";


const Pagination = ({data, pageHandler}) => {

    let pageNumbers = []
    for (let i=1; i< Math.ceil(data.length/10)+1; i++){
        pageNumbers.push(i)

    }
    return (
        <div>

            <center>
                {pageNumbers.map(page => <span className="flex-container" onClick={()=> pageHandler(page)}>{page}</span>)}
            </center>

        </div>
    )
}

export default Pagination;
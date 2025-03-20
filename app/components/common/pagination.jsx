export default function Pagination({currentPage,totalPages, goToNextPage, goToPreviousPage}){
  return(

    <div className="page-cont-body-footer">
      <h5 onClick={goToPreviousPage} style=
        {{
          cursor: currentPage > 1 ? "pointer": "not-allowed",
          color: currentPage > 1 ? "" : "#ffffff40"
        }}>
        Previous
      </h5>

      <h5 onClick={goToNextPage} style=
        {{
          cursor: currentPage < totalPages ? "pointer" : "not-allowed",
          color: currentPage < totalPages ? "" : "#ffffff40"
        }}>
        Next
      </h5>
    </div>

  )
}
"use client"

import { useState } from "react"

export default function usePagination(data = [], itemsPerPage = 5){
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length/itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const goToNextPage =()=>{
    if(currentPage < totalPages ) setCurrentPage((prev)=>prev + 1)
  };

  const goToPreviousPage =()=>{
    if(currentPage > 1)setCurrentPage((prev)=>prev -1)
  };

  return{currentData, currentPage, totalPages, goToPreviousPage, goToNextPage}
  

}
import React, { useEffect, useState } from 'react'
import {fetcharticlesPagination} from "../../services/articleservice"
const Listarticles = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [articles, setArticles] = useState([]);
  
  const fetchProducts = async (page) => {
    try {
      const res = await fetcharticlesPagination(page,5)
      const { articles, totalPages } = res.data;
      setArticles(articles);
      setTotalPages(totalPages);
      console.log(res.data.articles)
    } catch (error) {
      console.log(error);
    }
  };
 useEffect(() => {
    
    fetchProducts(currentPage);
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div>
      {articles.map((art,index)=>{
        <tr key={index}>
          <td>{art.reference}</td>
        </tr>
      })}
    </div>
  )
}

export default Listarticles

import React, { useEffect, useState } from 'react';
import { getApi } from '../../core/services/api/getApi';
import NewsCard from '../../components/Common/NewsCard';

function News() {
  const [newsList, setNewsList] = useState([]);


  const getNewsData = async()=>{
    const response=await getApi('/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC', "news")
setNewsList(response);
console.log(response);
}

useEffect(() => {
  getNewsData();
}, [])


  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">اخبار</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {newsList.map(news => (
        <NewsCard item={news} />
        ))}
      </div>
    </div>
  );
}

export default News;
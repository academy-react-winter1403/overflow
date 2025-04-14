import React, { useEffect, useState } from 'react';
import { getApi } from '../../core/services/api/getApi';

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
          <div
            key={news.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 bg-gray-100 flex items-center justify-center">
              {news.currentImageAddressTumb && news.currentImageAddressTumb !== 'null' ? (
                <img
                  src={news.currentImageAddressTumb.replace(/\\/g, '')}
                  alt={news.title}
                  className="object-cover h-full w-full"
                />
              ) : (
                <span className="text-gray-400">بدون تصویر</span>
              )}
            </div>
            <div className="p-4 text-right">
              <h2 className="text-lg font-semibold mb-2">{news.title}</h2>
              <p className="text-sm text-gray-600 mb-4">{news.miniDescribe}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>👁 {news.currentView}</span>
                <span>❤️ {news.currentLikeCount}</span>
                <span>👎 {news.currentDissLikeCount}</span>
              </div>
              <div className="text-xs mt-2 text-gray-400">
                توسط {news.addUserFullName} در{' '}
                {new Date(news.insertDate).toLocaleDateString('fa-IR')}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
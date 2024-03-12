import React from 'react'

const newsHeadlines = [
  { headline: 'React 18 Released', date: '2023-04-01' },
  { headline: 'Tailwind 3.0 Takes Over', date: '2023-04-05' },
  { headline: 'Lucide Icons - A New Choice', date: '2023-04-10' }
]

const NewsAside = () => {
  return (
    <aside className='w-64 bg-white shadow-md rounded-lg overflow-hidden'>
      <h3 className='text-2xl font-bold text-gray-900 p-5 border-b'>Latest News</h3>
      <ul>
        {newsHeadlines.map((news, index) => (
          <li key={index} className='p-4 hover:bg-gray-50'>
            <div>
              <p className='text-gray-900 font-semibold'>{news.headline}</p>
              <p className='text-sm text-gray-600'>{news.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default NewsAside

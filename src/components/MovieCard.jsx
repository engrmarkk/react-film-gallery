import React from 'react'

const MovieCard = ({ movie: { title, poster_path, vote_average } }) => {
    return (
        <div className='bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer group'>
            {/* Image container */}
            <div className='relative overflow-hidden bg-gray-700 h-80'>
                <img
                    src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                    alt={title}
                    className='w-full h-full object-cover group-hover:brightness-75 transition-all duration-300'
                />

                {/* Gradient overlay */}
                <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                {/* Rating badge - refined */}
                <div className='absolute top-4 right-4 bg-yellow-400 text-black px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1 shadow-md'>
                    <img src="./star.png" alt="star" className='w-4 h-4' />
                    {vote_average.toFixed(1)}
                </div>
            </div>

            {/* Content */}
            <div className='p-5'>
                <h3 className='text-base font-bold text-white truncate group-hover:text-yellow-400 transition-colors duration-200 mb-2'>
                    {title}
                </h3>

                {/* Rating with star */}
                <div className='flex items-center gap-2'>
                    <img src="./star.png" alt="star" className='w-4 h-4' />
                    <span className='text-yellow-400 text-sm font-semibold'>
                        {vote_average.toFixed(1)}/10
                    </span>
                </div>

                <p className='text-gray-400 text-xs mt-3'>
                    {vote_average > 7 ? '⭐ Highly Rated' : vote_average > 5 ? '👍 Good' : '📌 Popular'}
                </p>
            </div>
        </div>
    )
}

export default MovieCard
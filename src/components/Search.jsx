import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className='flex items-center mx-auto justify-center lg:py-6'>
            <div className='relative w-full max-w-md border border-gray-500'>
                <img
                    src="./search.png"
                    alt="Search"
                    className='absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5'
                />
                <input
                    type="text"
                    placeholder="Search movies"
                    className='w-full pl-10 pr-4 py-2 rounded-md border-none text-white focus:outline-none'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            {/*    add cancel icon */}
            {/*    if there is text, show cancel icon */}

                {searchTerm && (
                    <p className='absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer' onClick={() => setSearchTerm('')}>
                        <img src="./cancel.png" alt="Cancel" className='w-5 h-5' />
                    </p>
                )}
            </div>
        </div>
    )
}

export default Search

import React from 'react'

const Cards= ({info}) => {
    return (
        <>
            <div className='flex flex-col md:flex-row items-center  w-full  lg:h-[20rem] lg:px-14  overflow-hidden py-2 mt-3'>
                <div className="imagecontainer w-1/2 overflow-hidden">
                    <img src={info.download_url} alt="" />
                </div>
                <div className="detailscontainer text-black flex justify-start items-center px-8">
                    <div className='flex flex-col gap-2 items-center md:items-start'>
                        <h1>Author: <span>{info.author}</span></h1>
                        <h1>Image Resolution: <span>{info.width} x {info.height}</span></h1>
                     <div>
                     <a href={info.download_url} download className='bg-purple-700 text-white px-2 py-1' >Download</a>
                     </div>
                    </div>
                </div>
            </div>

 
        </>
    )
}

export default Cards
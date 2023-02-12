import React, { useEffect, useRef, useState,useCallback } from 'react'
import instance from '../Axiosinstance/instance'
import Cards from '../Components/Cards'
import Cardsinvert from '../Components/Cardsinvert'
import Navbar from '../Components/Navbar'
import "./scroll.css"
import InfiniteScroll from 'react-infinite-scroll-component'

const Home = () => {



    const [page,setPage]= useState(0)

    const [data, setData] = useState([])

    const handelInfiniteScroll = async () => {
        try {
          if (
            window.innerHeight + document.documentElement.scrollTop + 1 >=
            document.documentElement.scrollHeight
          ) {
            setPage((prev) => prev + 1);
          }
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
            instance.get(`getdata?page=${page}`).then((response) => {
            console.log(response.data);
            setData([...data,...response.data])
        })
    }, [page])

    useEffect(()=>{
        window.addEventListener("scroll", handelInfiniteScroll);
        return () => window.removeEventListener("scroll", handelInfiniteScroll);
    },[])

    return (
        <div className=''>
            <Navbar />
 

 {
                data.map((eachindex, index) => {
                    if (index % 2 == 0) {
                        return (
                            <Cards info={eachindex} key={index}/>
                        )
                    } else {
                        return (
                            <Cardsinvert info={eachindex} key={index}/>
                        )
                    }
                })
            }

        </div>
    )
}

export default Home
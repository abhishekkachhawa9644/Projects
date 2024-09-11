import React, { useEffect, useState } from "react";
import WallCraftersContext from "./WallCraftersContext";
const WallCraftersState = (props) => {
    const [imageData, setimageData] = useState([])
    const [query, setquery] = useState('london')
    const api_key = "45792649-e1f87d0fa27e76c1f1eba9801"

    useEffect(() => {
     const fetchData = async () =>{
        const api =  await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=100`);
        const data = await api.json();
        console.log(data)
        setimageData(data.hits)
     }
     fetchData();
    }, [query])

    const fetchDataByCategory = async (cat)=>{
      const api =  await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=100`);
        const data = await api.json();
        console.log(data)
        setimageData(data.hits)
    }
    
  return (
    <WallCraftersContext.Provider value={{ imageData , fetchDataByCategory, setquery }}>
      {props.children}
    </WallCraftersContext.Provider>
  );
}; 

export default WallCraftersState;

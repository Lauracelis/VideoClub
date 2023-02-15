import React, {useEffect, useState} from "react";
import axios from "axios";
import Movie from "./Movie";

export default function MovieList() {

  const [dataList, setDataList] = useState([])

  useEffect(() => {
    axios.get('api/_movie/getmovies').then(res => {
      console.log(res.data)
      setDataList(res.data)
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const listmovies = dataList.map(movie => {
  return (
    <div>
      <Movie movie={movie} />
    
    </div>
  );
})

return(
  <div>lista peliculas
  {listmovies}
  </div>
)
}

 

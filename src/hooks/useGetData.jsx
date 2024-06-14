import { useEffect, useState } from "react"


function useGetData() {
    const [data,setData] = useState(null)
    const [error,setError] = useState('')
    console.log(data);
        function getData() {
            
            fetch('../../data.json')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => {setError(error)});
        }
        useEffect(()=>{
            getData()
        },[])
  return [data,error]
}

export default useGetData
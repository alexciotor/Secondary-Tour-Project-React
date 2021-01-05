
 import Content from './content';
 import {useState, useEffect} from 'react'
 import Loading from './loading'
 import Refresh from './refresh'
const url = 'https://course-api.com/react-tours-project'
function App() {
const [data, setData] = useState([])
const [loading, setLoading]=useState(true)
const setTour = (id)=>{
  const newTour = data.filter(item=>{
     if(id !=item.id){
       return item
     }
  
  })
     setData(newTour)
}
console.log(data);
const getData = async()=>{
  try{
  const response = await fetch(url)
  const data =  await response.json()
 setData(data)
 setLoading(false)
  }
  catch(error){
setLoading(false)
console.log(error);
  }
}

useEffect(()=>{
getData()
 
},[])
if(loading){
  return <main>
  <Loading/>
  </main>
}
if(data.length===0){
  return <main>
  <Refresh getData={getData}/>
  </main>
}
  return (
    <section>
 
     <Content data ={data} setTour={setTour} />
     
        </section>
  );
}

export default App;

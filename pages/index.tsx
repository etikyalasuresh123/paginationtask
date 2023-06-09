import React, {useState, useEffect} from 'react';
import axios from 'axios';




import Pagination from './Pagination';



function App() {

  const [data, setData] = useState([]);
  const [perpage, setPerpage] = useState([]);

  useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts').then(
      res => {setData(res.data); setPerpage(res.data.slice(0,10));}
    )
  },[])

  const pageHandler = (pageNumber) => {
    setPerpage(data.slice((pageNumber*10)-10,pageNumber*10));
  }

  return (
    <div className="App">
     
      {data.length>=1?
      <div>
        {perpage.map(post => <div className='post'>{post.id}{post.title}</div>)}<br></br><br></br><br></br>

       <Pagination data = {data} pageHandler={pageHandler}></Pagination>
      </div>
      :
      <p>page not loaded</p>
      }
    </div>
  );
}

export default App;

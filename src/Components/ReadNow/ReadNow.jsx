import React,{useEffect, useState} from 'react'
// import { NavItem } from 'react-bootstrap'

export default function ReadNow() {
  const [news, setNews] = useState([])

  useEffect(() => {    

    fetch("http://localhost:3001/newsdata")
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      setNews(data);
    })
    
  }, [])
  

  return (
    <div className="container">
    <div className="row">
        {
            news.map(item=><div className="card" style={{width: "18rem"}}>
            {/* <img src={item.urlToImage} className="card-img-top" alt="..."/> */}
            <div className="card-body">
              <h5 className="card-title">{item.id} {item.description} {item.url}</h5>
              <a href={item.url} className="btn btn-primary">Read full Description</a>
            </div>
          </div>)
        }
    </div>
   </div>
  )
}

import React, { useState } from 'react';
import axios from 'axios';
function FetchNews() {
    const [news, setNews] = useState([])

    const fetchNews = () => {
        //console.log("clicked");
        axios.get("https://www.bytecodelearners.tech/bytecode_server/api/batch/2020")
            .then((Response) => {
                console.log(Response);
                setNews(Response.data)

            })
    }


    return (
        <>
            <div className="container my-3">
                <div className="row">
                    <div className="col-4">
                        <button className='btn btn-primary' onClick={fetchNews}  >fetchnews</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                {

                    news.map((value,idx) => {
                        return(
                            <div className="col-4" key={idx}>
                            <div className="card" style={{ width: "18rem" }}>
        {/*<img src={"https://www.bytecodelearners.tech/bytecode_server/storage/app/public/"+value.image} className="card-img-top" alt="" />*/}
      <img src={"https://www.bytecodelearners.tech/bytecode_server/storage/app/public/"+value.image} alt={value.first_name} />
                                 <div className="card-body">
                                    <h5 className="card-title">{value.first_name}</h5>
                                    <p className="card-text">{value.mobile_number}</p>
                                    <a href="#" className="btn btn-primary">{value.email}</a>
    
                                </div>
                            </div>
                        </div>
    
                        );
                    })

                }
               






        
                   
                </div>
            </div>

        </>
    )
}

export default FetchNews
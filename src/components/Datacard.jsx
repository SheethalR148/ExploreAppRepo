import React from 'react'
import background from "..\\public\\IMG_20211024_170132.jpg";

export default function Datacard() {
  return (
    <div class="row">
    <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="IMG_20211024_170132.jpg" alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>   
    </div>
    <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="IMG_20211024_170132.jpg" alt="Card image cap"/>
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>   
    </div>
    </div>
    
  )
}

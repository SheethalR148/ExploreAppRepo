import {Link} from 'react-router-dom';
import background from "..\\public\\IMG_20211024_170132.jpg";
function Home() {
    return(
        <div style={{backgroundImage:`url(${background})`,backgroundSize:'cover', padding:'20px', height:'553px', paddingTop:'160px'}}>
            
            <h1 style={{fontFamily:'cursive'}} class="display-3"><b>V-EXPLORE</b></h1>
            <h3>Explore virtually and create your bucket-list!!!</h3>
            <button type='button' class="btn btn-dark" style={{width:'100px'}}>
                <Link to='/places'>Start</Link>
            </button>           

        </div>
    );
}
export default Home;
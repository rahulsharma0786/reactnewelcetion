import{Link, Outlet} from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <div id="topmainu">
    <ul>
        <li>
        <Link to="/">Home</Link>
        </li>
        
        <li>
        <Link to="display">Display</Link>
        </li>
        
        
        </ul>
       </div>
       
       <div id="middata">
       <Outlet/>
       </div>
    
        
        </>
    )
    
    }
    export default Layout
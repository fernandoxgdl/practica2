import { Link, Outlet } from "react-router-dom";

export function Mujeres(){
    return(
        <header>
            <h1>Mujeres</h1>
              
     
        <nav>
            <Link to="/">Home</Link><br />
            <Link to ="/Hombres">Ropa de Hombres</Link><br />
        </nav>
        <Outlet /> 
        </header>
        
    )
}
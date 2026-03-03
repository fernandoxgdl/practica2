import { Link, Outlet } from "react-router-dom";

export function Home(){
    return(
        <header>
            <h1>Home</h1>
                   
     
        <nav>
            <Link to="Hombres">Hombres</Link><br />
            <Link to ="Mujeres">Mujeres</Link><br />
        </nav>
        
        <Outlet /> 
        </header>

        
    );
}
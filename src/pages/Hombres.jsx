import { Link, Outlet } from "react-router-dom";
export function Hombres(){
    return(
         <header>
            <h1>Hombres</h1>
        <nav>
            
            <Link to ="/">Home</Link><br />
            <Link to="/Mujeres">Ropa de mujer</Link><br />
        </nav>
        <Outlet /> 
        </header>
    );
}
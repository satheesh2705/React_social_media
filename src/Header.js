import { useContext } from 'react';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import DataContext from './context/DataContext';

const Header = ({ title}) => {
  const {width} = useContext(DataContext)
    return (
        <header className="Header">
            <h1 
           style={{ color:"white" }}
            
            >{title}</h1>
            {width < 768 ? <FaMobileAlt 
            style={{ color:"white" }}
            />
                : width < 992 ? <FaTabletAlt 
           style={{ color:"white" }}
                
                />
                    : <FaLaptop 
            style={{ color:"white" }}
                    
                    />}
        </header>
    )
}

export default Header
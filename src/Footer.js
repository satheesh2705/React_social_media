import { useContext } from "react";
import DataContext from "./context/DataContext";

const Footer = () => {
    const {posts} = useContext(DataContext)
    const today = new Date();
    return (
        <footer className='Footer'
        style={{ color:"white" }}
        >
            <p>{`Post Length is : ${posts.length}`}</p>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default Footer
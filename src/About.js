import { Link } from 'react-router-dom';


const About = () => {
    return (
        <main className='About'>
            <h2>About</h2>
            
            <a href='mrsatheesh2705@gmail.com'><p>Gmail:SATHEESH S</p></a>
            <Link to="http://www.linkedin.com/in/satheeshsaravanan/"><p>Linkeedin:Satheesh</p> </Link>
            <Link to="https://github.com/satheesh2705/"><p>Github:satheesh2705</p></Link>
             <p>
                Mobile No: 6383591766
             </p>
            
            <p>Instagram:mr_black</p>
            <p style={{ marginTop: "1rem" }} >Hi, I am Satheesh, From Kallai, Together lets make and get free education for everyone in the world </p>
        </main>
    )
}

export default About
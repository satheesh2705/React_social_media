import { Link } from "react-router-dom"

const Missing = () => {
    return (
        <main className='Missing'>
            <h2>Page Not Found</h2>
            <p>Well, that's disappointing.</p>
            <Link to="/">
            <p>
                Visit Our Homepage
            </p>
            </Link>
        </main>
    )
}

export default Missing
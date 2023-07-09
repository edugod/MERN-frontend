import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Eduardo Lange Repairs!</span></h1>
            </header>
            <main className="public__main">
                <p>Located in Beautiful Downtown Vera Cruz City, Eduardo Lange Repairs provides a trained staff ready to meet your tech repair needs.</p>
                <address className="public__addr">
                    Eduardo Lange Repairs<br />
                    Rua Tiradentes 618<br />
                    Vera Cruz, BR 12345<br />
                    <a href="tel:+15555555555">+51 (51) 99730-8699</a>
                </address>
                <br />
                <p>Owner: Eduardo Lange</p>
            </main>
            <footer>
                <Link to="/login">Employee Login</Link>
            </footer>
        </section>

    )
    return content
}
export default Public
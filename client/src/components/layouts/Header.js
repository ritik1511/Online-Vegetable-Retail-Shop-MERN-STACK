
import logo from '../../images/logo.jpg'
import { NavLink, Link } from 'react-router-dom'
import { ImCart } from 'react-icons/im'
import { useAuth } from '../../context/auth'
import { toast } from 'react-hot-toast'
import { Toaster, ToastBar } from "react-hot-toast"
import SearchInput from '../Form/SearchInput'
import useCategory from '../../hooks/useCategory'
import { useCart } from '../../context/Cart'
import { Badge } from 'antd'
const Header = () => {
    const [auth, setAuth] = useAuth()
    const [cart] = useCart()
    const categories = useCategory()
    const handleLogout = () => {
        setAuth({
            ...auth, user: null, token: ''
        })
        localStorage.removeItem('auth')
        toast.success('LoggedOut Successfully',)
    }
    return (
        <>
            <Toaster>
                {(t) => (
                    <ToastBar
                        toast={t}
                        style={{
                            ...t.style,
                            animation: t.visible ? 'custom-enter 10s ease' : 'custom-exit 10s ease',
                        }}
                    />
                )}
            </Toaster>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <img src={logo} className='navbar-logo' />
                        <Link to='/' className="navbar-brand" href="#">VeggieHub</Link>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <SearchInput />
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link" aria-current="page" href="#">Home</NavLink>
                            </li>
                            {!auth?.user ? (
                                <li className="nav-item">
                                    <NavLink to='/login' className="nav-link" aria-current="page" href="#">Shop</NavLink>
                                </li>
                            ) : (<NavLink to='/shop' className="nav-link" aria-current="page" href="#">Shop</NavLink>)}
                            <li className="nav-item dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    to={"/categories"}
                                    data-bs-toggle="dropdown"
                                >
                                    Categories
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link className="dropdown-item" to={"/categories"}>
                                            All Categories
                                        </Link>
                                    </li>
                                    {categories?.map((c) => (
                                        <li>
                                            <Link
                                                className="dropdown-item"
                                                to={`/category/${c.slug}`}
                                            >
                                                {c.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {!auth?.user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="nav-link">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item dropdown">
                                        <NavLink
                                            className="nav-link dropdown-toggle"
                                            href="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            style={{ border: "none" }}
                                        >
                                            {auth?.user?.name}
                                        </NavLink>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <NavLink
                                                    to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                                                        }`}
                                                    className="dropdown-item"
                                                >
                                                    Dashboard
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    onClick={handleLogout}
                                                    to="/login"
                                                    className="dropdown-item"
                                                >
                                                    Logout
                                                </NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                </>
                            )}
                            <li className="nav-item" style={{ visibility: auth?.user?.role === 1 ? "hidden" : "visible" }}>
                                <Badge count={cart?.length} showZero>
                                    <NavLink to='/cart' className="nav-link crt" href="#"><ImCart /></NavLink>
                                </Badge>
                            </li>

                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header
import './css/Header.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Outlet, Link} from  'react-router-dom';
const Header = () => {

    return (
        <>
        <header className='header'>
            <h1 className='h1'>로고</h1>
                <nav className='nav'>
                    <ul className='ul'>
                        <li>
                        <Link to='/'>홈</Link>
                        </li>
                        <li>
                        <Link to='/vision'>비전</Link>
                        </li>
                        <li>
                        <Link to='/team'>팀 소개</Link>
                        </li>
                        <li>
                        <Link to='/knp'>카앤프 소개</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />       
        </header>
        
        </>
    )
}

export default Header;
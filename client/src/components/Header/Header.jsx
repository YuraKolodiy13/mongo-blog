import './Header.scss'
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Header = () => {

  const isLogin = useSelector(state => state.auth.login);

  return (
    <header className='header'>
      <div className="container header__container">
        <nav className='nav'>
          <Link to='/'>home</Link>
          <ul>
            {isLogin && (
              <li>
                <Link to='/add'>Add</Link>
              </li>
            )}

            <li>
              <Link to='/discover'>Discover</Link>
            </li>
            {!isLogin && (
              <>
                <li>
                  <Link to='/login'>Sign in</Link>
                </li>
                <li>
                  <Link to='/register'>Sign up</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  )
};


export default Header;
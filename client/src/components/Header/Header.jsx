import './Header.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutRequest} from "../../actions/auth";

const Header = () => {

  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.userId);
  const me = useSelector(state => state.auth.me);

  return (
    <header className='header'>
      <div className="container header__container">
        <nav className='nav'>
          <Link to='/'>home</Link>
          <ul>
            <li>
              <Link to='/discover'>Discover</Link>
            </li>
            <li>
              <Link to='/people'>People</Link>
            </li>

            {isLogin
              ? <>
                <li>
                  <Link to='/add'>Add</Link>
                </li>
                <li>
                  <Link to={`/profile/${me._id}`}>{me.name}</Link>
                </li>
                <li>
                  <span onClick={() => dispatch(logoutRequest())}>Logout</span>
                </li>
              </>
              : <>
                <li>
                  <Link to='/login'>Sign in</Link>
                </li>
                <li>
                  <Link to='/register'>Sign up</Link>
                </li>
              </>
            }
          </ul>
        </nav>
      </div>
    </header>
  )
};


export default Header;
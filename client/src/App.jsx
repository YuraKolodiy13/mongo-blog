import {useDispatch, useSelector} from "react-redux";
import Header from "./components/Header/Header";
import 'antd/dist/antd.css';
import './assets/styles/globals.scss'
import Routes from "./routes/Routes";
import {getUserRequest} from "./actions/auth";

const App = () => {

  const userId = useSelector(state => state.auth.userId);
  const dispatch = useDispatch();
  if(userId){
    dispatch(getUserRequest(userId))
  }

  return (
    <div className="App">
      <div className="container">
        <div className="container">
          <Header/>
          <Routes/>
        </div>
      </div>
    </div>
  );
};

export default App;

import {useState} from "react";
import {useDispatch} from "react-redux";
import {addPostRequest} from "./actions/posts";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";
import 'antd/dist/antd.css';
import './assets/styles/globals.scss'
import Discover from "./pages/Discover/Discover";
import Add from "./pages/Add/Add";
import Routes from "./routes/Routes";

const App = () => {

  const dispatch = useDispatch();

  const [state, setState] = useState({
    title: '',
    text: ''
  });

  const onHandleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  };

  const addPost = (e) => {
    e.preventDefault();
    dispatch(addPostRequest(state));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="container">
          <Header/>
          <Switch>
            {/*<Route path="/" component={Homepage} exact />*/}
            <Routes/>

          </Switch>
        </div>
      </div>
    </div>
  );
};

export default App;

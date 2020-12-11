import {useState} from "react";
import {useDispatch} from "react-redux";
import {addPostRequest} from "./actions/posts";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Header from "./components/Header/Header";
import {Route, Switch} from "react-router-dom";

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
      <form onSubmit={addPost}>
        <input type="text" name='title' value={state.title} onChange={onHandleChange}/>
        <input type="text" name='text' value={state.text} onChange={onHandleChange}/>
        <button type='submit'>save</button>
      </form>


      <div className="container">
        <Header/>
        <Switch>
          {/*<Route path="/" component={Homepage} exact />*/}
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>

        </Switch>
      </div>
    </div>
  );
};

export default App;

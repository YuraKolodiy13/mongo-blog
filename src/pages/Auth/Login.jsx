import {useState} from 'react';
import './index.scss'
import Button from "@material-ui/core/Button";
import {useDispatch, useSelector} from "react-redux";
import {loginRequest, resetErrors} from "../../actions/auth";
import {useHistory} from "react-router-dom";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

const Login = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    email: '',
    password: ''
  });


  const submitLogin = () => {
    dispatch(loginRequest(state))
  };

  const submitLoginError = () => {
    dispatch(resetErrors());
  };

  const onHandleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  };

  return (
    <div className='login'>
      <h2 className="heading">Login</h2>
      <ValidatorForm onSubmit={submitLogin} onError={submitLoginError} className='login__form'>
        <div className="login__field modal__field">
          <TextValidator
            value={state.email}
            name='email'
            type="email"
            label='email'
            variant="outlined"
            onChange={onHandleChange}
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </div>
        <div className="login__field modal__field">
          <TextValidator
            value={state.password}
            name='password'
            type='password'
            label='password'
            variant="outlined"
            onChange={onHandleChange}
            validators={['required']}
            errorMessages={['This field is required']}
          />
        </div>
        <Button
          variant="contained"
          type='submit'
          className='button'
        >
          Login
        </Button>
      </ValidatorForm>
    </div>
  )
};

export default Login;
import {useState} from 'react';
import './index.scss'
import Button from "@material-ui/core/Button";
import {useDispatch} from "react-redux";
import {registerRequest} from "../../actions/auth";
import {useHistory} from "react-router-dom";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

const Register = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    email: '',
    password: ''
  });


  const submitLogin = () => {
    dispatch(registerRequest(state))
  };


  const onHandleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value})
  };

  return (
    <div className='login'>
      <h2 className="heading">Register</h2>
      <ValidatorForm onSubmit={submitLogin} className='login__form'>
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
          Register
        </Button>
      </ValidatorForm>
    </div>
  )
};

export default Register;
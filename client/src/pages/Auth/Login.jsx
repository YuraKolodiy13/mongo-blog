import {useState} from 'react';
import './index.scss'
import {useDispatch, useSelector} from "react-redux";
import {loginRequest, resetErrors} from "../../actions/auth";
import {useHistory} from "react-router-dom";
import {Form, Button, Input} from "antd";

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
      <Form onFinish={submitLogin} className='login__form'>
        <div className="login__field modal__field">
          <Form.Item
            name="email"
            onChange={onHandleChange}
            value={state.email}
            rules={[
              {
                required: true,
                type: 'email',
                // message: 'Please input your email!',
              },
            ]}
          >
            <Input name="email" placeholder="Email"/>
          </Form.Item>
        </div>
        <div className="login__field modal__field">
          <Form.Item
            name="password"
            onChange={onHandleChange}
            value={state.email}
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password name="password" placeholder="Password"/>
          </Form.Item>
        </div>
        <Button
          htmlType='submit'
          className='button'
        >
          Login
        </Button>
      </Form>
    </div>
  )
};

export default Login;
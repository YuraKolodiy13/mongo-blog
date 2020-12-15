import {useState} from 'react';
import './index.scss'
import {useDispatch} from "react-redux";
import {registerRequest} from "../../actions/auth";
import {useHistory} from "react-router-dom";
import { Form, Input, Button } from 'antd';

const Register = () => {

  const dispatch = useDispatch();
  const history = useHistory();

  const [state, setState] = useState({
    name: '',
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
      <Form onFinish={submitLogin} className='login__form'>
        <div className="login__field modal__field">
          <Form.Item
            name="name"
            onChange={onHandleChange}
            value={state.name}
            rules={[
              {
                required: true,
                message: 'Please input your name!',
              },
            ]}
          >
            <Input name="name" placeholder="Name"/>
          </Form.Item>
        </div>
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
          Register
        </Button>
      </Form>
    </div>
  )
};

export default Register;
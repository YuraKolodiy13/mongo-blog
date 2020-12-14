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
            label="Email"
            name="email"
            onChange={onHandleChange}
            value={state.email}
            rules={[
              {
                required: true,
                message: 'Please input your email!',
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="login__field modal__field">
          <Form.Item
            label="Password"
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
            <Input.Password />
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
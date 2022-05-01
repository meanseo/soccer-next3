import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { loginRequest, loginCancelled, logoutRequest } from '@/modules/auth/login';
import { Login } from '@/components/auth/Login';

const LoginPage = () => {
  const [login, setLogin] = useState({
    userid: '',
    password: ''
})
const dispatch = useDispatch()
const onChange = e => {
    e.preventDefault()
    const {name, value} = e.target;
    setLogin({...login,[name]: value})
}
const onSubmit = e => {
  e.preventDefault()
  alert(`로그인 정보:`+JSON.stringify(login))
  dispatch(loginRequest(login))
  router.push('/user/profile')
}
  return (
    <Login onChange= {onChange} onSubmit={onSubmit}/>
  );
};

const mapStateToProps = state => ({isLoggined: state.login.isLoggined})
const loginActions = {loginRequest, loginCancelled, logoutRequest}
export default connect(mapStateToProps, loginActions)(LoginPage)
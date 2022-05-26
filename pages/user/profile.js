import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connect } from 'react-redux';
import { loginRequest, loginCancelled, logoutRequest } from '@/modules/auth/login';
import { Profile } from '@/components/user/Profile';
import { Router } from 'react-router-dom';

const ProfilePage = () => {
  const {loginUser} = useSelector(state => state.login)
  return (
    <Profile loginUser={loginUser}/>
  );
};
export default ProfilePage

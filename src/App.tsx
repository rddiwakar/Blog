import React from 'react';
import TopBar from './Components/Topbar/Topbar';
import Home from './Pages/HomePage/HomePage';
import LoginPage from './Pages/LoginPage/Login';
import RegisterPage from './Pages/RegisterPage/Register';
import SinglePost from './Pages/SinglePost/SinglePostPage';
import Settings from './Pages/SettingsPage/SettingPage';
import WritePage from './Pages/WritePage/Write';

import {
  BrowserRouter ,
  Route,
  Routes
} from 'react-router-dom'


function App() {
  const user = false;
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={ <Home />} />   
        <Route path='/login'element={user ? <Home /> : <LoginPage />}/>
        <Route path='/register' element={user ?<Home /> : <RegisterPage />} />
        <Route path='/settings' element={user ? <Settings /> : <LoginPage />} />
        <Route path='/write' element={ user ? <WritePage /> : <LoginPage />} />
        <Route path='/singlePost/:postId' element={user ? <SinglePost /> : <LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

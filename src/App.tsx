import React from 'react';
import TopBar from './Components/Topbar/Topbar';
import Home from './Pages/HomePage/HomePage';
import Setting from './Pages/SettingsPage/SettingPage';
import SinglePost from './Pages/SinglePost/SinglePostPage';
import WritePage from './Pages/WritePage/Write';



function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      {/* <SinglePost /> */}
      {/* <WritePage /> */}
      <Setting />
    </div>
  );
}

export default App;

import React from 'react';
import TopBar from './Components/Topbar/Topbar';
import Home from './Pages/HomePage/HomePage';
import SinglePost from './Pages/SinglePost/SinglePostPage';
import WritePage from './Pages/WritePage/Write';



function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      {/* <SinglePost /> */}
      <WritePage />
    </div>
  );
}

export default App;

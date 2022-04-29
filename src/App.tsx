import React from 'react';
import TopBar from './Components/Topbar/Topbar';
import Home from './Pages/HomePage/HomePage';
import SinglePost from './Pages/SinglePost/SinglePostPage';



function App() {
  return (
    <div className="App">
      <TopBar />
      {/* <Home /> */}
      <SinglePost />
    </div>
  );
}

export default App;

import "./App.css"
import Home from "./pages/Home";
import Auth from  "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: '-18%', right: '0' }}></div>
      <div className="blur" style={{ top: '36%' }}></div>
     
      <Home/>
      {/* <Profile/> */}
      {/* <Auth/> */}
    </div>

  );
}

export default App;

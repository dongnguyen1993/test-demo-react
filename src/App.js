
import './App.scss';
import Header from './components/Header/Header';
import { Link } from 'react-router-dom';



const App = () => {

  return (
    <div className="App-container">
      <Header />
      <div>
        Link router
      </div>
      <div>
        <button>
          <Link to={"/Admins"}>Admin</Link>
        </button>
        <button>
          <Link to={"/Users"}>User</Link>
        </button>
      </div>
    </div>
  );
}

export default App;

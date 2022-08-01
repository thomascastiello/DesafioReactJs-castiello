import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import ItemListC from './components/ItemListC';


function App() {
  return (
    <div className="">

      <NavBar />
      <ItemListC greeting=" Golden" />
    </div>
    
  );
}

export default App;

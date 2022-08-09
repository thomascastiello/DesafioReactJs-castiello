import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
import ItemListC from './components/ItemList/ItemListC';

function App() {
  return (
    <div className="">


      <NavBar />
      <div className='mt-5'>
      <ItemListC greeting=" Golden" />
      </div>
    </div>


  );
}

export default App;

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import NavBar from './components/NavBar';
/* import ItemListC from './components/ItemList/ItemListC'; */
import ItemDetail from './components/ItemDetail/ItemDetail';


function App() {
  return (
    <div className="">


      <NavBar />
      <div className='mt-5'>
     {/*  <ItemListC greeting=" Golden" /> */}
      <ItemDetail/>
      </div>
    </div>


  );
}

export default App;

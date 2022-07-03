import './App.css';
import Navbar from './components/Navbar';
import Destination from './components/Destination';
import { data } from './data';

function App() {

  const dataList = data.map((item) => (
    <Destination key={item.id}
                 {...item}
                 />
  ));
  return (
    <div className='main-body'>
        <Navbar />
        {dataList}
    </div>
  );
}

export default App;

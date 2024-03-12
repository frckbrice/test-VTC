
import { Outlet } from 'react-router-dom';
import Form from './components/form';

function App() {
  return (
    <div className="App">
      <Outlet/>
      <Form/>
    </div>
  );
}

export default App;

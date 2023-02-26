import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './components/views/navBar';
import ConfirmRequest from './components/views/confirmRequest';
import Tracking from './components/views/seguimiento/Tracking';

function App() {
  return (
    <>
      <Navigator />
      <br />
      <div className='text-center'>-------------------------------------</div>
      <ConfirmRequest />
      <br />
      <div className='text-center'>-------------------------------------</div>
      <Tracking />
    </>
  );
}

export default App;

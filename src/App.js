import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator from './components/views/navBar';
import ConfirmRequest from './components/views/confirmRequest';
import Tracking from './components/views/seguimiento/Tracking';
import SendOffer from './components/views/enviopropuesta/SendOffer';

function App() {
  return (
    <>
      <Navigator />
      <br />
      <hr />
      <ConfirmRequest />
      <br />
      <hr />
      <Tracking />
      <br />
      <hr />
      <SendOffer />
    </> 
  );
}

export default App;

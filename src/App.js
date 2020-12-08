import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Compent from './Profile/Compent'

function App() {
  const handelName = (name) => alert(name);
  
  return (
   <>
    <Compent
    fullName={"wissem abid"}
    bio={"ahlaibik"} 
    profession={"adsaz"}
    handelName = {handelName}
    >
      <img id="wissem" src="logo512.png"></img>
    </Compent>
    </>
  );
}

export default App;

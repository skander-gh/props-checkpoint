
import './App.css';
import Fulln from './Profile/fullname';
import Bio from './Profile/bio';
import Prof from './Profile/profession';

function App() {
  const HandleAlert=()=> {alert("OHAYOOO"
  )}
  return (
    <div className="App">
     <Fulln name={"skander ghbara"} >
     <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDbEnNo9DQl_nBeGUvZcs03rSBR6dviY7ErA&usqp=CAU' />
     </Fulln>
     <Bio bio={"GoMyCode Student"}>
    
     </Bio>
     <Prof profession={"student"}/> 
    
    </div>
  );
}

export default App;

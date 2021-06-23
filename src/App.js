import "./App.css";

import FullName from "./component/profile/FullName";
import Adress from "./component/profile/Address";
import ProfilePhoto from "./component/profile/ProfilePhoto";
function App() {
  return (
    <div className="App">
      <ProfilePhoto></ProfilePhoto>
      <div>
      <FullName></FullName>
      <Adress></Adress>

      </div>
    </div>
  );
}

export default App;

import './styles.css';
import Profile from './Profile';
import Interest from './Interest';
import Learn from './Learn';
import Expectations from './Expectations';
import Hobbies from './Hobbies';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Boxes</h1>
      </div>
      <div className="container">
        <Profile />
        <Interest />
        <Learn />
        <Expectations />
        <Hobbies />
      </div>
    </div>
  );
}

export default App;

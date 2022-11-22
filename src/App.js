import './App.css';
import Home from './comps/Home';
import MeetYourInstructor from './comps/MeetYourInstructor';
import NavBar from './comps/NavBar';
import Reviews from './comps/Reviews';
import Stats from './comps/Stats';
import Why from './comps/Why';

function App() {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Home />
      <Stats />
      <Why />
      <MeetYourInstructor />
      <Reviews />
    </div>
  );
}

export default App;

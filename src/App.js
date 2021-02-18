import './main.css';
import UltimaTVPlayer from './components/UltimaTVPlayer';

function App() {
  return (
    <div className="UltimaTVApp">
      <img className="logo" src="/assets/images/logo.png" alt="logo" />
      <span className="title">PWA Shaka player example</span>
      <UltimaTVPlayer />
    </div>
  );
}

export default App;

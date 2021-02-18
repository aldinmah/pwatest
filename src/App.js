import './main.css';
import UltimaTVPlayer from './components/UltimaTVPlayer';
import PWAInstallerPrompt from 'react-pwa-installer-prompt';

function App() {
  return (
    <div className="UltimaTVApp">
      <PWAInstallerPrompt
        render={({ onClick }) => (
          <button type="button" onClick={onClick}>
            Install UltimaTV
            </button>
        )}
        callback={(data) => console.log(data)}
      />
      <img className="logo" src="/assets/images/logo.png" alt="logo" />
      <span className="title">PWA Shaka player example</span>
      <UltimaTVPlayer />
    </div>
  );
}

export default App;

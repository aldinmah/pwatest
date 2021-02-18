import './main.css';
import UltimaTVPlayer from './components/UltimaTVPlayer';
import usePWA from 'react-pwa-install-prompt'

function App() {
  const { isStandalone, isInstallPromptSupported, promptInstall } = usePWA()
  const onClickInstall = async () => {
    const didInstall = await promptInstall()
    if (didInstall) {
      // User accepted PWA install
    }
  }

  const renderInstallButton = () => {
    if (isInstallPromptSupported)
      return (
        <button className="installBtn" onClick={onClickInstall}>Install UltimaTV</button>
      )
    return null
  }
  return (
    <div className="UltimaTVApp">
      <a href="/"><img className="logo" src="/assets/images/logo.png" alt="logo" /></a>
      {renderInstallButton()}
      <div className="pwaInfo">
      <br></br>
      <span>PWA Info</span>
      <br></br>
      <br></br>
      <span>Is Install Prompt Supported = <strong>{isInstallPromptSupported ? 'true' : 'false'}</strong></span>
      
      </div>
      <span className="title">PWA Shaka player example</span>
      <UltimaTVPlayer />
    </div>
  );
}

export default App;

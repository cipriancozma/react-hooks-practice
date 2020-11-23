import React, {useState, useEffect} from 'react';
import './App.scss';

const initialLocationState = {
  longitude: null,
  latitude: null,
  speed: null
}

function App() {
  const [count, setCount] = useState(0);
  const [ mousePosition, setMousePosition ] = useState({x: null, y: null});
  const [ status, setStatus ] = useState(navigator.onLine);
  const [ location, setLocation ] = useState(initialLocationState);

  let mounted = true;

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  }

  const handleMousePosition = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const handleOnline = () => {
    setStatus(true);
  }

  const handleOffline = () => {
    setStatus(false);
  }

  const handleGeolocation = event => {
    if(mounted){
      setLocation({
        latitude: event.coords.latitude,
        longitude: event.coords.longitude,
        speed: event.coords.speed
      })
    }
  }


  useEffect(() => {
    document.title = `You have clicked ${count} times!`;
    window.addEventListener("mousemove", handleMousePosition);
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    navigator.geolocation.getCurrentPosition(handleGeolocation);
    const watchId = navigator.geolocation.watchPosition(handleGeolocation);

    return () => {
      window.removeEventListener("mousemove", handleMousePosition);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
      navigator.geolocation.clearWatch(watchId);
      mounted = false;
    }
  }, [count]);

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>I was clicked {count} times</button>
        <p>Latitude: {location.latitude}</p>
        <p>Longitude: {location.longitude}</p>
        <p>Speed: {location.speed ? location.speed : "0"}</p>
      </header>
      <p>Position of X: {mousePosition.x}</p>
      <p>Position of Y: {mousePosition.y}</p>
      <p> Network Status: {status ? "online" : "offline"}</p>
    </div>
  );
}

export default App;

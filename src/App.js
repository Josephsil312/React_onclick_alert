import React, { useRef } from "react";
import "./App.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotificationSound from "./notification-sound.mp3";


const App = () => {
  toast.configure();
  const audioPlayer = useRef(null);
  const Notify = () => {
    audioPlayer.current.play();
    toast.info("New shipment awarded!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: false
    });
  };

  return (
    <div className="App">
      <button onClick={Notify}>Notify</button>
      <audio ref={audioPlayer} src={NotificationSound} />
    </div>
  );
};

export default App;

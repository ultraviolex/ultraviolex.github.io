import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.plugSDK.init({
      app_id:
        "DvRvStPZG9uOmNvcmU6ZHZydi11cy0xOmRldm8vMUN4VjZ2OVBTUzpwbHVnX3NldHRpbmcvMV9ffHxfXzIwMjQtMDctMTUgMTU6MjI6MTcuNjM1OTE2MzUyICswMDAwIFVUQw==xlxendsDvRv",
    });
  }, []);
  return;
}

export default App;

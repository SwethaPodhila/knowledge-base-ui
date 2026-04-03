import { useState } from "react";
import Home from "./pages/Home";

function App() {
  const [open, setOpen] = useState(false);

  return <Home open={open} setOpen={setOpen} />;
}

export default App;
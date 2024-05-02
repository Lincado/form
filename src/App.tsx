import { BrowserRouter } from "react-router-dom";
import RoutesPages from "./routes";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutesPages />
      </BrowserRouter>
    </>
  );
}

export default App;

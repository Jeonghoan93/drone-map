import { BrowserRouter } from "react-router-dom";
import AppRoutes from "src/routes";
import BaseStyles from "./BaseStyles";

function App() {
  return (
    <>
      <BaseStyles />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;

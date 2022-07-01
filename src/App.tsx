import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@emotion/react";
import theme from "./style/theme";
import Wrap from "./components/Wrap";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Wrap>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Wrap>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

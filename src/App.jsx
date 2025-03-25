import { Title, Gallery } from "./components";
import Footer from "./components/Footer";

function App() {
  const appStyles = {
    backgroundColor: "lightgray",
    padding: "20px",
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="App" style={appStyles}>
      <Title color="#191a19">Welcome! </Title>
      <Gallery />
      <Footer appName="Scientists Gallery" year={currentYear} />
    </div>
  );
}

export default App;
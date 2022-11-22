import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "./Components/CustomNavbar";
import CustomFooter from "./Components/CustomFooter";
import Welcome from "./Components/Welcome";
import LatestRelease from "./Components/LatestRelease";

function App() {
  return (
    <div>
      <CustomNavbar subtitle="Just Books" />
      <Welcome subtitle="The best of books" />
      <LatestRelease />
      <CustomFooter />
    </div>
  );
}

export default App;

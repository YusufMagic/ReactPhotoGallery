import "./App.scss";
import NavBar from "./Components/NavBar";
import { Switch, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ContactsPage from "./Pages/ContactsPage";
import GalleryPage from "./Pages/GalleryPage";

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <NavBar />
      </div>
      <div className="main-content">
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/gallery">
              <GalleryPage />
            </Route>
            <Route path="/contacts" exact>
              <ContactsPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;

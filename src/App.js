import "./App.css";
import {
  Layout,
  Records,
  SponsoredLoc,
  FeedWrap,
} from "./comp/minor.jsx";
import { Route, Routes } from "react-router-dom";
import RecordsComp from "./comp/Records/records.jsx";
import Rezerwacje from "./comp/rez/reserve.jsx";
import LandingPage from "./comp/LandingPage.jsx";
import Navbar from "./comp/Navbar.jsx";
import UserView from "./comp/UserView.jsx";
import AdminView from "./comp/AdminView.jsx";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/feed"
            element={
              <Layout
                c1={<Records />}
                c2={<FeedWrap />}
                c3={
                  <div className="FSQAQAQ">
                    <p>Wiadomości</p>
                  </div>
                }
              />
            }
          />
          <Route path="/records" element={<RecordsComp />} />
          <Route path="/rezerwacje" element={<Rezerwacje />} />
          <Route path="/user" element={<UserView />} />
          <Route path="/admin" element={<AdminView />} />
        </Routes>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Kontakt</h4>
            <p>Email: kontakt@ryb-apka.pl</p>
            <p>Tel: +48 123 456 789</p>
            <p>Adres: ul. Rybacka 42, Warszawa</p>
          </div>
          <div className="footer-section">
            <h4>Nawigacja</h4>
            <Link to="/">Strona główna</Link>
            <Link to="/rezerwacje">Rezerwacje</Link>
            <Link to="/feed">Aktualności</Link>
            <Link to="/records">Rekordy</Link>
            <Link to="/user">Panel Użytkownika</Link>
            <Link to="/admin">Panel Administratora</Link>
          </div>
          <div className="footer-section">
            <h4>Social Media</h4>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
            <p style={{ marginTop: "15px" }}>Dołącz do naszej społeczności!</p>
          </div>
          <div className="footer-section">
            <h4>Newsletter</h4>
            <p>Zapisz się, aby otrzymywać najnowsze informacje o łowiskach i promocjach.</p>
            <div style={{ marginTop: "15px" }}>
              <input type="email" placeholder="Twój email" style={{ 
                padding: "10px", 
                width: "100%", 
                marginBottom: "10px",
                backgroundColor: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "4px",
                color: "white"
              }} />
              <button className="btn" style={{ width: "100%" }}>Zapisz się</button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Ryb-Apka. Wszelkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

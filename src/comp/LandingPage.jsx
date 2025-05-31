import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <div className="container">
          <h1>Witaj w Świecie Wędkarstwa</h1>
          <p>Odkryj najlepsze łowiska w okolicy i zarezerwuj swoje miejsce już dziś</p>
          <div className="hero-buttons">
            <Link to="/rezerwacje" className="btn">Zarezerwuj Łowisko</Link>
            <Link to="/feed" className="btn btn-secondary">Przeglądaj Aktualności</Link>
          </div>
        </div>
      </div>
      
      <section className="section features-section">
        <div className="container">
          <h2 className="section-title">Nasze Usługi</h2>
          <p className="section-subtitle">Wszystko czego potrzebujesz w jednym miejscu</p>
          
          <div className="grid grid-3">
            <div className="feature card">
              <div className="feature-icon">
                <i className="fas fa-fish"></i>
              </div>
              <h3>Profesjonalne Łowiska</h3>
              <p>Starannie wybrane miejsca dla pasjonatów wędkarstwa z bogatym zarybieniem i profesjonalną obsługą.</p>
            </div>
            <div className="feature card">
              <div className="feature-icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>Łatwa Rezerwacja</h3>
              <p>Prosty system rezerwacji online, który pozwala zaplanować wędkowanie w kilka minut, bez zbędnych formalności.</p>
            </div>
            <div className="feature card">
              <div className="feature-icon">
                <i className="fas fa-water"></i>
              </div>
              <h3>Bogaty Wybór</h3>
              <p>Różnorodne gatunki ryb i rodzaje łowisk - od spokojnych stawów po dynamiczne rzeki, dla początkujących i zaawansowanych.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section popular-spots">
        <div className="container">
          <h2 className="section-title">Popularne łowiska</h2>
          <p className="section-subtitle">Sprawdź najczęściej wybierane miejsca przez naszych użytkowników</p>
          
          <div className="grid grid-2">
            <div className="spot-card card">
              <div className="spot-image spot-1"></div>
              <div className="spot-content">
                <h3>Jezioro Spokojne</h3>
                <p>Idealne miejsce dla początkujących wędkarzy. Bogactwo karpi, amurów i linów.</p>
                <div className="spot-details">
                  <span><i className="fas fa-map-marker-alt"></i> Mazowieckie</span>
                  <span><i className="fas fa-chair"></i> 15 stanowisk</span>
                </div>
                <Link to="/rezerwacje" className="btn">Sprawdź dostępność</Link>
              </div>
            </div>
            <div className="spot-card card">
              <div className="spot-image spot-2"></div>
              <div className="spot-content">
                <h3>Rzeka Wartka</h3>
                <p>Dla doświadczonych wędkarzy. Pstrągi, szczupaki i okonie czekają na Ciebie.</p>
                <div className="spot-details">
                  <span><i className="fas fa-map-marker-alt"></i> Podkarpackie</span>
                  <span><i className="fas fa-chair"></i> 8 stanowisk</span>
                </div>
                <Link to="/rezerwacje" className="btn">Sprawdź dostępność</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section testimonials">
        <div className="container">
          <h2 className="section-title">Co Mówią Nasi Klienci</h2>
          <div className="grid grid-3">
            <div className="testimonial card">
              <div className="testimonial-content">
                <p>"Najlepsze miejsce do wędkowania w okolicy! Profesjonalna obsługa i świetna atmosfera."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-name">Jan Kowalski</div>
                <div className="author-title">Wędkarz od 15 lat</div>
              </div>
            </div>
            <div className="testimonial card">
              <div className="testimonial-content">
                <p>"System rezerwacji działa bez zarzutu. Polecam każdemu, kto ceni sobie wygodę i jakość."</p>
              </div>
              <div className="testimonial-author">
                <div className="author-name">Anna Nowak</div>
                <div className="author-title">Początkująca wędkarka</div>
              </div>
            </div>
            <div className="testimonial card">
              <div className="testimonial-content">
                <p>"Świetne łowiska, bogaty wybór ryb i pomocna społeczność. Wracam tu regularnie!"</p>
              </div>
              <div className="testimonial-author">
                <div className="author-name">Piotr Wiśniewski</div>
                <div className="author-title">Pasjonat wędkarstwa</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section cta-section">
        <div className="container">
          <h2>Gotowy na przygodę?</h2>
          <p>Dołącz do tysięcy zadowolonych wędkarzy i zarezerwuj swoje miejsce już teraz!</p>
          <Link to="/rezerwacje" className="btn">Zarezerwuj Łowisko</Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
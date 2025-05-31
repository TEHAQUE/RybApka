import React, { useState } from 'react';
import { recordsLst } from './db';
import './UserView.css';

const UserView = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [reservations] = useState([
    { id: 1, spot: 'Jezioro Spokojne', date: '20.05.2025', stands: 2, status: 'Nadchodząca' },
    { id: 2, spot: 'Rzeka Wartka', date: '10.05.2025', stands: 1, status: 'Zakończona' },
    { id: 3, spot: 'Staw Leśny', date: '01.06.2025', stands: 3, status: 'Nadchodząca' },
  ]);
  
  const [myRecords] = useState([
    { id: 1, fish: 'Karp', weight: 8.5, location: 'Jezioro Spokojne', date: '10.05.2025' },
    { id: 2, fish: 'Szczupak', weight: 5.2, location: 'Rzeka Wartka', date: '15.04.2025' },
  ]);

  return (
    <div className="user-view">
      <div className="user-header">
        <h1>Panel Użytkownika</h1>
        <div className="user-profile">
          <span>Jan Kowalski</span>
          <img src="https://i.pravatar.cc/40?img=3" alt="User" />
        </div>
      </div>
      
      <div className="user-container">
        <div className="user-sidebar">
          <ul>
            <li 
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => setActiveTab('dashboard')}
            >
              <i className="fas fa-home"></i> Pulpit
            </li>
            <li 
              className={activeTab === 'reservations' ? 'active' : ''}
              onClick={() => setActiveTab('reservations')}
            >
              <i className="fas fa-calendar-alt"></i> Moje Rezerwacje
            </li>
            <li 
              className={activeTab === 'records' ? 'active' : ''}
              onClick={() => setActiveTab('records')}
            >
              <i className="fas fa-trophy"></i> Moje Rekordy
            </li>
            <li 
              className={activeTab === 'feed' ? 'active' : ''}
              onClick={() => setActiveTab('feed')}
            >
              <i className="fas fa-newspaper"></i> Aktualności
            </li>
            <li 
              className={activeTab === 'profile' ? 'active' : ''}
              onClick={() => setActiveTab('profile')}
            >
              <i className="fas fa-user"></i> Profil
            </li>
          </ul>
        </div>
        
        <div className="user-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-content">
              <div className="welcome-card">
                <h2>Witaj, Jan!</h2>
                <p>Miło Cię znowu widzieć. Oto podsumowanie Twojej aktywności.</p>
              </div>
              
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon"><i className="fas fa-calendar-check"></i></div>
                  <div className="stat-info">
                    <h3>Rezerwacje</h3>
                    <p className="stat-number">3</p>
                    <p className="stat-text">2 nadchodzące</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><i className="fas fa-fish"></i></div>
                  <div className="stat-info">
                    <h3>Złowione Ryby</h3>
                    <p className="stat-number">12</p>
                    <p className="stat-text">w tym miesiącu</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><i className="fas fa-trophy"></i></div>
                  <div className="stat-info">
                    <h3>Rekordy</h3>
                    <p className="stat-number">2</p>
                    <p className="stat-text">osobiste rekordy</p>
                  </div>
                </div>
              </div>
              
              <div className="upcoming-reservations">
                <h3>Nadchodzące Rezerwacje</h3>
                {reservations.filter(res => res.status === 'Nadchodząca').map(reservation => (
                  <div className="reservation-card" key={reservation.id}>
                    <div className="reservation-icon">
                      <i className="fas fa-water"></i>
                    </div>
                    <div className="reservation-details">
                      <h4>{reservation.spot}</h4>
                      <p><i className="fas fa-calendar"></i> {reservation.date}</p>
                      <p><i className="fas fa-chair"></i> {reservation.stands} stanowiska</p>
                    </div>
                    <div className="reservation-actions">
                      <button className="btn">Szczegóły</button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="recent-activity">
                <h3>Ostatnia Aktywność</h3>
                <ul className="activity-list">
                  <li>
                    <div className="activity-icon"><i className="fas fa-fish"></i></div>
                    <div className="activity-details">
                      <p>Złowiłeś <strong>Karpia (8.5kg)</strong> w Jeziorze Spokojnym</p>
                      <span className="activity-time">10.05.2025</span>
                    </div>
                  </li>
                  <li>
                    <div className="activity-icon"><i className="fas fa-calendar-check"></i></div>
                    <div className="activity-details">
                      <p>Zarezerwowałeś <strong>Staw Leśny</strong> na 01.06.2025</p>
                      <span className="activity-time">05.05.2025</span>
                    </div>
                  </li>
                  <li>
                    <div className="activity-icon"><i className="fas fa-comment"></i></div>
                    <div className="activity-details">
                      <p>Skomentowałeś post <strong>"Zawody wędkarskie - relacja"</strong></p>
                      <span className="activity-time">01.05.2025</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'reservations' && (
            <div className="reservations-content">
              <div className="content-header">
                <h2>Moje Rezerwacje</h2>
                <button className="btn"><i className="fas fa-plus"></i> Nowa Rezerwacja</button>
              </div>
              
              <div className="filter-tabs">
                <button className="filter-tab active">Wszystkie</button>
                <button className="filter-tab">Nadchodzące</button>
                <button className="filter-tab">Zakończone</button>
              </div>
              
              <div className="reservations-list">
                {reservations.map(reservation => (
                  <div className="reservation-card full" key={reservation.id}>
                    <div className="reservation-header">
                      <h3>{reservation.spot}</h3>
                      <span className={`status-badge ${reservation.status === 'Nadchodząca' ? 'active' : 'completed'}`}>
                        {reservation.status}
                      </span>
                    </div>
                    <div className="reservation-body">
                      <div className="reservation-detail">
                        <i className="fas fa-calendar"></i>
                        <span>Data: {reservation.date}</span>
                      </div>
                      <div className="reservation-detail">
                        <i className="fas fa-chair"></i>
                        <span>Stanowiska: {reservation.stands}</span>
                      </div>
                      <div className="reservation-detail">
                        <i className="fas fa-clock"></i>
                        <span>Czas: Cały dzień</span>
                      </div>
                    </div>
                    <div className="reservation-footer">
                      <button className="btn">Szczegóły</button>
                      {reservation.status === 'Nadchodząca' && (
                        <button className="btn btn-secondary">Anuluj</button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'records' && (
            <div className="records-content">
              <div className="content-header">
                <h2>Moje Rekordy</h2>
                <button className="btn"><i className="fas fa-plus"></i> Dodaj Rekord</button>
              </div>
              
              <div className="records-grid">
                {myRecords.map(record => (
                  <div className="record-card" key={record.id}>
                    <div className="record-header">
                      <h3>{record.fish}</h3>
                      <span className="record-weight">{record.weight} kg</span>
                    </div>
                    <div className="record-body">
                      <div className="record-detail">
                        <i className="fas fa-map-marker-alt"></i>
                        <span>{record.location}</span>
                      </div>
                      <div className="record-detail">
                        <i className="fas fa-calendar"></i>
                        <span>{record.date}</span>
                      </div>
                    </div>
                    <div className="record-footer">
                      <button className="btn">Szczegóły</button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="global-records">
                <h3>Rekordy Globalne</h3>
                <table className="data-table">
                  <thead>
                    <tr>
                      <th>Pozycja</th>
                      <th>Wędkarz</th>
                      <th>Gatunek</th>
                      <th>Waga (kg)</th>
                      <th>Lokalizacja</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recordsLst.map((record, index) => (
                      <tr key={record.id}>
                        <td>{index + 1}</td>
                        <td>{record.name}</td>
                        <td>{record.fish}</td>
                        <td>{record.weight}</td>
                        <td>{record.location}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          
          {activeTab === 'feed' && (
            <div className="feed-content">
              <div className="content-header">
                <h2>Aktualności</h2>
                <button className="btn"><i className="fas fa-plus"></i> Nowy Post</button>
              </div>
              
              <div className="create-post">
                <div className="post-input">
                  <img src="https://i.pravatar.cc/40?img=3" alt="User" />
                  <input type="text" placeholder="Co słychać na łowisku?" />
                </div>
                <div className="post-actions">
                  <button><i className="fas fa-image"></i> Zdjęcie</button>
                  <button><i className="fas fa-map-marker-alt"></i> Lokalizacja</button>
                  <button className="btn">Opublikuj</button>
                </div>
              </div>
              
              <div className="feed-posts">
                <div className="post">
                  <div className="post-header">
                    <img src="https://i.pravatar.cc/40?img=5" alt="User" />
                    <div>
                      <h4>Marek Nowak</h4>
                      <span>17 maja 2025, 14:30</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <p>Dzisiaj złowiłem pięknego karpia na łowisku w Będzinie! Pogoda dopisała, polecam wszystkim!</p>
                    <img src="https://i.pravatar.cc/600x300" alt="Post" className="post-image" />
                  </div>
                  <div className="post-stats">
                    <span><i className="fas fa-thumbs-up"></i> 24 polubień</span>
                    <span><i className="fas fa-comment"></i> 8 komentarzy</span>
                  </div>
                  <div className="post-actions">
                    <button><i className="fas fa-thumbs-up"></i> Lubię to</button>
                    <button><i className="fas fa-comment"></i> Komentarz</button>
                    <button><i className="fas fa-share"></i> Udostępnij</button>
                  </div>
                  <div className="post-comments">
                    <div className="comment">
                      <img src="https://i.pravatar.cc/30?img=2" alt="User" />
                      <div>
                        <h5>Anna Nowak</h5>
                        <p>Gratulacje! Piękny okaz 🎣</p>
                        <div className="comment-actions">
                          <button>Lubię to</button>
                          <button>Odpowiedz</button>
                          <span>2 godz. temu</span>
                        </div>
                      </div>
                    </div>
                    <div className="add-comment">
                      <img src="https://i.pravatar.cc/30?img=3" alt="User" />
                      <input type="text" placeholder="Napisz komentarz..." />
                    </div>
                  </div>
                </div>
                
                <div className="post">
                  <div className="post-header">
                    <img src="https://i.pravatar.cc/40?img=7" alt="User" />
                    <div>
                      <h4>Kasia Wiśniewska</h4>
                      <span>16 maja 2025, 10:15</span>
                    </div>
                  </div>
                  <div className="post-content">
                    <p>Kto wybiera się na zawody wędkarskie w przyszłym tygodniu? Będzie świetna zabawa!</p>
                  </div>
                  <div className="post-stats">
                    <span><i className="fas fa-thumbs-up"></i> 18 polubień</span>
                    <span><i className="fas fa-comment"></i> 12 komentarzy</span>
                  </div>
                  <div className="post-actions">
                    <button><i className="fas fa-thumbs-up"></i> Lubię to</button>
                    <button><i className="fas fa-comment"></i> Komentarz</button>
                    <button><i className="fas fa-share"></i> Udostępnij</button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'profile' && (
            <div className="profile-content">
              <div className="profile-header">
                <div className="profile-cover"></div>
                <div className="profile-avatar">
                  <img src="https://i.pravatar.cc/150?img=3" alt="User" />
                </div>
                <div className="profile-info">
                  <h2>Jan Kowalski</h2>
                  <p>Pasjonat wędkarstwa od 2010 roku</p>
                </div>
              </div>
              
              <div className="profile-tabs">
                <button className="profile-tab active">Informacje</button>
                <button className="profile-tab">Osiągnięcia</button>
                <button className="profile-tab">Galeria</button>
              </div>
              
              <div className="profile-section">
                <h3>Informacje Osobiste</h3>
                <form className="profile-form">
                  <div className="form-group">
                    <label>Imię i Nazwisko</label>
                    <input type="text" value="Jan Kowalski" />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" value="jan@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Telefon</label>
                    <input type="tel" value="+48 123 456 789" />
                  </div>
                  <div className="form-group">
                    <label>Lokalizacja</label>
                    <input type="text" value="Warszawa, Polska" />
                  </div>
                  <div className="form-group">
                    <label>O mnie</label>
                    <textarea rows="4">Pasjonat wędkarstwa od 2010 roku. Specjalizuję się w łowieniu karpi i szczupaków. Uwielbiam spędzać czas nad wodą i dzielić się swoimi doświadczeniami z innymi wędkarzami.</textarea>
                  </div>
                  <div className="form-group">
                    <label>Ulubione Łowiska</label>
                    <input type="text" value="Jezioro Spokojne, Rzeka Wartka, Zalew Miejski" />
                  </div>
                  <button type="submit" className="btn">Zapisz Zmiany</button>
                </form>
              </div>
              
              <div className="profile-section">
                <h3>Zmiana Hasła</h3>
                <form className="profile-form">
                  <div className="form-group">
                    <label>Obecne Hasło</label>
                    <input type="password" />
                  </div>
                  <div className="form-group">
                    <label>Nowe Hasło</label>
                    <input type="password" />
                  </div>
                  <div className="form-group">
                    <label>Powtórz Nowe Hasło</label>
                    <input type="password" />
                  </div>
                  <button type="submit" className="btn">Zmień Hasło</button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserView;
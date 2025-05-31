import React, { useState } from 'react';
import { recordsLst } from './db';
import './AdminView.css';

const AdminView = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [users] = useState([
    { id: 1, name: 'Jan Kowalski', email: 'jan@example.com', role: 'Użytkownik', status: 'Aktywny' },
    { id: 2, name: 'Anna Nowak', email: 'anna@example.com', role: 'Moderator', status: 'Aktywny' },
    { id: 3, name: 'Piotr Wiśniewski', email: 'piotr@example.com', role: 'Użytkownik', status: 'Nieaktywny' },
    { id: 4, name: 'Katarzyna Dąbrowska', email: 'kasia@example.com', role: 'Użytkownik', status: 'Aktywny' },
  ]);
  
  const [fishingSpots] = useState([
    { id: 1, name: 'Jezioro Spokojne', location: 'Mazowieckie', stands: 15, status: 'Dostępne' },
    { id: 2, name: 'Rzeka Wartka', location: 'Podkarpackie', stands: 8, status: 'Dostępne' },
    { id: 3, name: 'Staw Leśny', location: 'Małopolskie', stands: 10, status: 'W konserwacji' },
    { id: 4, name: 'Zalew Miejski', location: 'Śląskie', stands: 20, status: 'Dostępne' },
  ]);
  
  const [posts] = useState([
    { id: 1, author: 'Jan Kowalski', title: 'Udany połów w Będzinie', date: '17.05.2025', status: 'Opublikowany' },
    { id: 2, author: 'Anna Nowak', title: 'Zawody wędkarskie - relacja', date: '15.05.2025', status: 'Opublikowany' },
    { id: 3, author: 'Piotr Wiśniewski', title: 'Nowy sprzęt wędkarski', date: '10.05.2025', status: 'Oczekujący' },
    { id: 4, author: 'Katarzyna Dąbrowska', title: 'Techniki łowienia karpi', date: '05.05.2025', status: 'Opublikowany' },
  ]);

  return (
    <div className="admin-view">
      <div className="admin-header">
        <h1>Panel Administratora</h1>
        <div className="admin-user">
          <span>Admin</span>
          <img src="https://i.pravatar.cc/40?img=1" alt="Admin" />
        </div>
      </div>
      
      <div className="admin-container">
        <div className="admin-sidebar">
          <ul>
            <li 
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => setActiveTab('dashboard')}
            >
              <i className="fas fa-tachometer-alt"></i> Dashboard
            </li>
            <li 
              className={activeTab === 'users' ? 'active' : ''}
              onClick={() => setActiveTab('users')}
            >
              <i className="fas fa-users"></i> Użytkownicy
            </li>
            <li 
              className={activeTab === 'fishing-spots' ? 'active' : ''}
              onClick={() => setActiveTab('fishing-spots')}
            >
              <i className="fas fa-water"></i> Łowiska
            </li>
            <li 
              className={activeTab === 'posts' ? 'active' : ''}
              onClick={() => setActiveTab('posts')}
            >
              <i className="fas fa-newspaper"></i> Posty
            </li>
            <li 
              className={activeTab === 'records' ? 'active' : ''}
              onClick={() => setActiveTab('records')}
            >
              <i className="fas fa-trophy"></i> Rekordy
            </li>
            <li 
              className={activeTab === 'settings' ? 'active' : ''}
              onClick={() => setActiveTab('settings')}
            >
              <i className="fas fa-cog"></i> Ustawienia
            </li>
          </ul>
        </div>
        
        <div className="admin-content">
          {activeTab === 'dashboard' && (
            <div className="dashboard-content">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-icon"><i className="fas fa-users"></i></div>
                  <div className="stat-info">
                    <h3>Użytkownicy</h3>
                    <p className="stat-number">124</p>
                    <p className="stat-change positive">+12% w tym miesiącu</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><i className="fas fa-water"></i></div>
                  <div className="stat-info">
                    <h3>Łowiska</h3>
                    <p className="stat-number">28</p>
                    <p className="stat-change positive">+3 nowe</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><i className="fas fa-fish"></i></div>
                  <div className="stat-info">
                    <h3>Rezerwacje</h3>
                    <p className="stat-number">87</p>
                    <p className="stat-change positive">+24% w tym tygodniu</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon"><i className="fas fa-trophy"></i></div>
                  <div className="stat-info">
                    <h3>Rekordy</h3>
                    <p className="stat-number">42</p>
                    <p className="stat-change neutral">Bez zmian</p>
                  </div>
                </div>
              </div>
              
              <div className="recent-activity">
                <h2>Ostatnia aktywność</h2>
                <ul className="activity-list">
                  <li>
                    <div className="activity-icon"><i className="fas fa-user-plus"></i></div>
                    <div className="activity-details">
                      <p>Nowy użytkownik: <strong>Marek Nowicki</strong></p>
                      <span className="activity-time">Dzisiaj, 14:32</span>
                    </div>
                  </li>
                  <li>
                    <div className="activity-icon"><i className="fas fa-fish"></i></div>
                    <div className="activity-details">
                      <p>Nowy rekord: <strong>Karp 15kg</strong> złowiony przez Jana Kowalskiego</p>
                      <span className="activity-time">Wczoraj, 18:45</span>
                    </div>
                  </li>
                  <li>
                    <div className="activity-icon"><i className="fas fa-calendar-check"></i></div>
                    <div className="activity-details">
                      <p>Nowa rezerwacja: <strong>Jezioro Spokojne</strong>, 3 stanowiska</p>
                      <span className="activity-time">Wczoraj, 10:15</span>
                    </div>
                  </li>
                  <li>
                    <div className="activity-icon"><i className="fas fa-exclamation-triangle"></i></div>
                    <div className="activity-details">
                      <p>Zgłoszenie problemu: <strong>Staw Leśny</strong> - potrzebna konserwacja</p>
                      <span className="activity-time">2 dni temu, 09:30</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
          
          {activeTab === 'users' && (
            <div className="users-content">
              <div className="content-header">
                <h2>Zarządzanie Użytkownikami</h2>
                <button className="btn"><i className="fas fa-plus"></i> Dodaj Użytkownika</button>
              </div>
              
              <div className="search-filter">
                <input type="text" placeholder="Szukaj użytkownika..." />
                <select>
                  <option value="all">Wszystkie role</option>
                  <option value="user">Użytkownik</option>
                  <option value="moderator">Moderator</option>
                  <option value="admin">Administrator</option>
                </select>
                <select>
                  <option value="all">Wszystkie statusy</option>
                  <option value="active">Aktywny</option>
                  <option value="inactive">Nieaktywny</option>
                </select>
              </div>
              
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nazwa</th>
                    <th>Email</th>
                    <th>Rola</th>
                    <th>Status</th>
                    <th>Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.role}</td>
                      <td>
                        <span className={`status-badge ${user.status === 'Aktywny' ? 'active' : 'inactive'}`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="actions">
                        <button className="action-btn edit"><i className="fas fa-edit"></i></button>
                        <button className="action-btn delete"><i className="fas fa-trash"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="pagination">
                <button disabled><i className="fas fa-chevron-left"></i></button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button><i className="fas fa-chevron-right"></i></button>
              </div>
            </div>
          )}
          
          {activeTab === 'fishing-spots' && (
            <div className="fishing-spots-content">
              <div className="content-header">
                <h2>Zarządzanie Łowiskami</h2>
                <button className="btn"><i className="fas fa-plus"></i> Dodaj Łowisko</button>
              </div>
              
              <div className="search-filter">
                <input type="text" placeholder="Szukaj łowiska..." />
                <select>
                  <option value="all">Wszystkie lokalizacje</option>
                  <option value="mazowieckie">Mazowieckie</option>
                  <option value="podkarpackie">Podkarpackie</option>
                  <option value="malopolskie">Małopolskie</option>
                  <option value="slaskie">Śląskie</option>
                </select>
                <select>
                  <option value="all">Wszystkie statusy</option>
                  <option value="available">Dostępne</option>
                  <option value="maintenance">W konserwacji</option>
                </select>
              </div>
              
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nazwa</th>
                    <th>Lokalizacja</th>
                    <th>Liczba stanowisk</th>
                    <th>Status</th>
                    <th>Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {fishingSpots.map(spot => (
                    <tr key={spot.id}>
                      <td>{spot.id}</td>
                      <td>{spot.name}</td>
                      <td>{spot.location}</td>
                      <td>{spot.stands}</td>
                      <td>
                        <span className={`status-badge ${spot.status === 'Dostępne' ? 'active' : 'maintenance'}`}>
                          {spot.status}
                        </span>
                      </td>
                      <td className="actions">
                        <button className="action-btn edit"><i className="fas fa-edit"></i></button>
                        <button className="action-btn delete"><i className="fas fa-trash"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="pagination">
                <button disabled><i className="fas fa-chevron-left"></i></button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button><i className="fas fa-chevron-right"></i></button>
              </div>
            </div>
          )}
          
          {activeTab === 'posts' && (
            <div className="posts-content">
              <div className="content-header">
                <h2>Zarządzanie Postami</h2>
                <button className="btn"><i className="fas fa-plus"></i> Dodaj Post</button>
              </div>
              
              <div className="search-filter">
                <input type="text" placeholder="Szukaj posta..." />
                <select>
                  <option value="all">Wszystkie statusy</option>
                  <option value="published">Opublikowany</option>
                  <option value="pending">Oczekujący</option>
                  <option value="draft">Szkic</option>
                </select>
              </div>
              
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Tytuł</th>
                    <th>Autor</th>
                    <th>Data</th>
                    <th>Status</th>
                    <th>Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map(post => (
                    <tr key={post.id}>
                      <td>{post.id}</td>
                      <td>{post.title}</td>
                      <td>{post.author}</td>
                      <td>{post.date}</td>
                      <td>
                        <span className={`status-badge ${post.status === 'Opublikowany' ? 'active' : post.status === 'Oczekujący' ? 'pending' : 'draft'}`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="actions">
                        <button className="action-btn view"><i className="fas fa-eye"></i></button>
                        <button className="action-btn edit"><i className="fas fa-edit"></i></button>
                        <button className="action-btn delete"><i className="fas fa-trash"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="pagination">
                <button disabled><i className="fas fa-chevron-left"></i></button>
                <button className="active">1</button>
                <button>2</button>
                <button>3</button>
                <button><i className="fas fa-chevron-right"></i></button>
              </div>
            </div>
          )}
          
          {activeTab === 'records' && (
            <div className="records-content">
              <div className="content-header">
                <h2>Zarządzanie Rekordami</h2>
                <button className="btn"><i className="fas fa-plus"></i> Dodaj Rekord</button>
              </div>
              
              <div className="search-filter">
                <input type="text" placeholder="Szukaj rekordu..." />
                <select>
                  <option value="all">Wszystkie gatunki</option>
                  <option value="karp">Karp</option>
                  <option value="szczupak">Szczupak</option>
                  <option value="sum">Sum</option>
                  <option value="karas">Karaś</option>
                </select>
              </div>
              
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Wędkarz</th>
                    <th>Gatunek</th>
                    <th>Waga (kg)</th>
                    <th>Lokalizacja</th>
                    <th>Akcje</th>
                  </tr>
                </thead>
                <tbody>
                  {recordsLst.map((record, index) => (
                    <tr key={record.id}>
                      <td>{record.id + 1}</td>
                      <td>{record.name}</td>
                      <td>{record.fish}</td>
                      <td>{record.weight}</td>
                      <td>{record.location}</td>
                      <td className="actions">
                        <button className="action-btn edit"><i className="fas fa-edit"></i></button>
                        <button className="action-btn delete"><i className="fas fa-trash"></i></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              <div className="pagination">
                <button disabled><i className="fas fa-chevron-left"></i></button>
                <button className="active">1</button>
                <button><i className="fas fa-chevron-right"></i></button>
              </div>
            </div>
          )}
          
          {activeTab === 'settings' && (
            <div className="settings-content">
              <h2>Ustawienia Systemu</h2>
              
              <div className="settings-section">
                <h3>Ustawienia Ogólne</h3>
                <form className="settings-form">
                  <div className="form-group">
                    <label>Nazwa Strony</label>
                    <input type="text" value="Ryb-Apka" />
                  </div>
                  <div className="form-group">
                    <label>Email Kontaktowy</label>
                    <input type="email" value="kontakt@ryb-apka.pl" />
                  </div>
                  <div className="form-group">
                    <label>Maksymalna liczba rezerwacji na użytkownika</label>
                    <input type="number" value="5" />
                  </div>
                  <div className="form-group">
                    <label>Tryb Konserwacji</label>
                    <div className="toggle-switch">
                      <input type="checkbox" id="maintenance-mode" />
                      <label htmlFor="maintenance-mode"></label>
                    </div>
                  </div>
                  <button type="submit" className="btn">Zapisz Zmiany</button>
                </form>
              </div>
              
              <div className="settings-section">
                <h3>Kopie Zapasowe</h3>
                <div className="backup-controls">
                  <button className="btn"><i className="fas fa-download"></i> Utwórz Kopię Zapasową</button>
                  <button className="btn btn-secondary"><i className="fas fa-upload"></i> Przywróć z Kopii</button>
                </div>
                <div className="backup-history">
                  <h4>Historia Kopii Zapasowych</h4>
                  <ul>
                    <li>
                      <span>backup_20250517_120000.zip</span>
                      <span>17.05.2025, 12:00</span>
                      <div>
                        <button className="action-btn"><i className="fas fa-download"></i></button>
                        <button className="action-btn delete"><i className="fas fa-trash"></i></button>
                      </div>
                    </li>
                    <li>
                      <span>backup_20250510_080000.zip</span>
                      <span>10.05.2025, 08:00</span>
                      <div>
                        <button className="action-btn"><i className="fas fa-download"></i></button>
                        <button className="action-btn delete"><i className="fas fa-trash"></i></button>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminView;
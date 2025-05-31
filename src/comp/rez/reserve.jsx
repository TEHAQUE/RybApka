import React, { useState } from "react";
import "./reserve.css";

const LOWISKA = [
  {
    id: 1,
    nazwa: "Będzin",
    lokalizacja: "Będzin",
    stanowiska: 12,
    ryby: ["Karp", "Szczupak", "Sum"],
    opis: "Popularne łowisko z dużą ilością karpi.",
  },
  {
    id: 2,
    nazwa: "Katowice",
    lokalizacja: "Katowice",
    stanowiska: 8,
    ryby: ["Sandacz", "Okoń"],
    opis: "Spokojne miejsce na rodzinny wypad.",
  },
  {
    id: 3,
    nazwa: "Łowisko Gliwice",
    lokalizacja: "Gliwice",
    stanowiska: 15,
    ryby: ["Karp", "Amur", "Lin"],
    opis: "Duże łowisko z wieloma stanowiskami.",
  },
];

const wszystkieRyby = [...new Set(LOWISKA.flatMap((l) => l.ryby))];

const wszystkieLokalizacje = [...new Set(LOWISKA.map((l) => l.lokalizacja))];

const Rezerwacje = () => {
  const [szukaj, setSzukaj] = useState("");
  const [lokalizacja, setLokalizacja] = useState("");
  const [minStanowiska, setMinStanowiska] = useState("");
  const [ryba, setRyba] = useState("");

  const filtrowane = LOWISKA.filter((l) => {
    const pasujeNazwa = l.nazwa.toLowerCase().includes(szukaj.toLowerCase());
    const pasujeLokalizacja = !lokalizacja || l.lokalizacja === lokalizacja;
    const pasujeStanowiska =
      !minStanowiska || l.stanowiska >= Number(minStanowiska);
    const pasujeRyba = !ryba || l.ryby.includes(ryba);
    return pasujeNazwa && pasujeLokalizacja && pasujeStanowiska && pasujeRyba;
  });

  return (
    <div className="rezerwacje-wrap">
      <h2>Rezerwacja łowisk</h2>
      <div className="rezerwacje-filters">
        <input
          type="text"
          placeholder="Szukaj po nazwie..."
          value={szukaj}
          onChange={(e) => setSzukaj(e.target.value)}
        />
        <select
          value={lokalizacja}
          onChange={(e) => setLokalizacja(e.target.value)}
        >
          <option value="">Wszystkie lokalizacje</option>
          {wszystkieLokalizacje.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
        <input
          type="number"
          placeholder="Min. stanowisk"
          value={minStanowiska}
          min={1}
          onChange={(e) => setMinStanowiska(e.target.value)}
        />
        <select value={ryba} onChange={(e) => setRyba(e.target.value)}>
          <option value="">Wszystkie ryby</option>
          {wszystkieRyby.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div className="rezerwacje-lista">
        {filtrowane.length === 0 && <p>Brak łowisk spełniających kryteria.</p>}
        {filtrowane.map((l) => (
          <div className="rezerwacja-card" key={l.id}>
            <h3>{l.nazwa}</h3>
            <p>
              <b>Lokalizacja:</b> {l.lokalizacja}
            </p>
            <p>
              <b>Liczba stanowisk:</b> {l.stanowiska}
            </p>
            <p>
              <b>Ryby:</b> {l.ryby.join(", ")}
            </p>
            <p className="rezerwacja-opis">{l.opis}</p>
            <button className="btn-rezerwuj">Rezerwuj</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rezerwacje;

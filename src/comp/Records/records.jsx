import React, { useState } from "react";
import { recordsLst } from "../db";

const RecordsComp = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeRecord, setActiveRecord] = useState(null);

  const openModal = (record) => {
    setActiveRecord(record);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setActiveRecord(null);
  };

  return (
    <div className="records-main-wrap">
      <div className="CssDSasdA">
        {recordsLst.slice(0, 3).map((rec, idx) => (
          <div className={`DFDdddvc vff${idx + 1}`} key={rec.id}>
            <div
              className="XCXCProf"
              style={{
                backgroundImage: `url(${
                  rec.img || "https://i.pravatar.cc/120?img=3"
                })`,
              }}
            ></div>
            <div>
              <p>{rec.name}</p>
              <button className="btnDetRec" onClick={() => openModal(rec)}>
                Szczegóły
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="dsdss">
        {recordsLst.map((rec, idx) => (
          <div className="dsdssvs" key={rec.id}>
            <p>{idx + 1}.</p>
            <div></div>
            <p>{rec.name}</p>
            <p>{rec.fish}</p>
            <p>{rec.weight}</p>
            <p>{rec.location}</p>
            <button className="btnDetRec" onClick={() => openModal(rec)}>
              Szczegóły
            </button>
          </div>
        ))}
      </div>
      {modalOpen && activeRecord && (
        <Modal onClose={closeModal}>
          <div style={{ textAlign: "center" }}>
            <h2>{activeRecord.name}</h2>
            <img
              src={activeRecord.img || "https://i.pravatar.cc/300?img=3"}
              alt={activeRecord.name}
              style={{ width: "100%", maxWidth: 300, borderRadius: 12 }}
            />
            <p>
              <b>Ryba:</b> {activeRecord.fish}
            </p>
            <p>
              <b>Waga/Długość:</b> {activeRecord.weight}
            </p>
            <p>
              <b>Łowisko:</b> {activeRecord.location}
            </p>
            <button onClick={closeModal} style={{ marginTop: 16 }}>
              Zamknij
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};

const Modal = ({ children, onClose }) => (
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 9999,
    }}
    onClick={onClose}
  >
    <div
      style={{
        background: "green",
        padding: 32,
        borderRadius: 16,
        minWidth: 320,
        maxWidth: "90vw",
        boxShadow: "0 4px 24px #0005",
        position: "relative",
      }}
      onClick={(e) => e.stopPropagation()}
    >
      {children}
    </div>
  </div>
);

export default RecordsComp;

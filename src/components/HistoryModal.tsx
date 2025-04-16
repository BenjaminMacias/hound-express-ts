import React from "react";
import { Guide } from "../interfaces/Guide";

// Props del modal de historial
interface Props {
  isOpen: boolean;
  selectedGuide: Guide | null;
  onClose: () => void;
}

const HistoryModal: React.FC<Props> = ({ isOpen, selectedGuide, onClose }) => {
  // Si no está abierto o no hay guía seleccionada, no se muestra nada
  if (!isOpen || !selectedGuide) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar historial">
          &times;
        </button>

        <h3 className="modal-title">Historial de la guía: <strong>{selectedGuide.number}</strong></h3>

        {selectedGuide.history.length === 0 ? (
          <p className="modal-empty">No hay historial disponible.</p>
        ) : (
          <table className="modal-table">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Ubicación</th>
                <th>Observaciones</th>
              </tr>
            </thead>
            <tbody>
              {[...selectedGuide.history].reverse().map((entry, idx) => (
                <tr key={idx}>
                  <td>{entry.date}</td>
                  <td>{entry.status}</td>
                  <td>{entry.location}</td>
                  <td>{entry.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default HistoryModal;

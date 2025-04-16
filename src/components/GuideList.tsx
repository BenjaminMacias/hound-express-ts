import React from "react";
import { Guide } from "../interfaces/Guide";

// Props que recibe la lista de guías
interface Props {
  guides: Guide[];
  query: string;
  onUpdateStatus: (number: string) => void;
  onShowHistory: (number: string) => void;
}

const GuideList: React.FC<Props> = ({ guides, query, onUpdateStatus, onShowHistory }) => {
  return (
    <section className="guide-list" id="list">
      <h2 className="guide-list__title">Lista de Guías</h2>

      {guides.length === 0 && query ? (
        <p className="guide-list__empty">🔍 No se encontró ninguna guía con ese número.</p>
      ) : (
        <table className="guide-list__table">
          <thead>
            <tr>
              <th>Número</th>
              <th>Estado</th>
              <th>Origen</th>
              <th>Destino</th>
              <th>Fecha de creación</th>
              <th>Última actualización</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {guides.map((guide) => (
              <tr key={guide.number}>
                <td>{guide.number}</td>
                <td>{guide.status}</td>
                <td>{guide.origin}</td>
                <td>{guide.destination}</td>
                <td>{guide.creationDate}</td>
                <td>{guide.lastUpdate}</td>
                <td className="guide-list__actions">
                  {guide.status !== "Entregado" && (
                    <button onClick={() => onUpdateStatus(guide.number)}>Actualizar</button>
                  )}
                  <button onClick={() => onShowHistory(guide.number)}>Historial</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

export default GuideList;

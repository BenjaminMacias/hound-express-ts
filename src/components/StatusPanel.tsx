import React from "react";

// Props del componente: totales de cada estado
interface Props {
  total: number;
  inTransit: number;
  delivered: number;
}

// Panel de estado general del sistema
const StatusPanel: React.FC<Props> = ({ total, inTransit, delivered }) => {
  return (
    <section className="status-panel" id="status">
      <div className="status-panel__card">
        Guías activas: {total}
      </div>
      <div className="status-panel__card">
        En tránsito: {inTransit}
      </div>
      <div className="status-panel__card">
        Entregadas: {delivered}
      </div>
    </section>
  );
};

export default StatusPanel;

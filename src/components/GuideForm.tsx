import React, { useState, FormEvent } from "react";
import { Guide } from "../interfaces/Guide";

interface GuideFormProps {
  onAddGuide: (newGuide: Guide) => void;
  existingGuides: Guide[];
}

const GuideForm: React.FC<GuideFormProps> = ({ onAddGuide, existingGuides }) => {
  const [formData, setFormData] = useState({
    trackingNumber: "",
    origin: "",
    destination: "",
    recipient: "",
    creationDate: "",
    status: "Pendiente",
  });

  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const { trackingNumber, origin, destination, recipient, creationDate } = formData;

    // Validar que ningún campo esté vacío (ignorando espacios)
    if (
      !trackingNumber.trim() ||
      !origin.trim() ||
      !destination.trim() ||
      !recipient.trim() ||
      !creationDate.trim()
    ) {
      setError("Por favor completa todos los campos sin dejar espacios vacíos.");
      return;
    }

    const exists = existingGuides.some(
      g => g.number.trim().toLowerCase() === trackingNumber.trim().toLowerCase()
    );

    if (exists) {
      setError("El número de guía ya existe.");
      return;
    }

    const newGuide: Guide = {
      number: trackingNumber.trim(),
      origin: origin.trim(),
      destination: destination.trim(),
      recipient: recipient.trim(),
      creationDate: creationDate.trim(),
      status: "Pendiente",
      lastUpdate: creationDate.trim(),
      history: [],
    };

    onAddGuide(newGuide);

    // Resetear campos
    setFormData({
      trackingNumber: "",
      origin: "",
      destination: "",
      recipient: "",
      creationDate: "",
      status: "Pendiente",
    });

    setError(null);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Registrar Nueva Guía</h2>

      {error && <p className="form__error">{error}</p>}

      <input
        name="trackingNumber"
        value={formData.trackingNumber}
        onChange={handleChange}
        placeholder="Número de guía"
      />
      <input
        name="origin"
        value={formData.origin}
        onChange={handleChange}
        placeholder="Origen"
      />
      <input
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        placeholder="Destino"
      />
      <input
        name="recipient"
        value={formData.recipient}
        onChange={handleChange}
        placeholder="Destinatario"
      />
      <input
        type="date"
        name="creationDate"
        value={formData.creationDate}
        onChange={handleChange}
      />

      <button type="submit">Registrar</button>
    </form>
  );
};

export default GuideForm;

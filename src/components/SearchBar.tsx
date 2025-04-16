import React, { useState, useEffect } from "react";
import "../styles/_busqueda.scss";

interface Props {
  query: string;
  onQueryChange: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, onQueryChange }) => {
  const [input, setInput] = useState(query);

  // sincroniza el input con query cuando query cambia externamente
  useEffect(() => {
    setInput(query);
  }, [query]);

  const handleSearch = () => {
    onQueryChange(input.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClear = () => {
    setInput("");
    onQueryChange("");
  };

  return (
    <section className="search-section">
      <h2 className="search-section__title">Buscar guía</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por número de guía..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="search-bar__input"
        />
        <button className="search-bar__button" onClick={handleSearch}>
          🔍
        </button>
      </div>

      {/* ✅ Mostrar solo si hay texto en input */}
      {input && (
        <div className="search-bar__link-container">
          <button className="search-bar__clear-link" onClick={handleClear}>
            Mostrar todas las guías
          </button>
        </div>
      )}
    </section>
  );
};

export default SearchBar;

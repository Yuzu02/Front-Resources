import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(input);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter city name"
        className="w-full p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-green-400 to-cyan-400 text-white p-2 rounded-r-lg hover:bg-blue-700 transition-colors mt-4 ml-1"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;

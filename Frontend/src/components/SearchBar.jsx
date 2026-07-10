import React, { useState } from 'react';

export default function SearchBar({ onSearch, isLoading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto my-8">
      <div className="relative flex items-center shadow-md rounded-full overflow-hidden border border-gray-200 focus-within:border-blue-500 transition-all duration-200 p-1 bg-gray-100">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter medicine name (e.g., Paracetamol, Metformin)..."
          disabled={isLoading}
          className="w-full px-5 py-4 text-gray-800 bg-gray-100 placeholder-gray-400 focus:outline-none disabled:bg-gray-200 disabled:rounded-full"
        />
        <button
          type="submit"
          disabled={isLoading || !query.trim()}
          className="absolute right-2 px-6 py-2.5 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-full transition-colors duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>
    </form>
  );
}
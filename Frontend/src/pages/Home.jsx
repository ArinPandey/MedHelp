import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/SearchBar';
import Loading from '../components/Loading';
import MedicineCard from '../components/MedicineCard';

export default function Home() {
  const [medicineData, setMedicineData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (medicineName) => {
    setLoading(true);
    setError(null);
    setMedicineData(null);

    try {
      // const response = await axios.post('http://localhost:5000/api/medicine/search', {
      //   name: medicineName,
      // });
      const response = await axios.post('https://medhelp-a6al.onrender.com/api/medicine/search', {
        name: medicineName,
      });
      setMedicineData(response.data);
    } catch (err) {
      console.error('Frontend Fetch Error:', err);
      setError(
        err.response?.data?.error || 
        'Something went wrong while connecting to the server. Please ensure the backend is running.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-4xl text-gray-900 tracking-tight sm:text-5xl mb-4 font-sansation font-extrabold">
          Instant Medicine Insights
        </h1>
        <p className="text-lg text-gray-600 font-sora">
          Enter any therapeutic drug or medication name to receive clear, structured, and easy-to-read clinical breakdown profiles instantly.
        </p>
      </div>

      <SearchBar onSearch={handleSearch} isLoading={loading} />

      {loading && <Loading />}

      {error && (
        <div className="max-w-2xl mx-auto mt-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl text-center font-medium shadow-sm">
          {error}
        </div>
      )}

      {!loading && medicineData && <MedicineCard data={medicineData} />}
    </div>
  );
}
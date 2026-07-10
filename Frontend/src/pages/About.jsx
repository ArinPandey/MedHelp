import React from 'react';
import { CheckCircle, ShieldAlert, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 bg-gray-200">
      {/* Back Button */}
      <Link 
        to="/" 
        className="inline-flex items-center space-x-2 text-sm font-medium text-gray-500 hover:text-blue-600 transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform text-black" />
        <span className="text-black">Back to Search</span>
      </Link>

      {/* Core Description */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm mb-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4 font-sora">About <span className="text-rose-500">MedHelp AI</span></h1>
        <p className="text-gray-600 leading-relaxed text-base font-sora">
          A fast, lightweight full-stack web application that simplifies complex medical data. It uses smart AI prompts to fetch structured information instantly, ensuring a clean and reliable user experience without the need for heavy data storage.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
          <Zap className="text-blue-600 mb-3" size={24} />
          <h3 className="font-bold text-gray-900 mb-2 font-sora font-bold">Structured Outputs</h3>
          <p className="text-sm text-gray-500 leading-relaxed font-sora">Forces API engines to comply with strict layout formats for error-free UI component population.</p>
        </div>
        <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
          <CheckCircle className="text-emerald-600 mb-3" size={24} />
          <h3 className="font-bold text-gray-900 mb-2 font-sora font-bold">Plain Language</h3>
          <p className="text-sm text-gray-500 leading-relaxed font-sora">Translates dense academic bio-mechanics into straightforward insights for everyday readers.</p>
        </div>
        <div className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm">
          <ShieldAlert className="text-amber-600 mb-3" size={24} />
          <h3 className="font-bold text-gray-900 mb-2 font-sora font-bold">Risk Safeguards</h3>
          <p className="text-sm text-gray-500 leading-relaxed font-sora">Exposes crucial interaction warnings, contraindications, and storage guidelines immediately.</p>
        </div>
      </div>
    </div>
  );
}
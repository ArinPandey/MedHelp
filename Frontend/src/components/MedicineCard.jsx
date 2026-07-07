import React from 'react';

export default function MedicineCard({ data }) {
  if (data.genericName?.toLowerCase().includes("information not available")) {
    return (
      <div className="p-6 bg-red-50 border border-red-200 rounded-xl text-center text-red-700 max-w-2xl mx-auto font-lato">
        Medication not recognized. Please double-check the spelling and try again.
      </div>
    );
  }

  const InfoSection = ({ title, content, badgeColor = "bg-blue-50 text-blue-800" }) => (
    <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-md ${badgeColor} mb-2 font-lato uppercase tracking-wide`}>
        {title}
      </span>
      <p className="text-gray-700 leading-relaxed text-sm font-lato">
        {content || 'N/A'}
      </p>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto my-6 space-y-6">
      {/* Header Banner */}
      <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg text-white">
        <h2 className="text-3xl font-bold tracking-tight mb-1 font-sansation">
          {data.genericName}
        </h2>
        <p className="text-blue-100 text-sm font-sora">
          AI-Generated Pharmaceutical Profile
        </p>
      </div>

      {/* Grid Layout for Structured Data */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <InfoSection title="Primary Uses" content={data.uses} />
        <InfoSection title="Mechanism of Action" content={data.howItWorks} />
        <InfoSection title="General Dosage Guidance" content={data.dosage} />
        <InfoSection title="Storage Guidelines" content={data.storage} />
        <InfoSection title="Common Side Effects" content={data.commonSideEffects} badgeColor="bg-amber-50 text-amber-800" />
        <InfoSection title="Serious Side Effects" content={data.seriousSideEffects} badgeColor="bg-orange-50 text-orange-800" />
        <InfoSection title="Who Should Avoid This" content={data.whoShouldAvoid} badgeColor="bg-red-50 text-red-800" />
        <InfoSection title="Drug Interactions" content={data.interactions} badgeColor="bg-purple-50 text-purple-800" />
        <InfoSection title="Pregnancy & Breastfeeding Safety" content={data.pregnancySafety} badgeColor="bg-teal-50 text-teal-800" />
        <InfoSection title="Important Precautions" content={data.precautions} badgeColor="bg-gray-100 text-gray-800" />
      </div>

      {/* Disclaimer Section */}
      <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center text-xs text-gray-500 italic font-sora">
        {data.disclaimer || "Disclaimer: This is AI-generated information and does not substitute professional medical advice. Always consult a qualified physician before starting any medication."}
      </div>
    </div>
  );
}

// import React from 'react';

// export default function MedicineCard({ data }) {
//   if (data.genericName?.toLowerCase().includes("information not available")) {
//     return (
//       <div className="p-6 bg-red-50 border border-red-200 rounded-xl text-center text-red-700 max-w-2xl mx-auto">
//         Medication not recognized. Please double-check the spelling and try again.
//       </div>
//     );
//   }

//   const InfoSection = ({ title, content, badgeColor = "bg-blue-50 text-blue-800" }) => (
//     <div className="p-5 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
//       <span className={`inline-block px-2.5 py-1 text-xs font-semibold rounded-md ${badgeColor} mb-2`}>
//         {title}
//       </span>
//       <p className="text-gray-700 leading-relaxed text-sm">{content || 'N/A'}</p>
//     </div>
//   );

//   return (
//     <div className="w-full max-w-4xl mx-auto my-6 space-y-6">
//       {/* Header Banner */}
//       <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-lg text-white">
//         <h2 className="text-3xl font-bold tracking-tight mb-1">{data.genericName}</h2>
//         <p className="text-blue-100 text-sm">AI-Generated Pharmaceutical Profile</p>
//       </div>

//       {/* Grid Layout for Structured Data */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//         <InfoSection title="Primary Uses" content={data.uses} />
//         <InfoSection title="Mechanism of Action" content={data.howItWorks} />
//         <InfoSection title="General Dosage Guidance" content={data.dosage} />
//         <InfoSection title="Storage Guidelines" content={data.storage} />
//         <InfoSection title="Common Side Effects" content={data.commonSideEffects} badgeColor="bg-amber-50 text-amber-800" />
//         <InfoSection title="Serious Side Effects" content={data.seriousSideEffects} badgeColor="bg-orange-50 text-orange-800" />
//         <InfoSection title="Who Should Avoid This" content={data.whoShouldAvoid} badgeColor="bg-red-50 text-red-800" />
//         <InfoSection title="Drug Interactions" content={data.interactions} badgeColor="bg-purple-50 text-purple-800" />
//         <InfoSection title="Pregnancy & Breastfeeding Safety" content={data.pregnancySafety} badgeColor="bg-teal-50 text-teal-800" />
//         <InfoSection title="Important Precautions" content={data.precautions} badgeColor="bg-gray-100 text-gray-800" />
//       </div>

//       {/* Disclaimer Section */}
//       <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl text-center text-xs text-gray-500 italic">
//         {data.disclaimer || "Disclaimer: This is AI-generated information and does not substitute professional medical advice. Always consult a qualified physician before starting any medication."}
//       </div>
//     </div>
//   );
// }
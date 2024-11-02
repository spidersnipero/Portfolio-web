// components/CertificateCard.tsx

import React from "react";

interface Certificate {
  title: string;
  provider: string;
  description: string;
  date: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

const CertificateCard: React.FC<CertificateCardProps> = ({ certificate }) => {
  return (
    <div className="relative flex items-center py-3">
      {/* Vertical line - hidden on small screens */}
      <div className="sm:block hidden">
        <div className="h-full w-4 absolute inset-0 flex justify-center items-center ">
          <div className="h-full w-0.5 bg-gray-500 pointer-events-none"></div>
        </div>
      </div>

      {/* Dot - hidden on small screens */}
      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gray-500 z-10 sm:block hidden"></div>

      <div className="ml-8 bg-white shadow-md rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-2">{certificate.title}</h2>
        <p className="text-gray-600 mb-2">{certificate.provider}</p>
        <p className="text-gray-800">{certificate.description}</p>
        <p className="text-gray-600 mt-2">{certificate.date}</p>
      </div>
    </div>
  );
};

export default CertificateCard;

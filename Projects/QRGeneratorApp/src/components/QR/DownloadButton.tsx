import React from "react";
import { qrCode } from "./QRCodeConfig";

interface DownloadButtonProps {
  qrValue: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ qrValue }) => {
  const handleDownload = () => {
    if (qrValue) {
      qrCode.download({ name: "qrcode", extension: "png" });
    }
  };

  return (
    <div className="mt-2">
      <button
        onClick={handleDownload}
        type="button"
        disabled={!qrValue}
        className="mt-4 px-4 py-2 bg-accent text-white rounded-md hover:bg-accent-hover focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 disabled:hidden disabled:cursor-not-allowed"
      >
        Download QR Code
      </button>
    </div>
  );
};

export default DownloadButton;

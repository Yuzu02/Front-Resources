import React, { useEffect, useRef } from "react";
import { qrCode } from "./QRCodeConfig";

interface QRCodeDisplayProps {
  value: string;
}

const QRCodeDisplay: React.FC<QRCodeDisplayProps> = ({ value }) => {
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (qrRef.current && value) {
      qrRef.current.innerHTML = "";
      qrCode.update({ data: value });
      qrCode.append(qrRef.current);
    }
  }, [value]);

  return (
    <div className="mt-4">
      {value && (
        <div className="p-4 bg-white rounded-md shadow-md">
          <div ref={qrRef} />
        </div>
      )}
    </div>
  );
};

export default QRCodeDisplay;

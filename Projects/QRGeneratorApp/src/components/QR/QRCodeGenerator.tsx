import { useEffect, useState } from "react";
import { InputField, QRCodeDisplay, DownloadButton } from "../../components";
import { qrCode } from "./QRCodeConfig";

const QRCodeGenerator: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  useEffect(() => {
    qrCode.update({ data: inputValue });
  }, [inputValue]);

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto">
      <InputField value={inputValue} onChange={handleInputChange} />
      <QRCodeDisplay value={inputValue} />
      <DownloadButton qrValue={inputValue} />
    </div>
  );
};

export default QRCodeGenerator;

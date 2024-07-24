import { QRCodeGenerator, Header } from "./components/";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <QRCodeGenerator />
      </main>
    </div>
  );
};

export default App;

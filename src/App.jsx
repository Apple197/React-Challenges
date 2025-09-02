import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <div className="react-fact-card">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </main>
  );
}

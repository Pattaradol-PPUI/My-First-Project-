import { Footer } from "./components/Footer";
import { Header } from "./components/header";
import { ArticlesSection } from "./components/Article";
import { MainContent } from "./components/Maincontent.JSX";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainContent />
      <ArticlesSection />
      <Footer />
    </div>
  );
}

export default App;

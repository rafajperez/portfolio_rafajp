import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors">
        <NavBar />

        <main className="grow pt-16 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

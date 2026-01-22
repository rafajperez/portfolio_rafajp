import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/layout/Navbar";
import AppRoutes from "./routes";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        <NavBar />
        <main className="pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AppRoutes />
        </main>
      </div>
    </Router>
  );
}

export default App;

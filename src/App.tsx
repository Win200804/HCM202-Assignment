// Main App component with routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { QuizProvider } from './contexts/QuizContext';
import { Home } from './pages/Home';
import { Content } from './pages/Content';
import { Quiz } from './pages/Quiz';
import { Analysis } from './pages/Analysis';
import { ROUTES } from './utils/constants';

function App() {
  return (
    <ThemeProvider>
      <QuizProvider>
        <Router>
          <Routes>
            <Route path={ROUTES.HOME} element={<Home />} />
            <Route path={ROUTES.CONTENT} element={<Content />} />
            <Route path={ROUTES.QUIZ} element={<Quiz />} />
            <Route path={ROUTES.ANALYSIS} element={<Analysis />} />
          </Routes>
        </Router>
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;


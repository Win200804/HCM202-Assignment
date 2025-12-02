// Main App component with routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { QuizProvider } from './contexts/QuizContext';
import { Home } from './pages/Home';
import { Content } from './pages/Content';
import { Quiz } from './pages/Quiz';
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
          </Routes>
        </Router>
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;


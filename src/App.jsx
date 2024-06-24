import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './Layouts/AppLayout/AppLayout';
import BookLayout from './Layouts/BookLayout/BookLayout';
export const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route index element={<AppLayout />} />
          <Route path="/book/:id" element={<BookLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

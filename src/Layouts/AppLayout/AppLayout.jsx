import AsideBar from '../../components/AsideBar/AsideBar';
import BooksList from '../../components/BooksList/BooksList';
import Header from '../../components/Header/Header';

export default function AppLayout() {
  return (
    <div className="app">
      <Header />
      <AsideBar />
      <BooksList />
    </div>
  );
}

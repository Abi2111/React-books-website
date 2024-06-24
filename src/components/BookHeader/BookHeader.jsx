import { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { storeContext } from '../../Context/booksContext';
import { useDomValue } from 'reactjs-editor';

export default function BookHeader() {
  const navigate = useNavigate();
  const { book } = useContext(storeContext);
  const { dom, setDom } = useDomValue();
  const params = useParams();
  console.log(params.id);

  function handleSave() {
    const updatedDomValue = {
      key: dom?.key,
      props: dom?.props,
      ref: dom?.ref,
      type: dom?.type,
    };

    localStorage.setItem(`dom${params.id}`, JSON.stringify(updatedDomValue));
  }

  useEffect(() => {
    const savedDom = localStorage.getItem(`dom${params.id}`);
    if (savedDom) {
      setDom(JSON.parse(savedDom));
    }
  }, [params.id, setDom]);

  return (
    <div className="book-header">
      <div className="book-header-back" onClick={() => navigate(-1)}>
        <ion-icon name="chevron-back"></ion-icon>
      </div>
      <div className="book-header-title">
        <h2>{book.title}</h2>
      </div>
      <div className="book-header-items">
        <button onClick={handleSave}>Save</button>
        <div>
          <ion-icon name="settings"></ion-icon>
        </div>
        <div>
          <ion-icon name="share-social"></ion-icon>
        </div>
        <div>
          <ion-icon name="search"></ion-icon>
        </div>
      </div>
    </div>
  );
}

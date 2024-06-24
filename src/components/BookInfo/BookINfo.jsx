import { useContext, useEffect } from 'react';
import { storeContext } from '../../Context/booksContext';
import { Editor, useDomValue } from 'reactjs-editor';
import { useNavigate, useParams } from 'react-router-dom';

export default function BookContent() {
  const { book } = useContext(storeContext);
  const navigate = useNavigate();
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
    } else {
      setDom('');
    }
    console.log(savedDom);
  }, [params.id, setDom]);

  return (
    <div>
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
      <div className="book-content">
        <div className="book-content-header">
          <h1>{book.title}</h1>
          <article>By {book.author}</article>
        </div>
        <Editor
          htmlContent={`<p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            velit labore nam, iure dolore atque fugit asperiores non
            perspiciatis. Quis tempore, magnam aspernatur eos sequi corrupti?
            Rem possimus beatae earum dolorum fugiat sapiente incidunt pariatur
            quibusdam vero atque vitae iure inventore eum eius obcaecati, hic
            iste nihil commodi unde laudantium reiciendis, repellendus fuga vel.
            Illo maxime quaerat eos pariatur, nulla reiciendis tenetur
            asperiores impedit, sequi cupiditate deleniti, dolorem mollitia!
            Perspiciatis sit nam harum dicta facilis esse? Natus amet quia hic
            sed tenetur dolore, fugit praesentium! Excepturi voluptatum error
            sunt possimus, sequi, exercitationem necessitatibus culpa nam ipsum
            nisi doloribus. Doloremque, debitis aspernatur asperiores laudantium
            accusantium suscipit atque quos rerum, fuga aperiam perferendis
            eligendi aliquid sapiente consequuntur veniam. Sunt eligendi, fugiat
            sint exercitationem non at omnis dicta voluptates veniam ad natus,
            facilis nam soluta, distinctio sapiente explicabo quia inventore
            iure quam et optio saepe placeat repellat. Modi rem dolorum
            veritatis qui nostrum facere? Voluptate, totam mollitia nihil
            asperiores aspernatur exercitationem facilis vel quibusdam vero
            recusandae! Cumque itaque eveniet nobis illum optio. Voluptatum
            mollitia consectetur aut nisi suscipit ad facere corrupti eveniet
            praesentium. Mollitia impedit nostrum ad, tempora illum esse id quis
            consequuntur iste? Veritatis maxime rerum dicta debitis consequuntur
            rem nesciunt omnis ullam explicabo quo recusandae similique, neque
            aperiam cumque commodi praesentium repellendus reprehenderit
            consequatur ipsam? Atque corporis deserunt non, nulla dignissimos
            dolorum dolor tenetur ut iure voluptate corrupti placeat natus rerum
            quo voluptates voluptatem eveniet, enim cumque aliquid. Praesentium
            aperiam mollitia laudantium sapiente suscipit reprehenderit omnis
            nam, necessitatibus corrupti eveniet ab obcaecati sunt! Architecto
            dignissimos vel enim laboriosam cum vitae optio sapiente nisi
            blanditiis nulla reiciendis quam fugiat eum mollitia nihil excepturi
            beatae atque consectetur magni rerum, quasi magnam. Minus deleniti
            libero et illum, adipisci recusandae nobis voluptatem error ex
            provident reiciendis aut unde impedit dolore natus maxime, officia,
            dolor excepturi modi. Voluptatibus ipsum nostrum ad incidunt
            deleniti ea, libero laboriosam voluptas consequuntur quidem
            obcaecati molestias facere quaerat necessitatibus dolorum corporis,
            laudantium sequi nulla neque itaque eum quod provident debitis!
            Totam animi reiciendis porro, sit ut deleniti in illum aperiam optio
            repellat suscipit, molestiae a et, beatae debitis quasi consequuntur
            inventore officiis at modi earum voluptates! Nesciunt recusandae
            quod dolore eius labore eveniet molestias quae impedit? Dolor
            asperiores sapiente laboriosam saepe eum. Mollitia ipsum nobis, iure
            minima sit qui. Inventore reprehenderit est quisquam, facere nemo
            doloremque magni fugit, deserunt dolor fuga culpa repudiandae
            facilis repellendus fugiat maxime consectetur recusandae. Reiciendis
            temporibus velit ab ad explicabo fuga possimus mollitia consequuntur
            necessitatibus? Cupiditate autem mollitia laborum eaque aut, sed sit
            ullam quos dolore! Consequuntur facere veniam dolorum maxime saepe
            voluptatum consectetur? Voluptatibus quasi commodi ullam eligendi
            sunt rem aspernatur at provident, accusantium fuga eaque eos
            reprehenderit labore atque. Animi fugit deleniti, praesentium
            sapiente quia illum. Autem reiciendis magni excepturi id impedit
            sed, minus quasi ducimus velit assumenda rerum voluptatibus aliquam,
            laborum voluptatum saepe obcaecati deleniti quis eum nemo dolorem
            quam. Ea eum neque eligendi laborum? Architecto ad ratione a labore
            cum distinctio, in laboriosam tempora neque! Itaque, quisquam
            deserunt laboriosam, repellat, facere aliquid quia est aliquam
            consequatur aspernatur placeat repellendus harum recusandae adipisci
            accusamus at! Nulla hic, amet voluptas eveniet voluptate nisi
            asperiores harum est illum sint, voluptatibus culpa repellendus?
            Dolor iste architecto cupiditate iusto est, molestiae cum ratione
            nam dignissimos, tempora dolorem esse. Labore, adipisci? A rem fugit
            voluptas minima molestiae autem eligendi cupiditate tempore,
            dolorem, cumque minus veniam doloribus voluptatem similique maiores.
            Ea aspernatur autem, similique velit adipisci nihil cum dolorem
            vitae iste reiciendis consequuntur, ad enim accusantium iusto
            voluptatem excepturi architecto aut. Quisquam est eos itaque
            explicabo. Cumque dicta perferendis temporibus sit, minima vel
            tenetur iure, accusantium, dignissimos quia repellendus ea dolorum
            eius sunt. Nulla iure ipsam suscipit accusantium maxime ad, repellat
            ullam numquam sapiente minus neque obcaecati earum et rem deleniti
            dicta dolorem pariatur laboriosam, voluptatem nostrum delectus
            dignissimos. Possimus reiciendis beatae laboriosam est ea, iure
            recusandae corporis libero maxime rem? Quisquam, vel atque, in
            accusantium et culpa inventore qui praesentium officia nostrum sunt
            dignissimos incidunt. Obcaecati expedita vel esse pariatur rerum
            perferendis distinctio libero similique suscipit voluptatibus autem,
            laborum amet dolores iste ipsam ipsa atque aspernatur laboriosam
            cumque accusamus quidem. Quidem non expedita earum libero velit, vel
            iure explicabo, quae dignissimos officia recusandae itaque animi eum
            sapiente harum.
          </p>`}
        />
      </div>
    </div>
  );
}

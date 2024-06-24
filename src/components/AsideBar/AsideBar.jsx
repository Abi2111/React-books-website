export default function AsideBar() {
  return (
    <div className="asidebar">
      <div className="asidebar-logo">
        <h1>Book App</h1>
      </div>
      <ul className="asidebar-items">
        <li>
          <span>
            <ion-icon name="home"></ion-icon>
          </span>
          Home
        </li>
        <li>
          <span>
            <ion-icon name="call"></ion-icon>
          </span>
          Contact
        </li>
        <li>
          <span>
            <ion-icon name="information-circle"></ion-icon>
          </span>
          About us
        </li>
        <li>
          <span>
            <ion-icon name="settings"></ion-icon>
          </span>
          Settings
        </li>
        <li>
          <span>
            <ion-icon name="star-half"></ion-icon>
          </span>
          Rate us
        </li>
        <li>
          <span>
            <ion-icon name="eye"></ion-icon>
          </span>
          Change password
        </li>
      </ul>
    </div>
  );
}

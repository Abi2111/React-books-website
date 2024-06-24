export default function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-search">
        <form>
          <input
            type="text"
            name="search"
            id="seach"
            placeholder="Tell me what you like to read and we will get that..."
          />
        </form>
      </div>
      <div className="navbar-profile">
        <div>
          <img src="./images/profile.jpg" alt="profile" />
        </div>
      </div>
    </nav>
  );
}

import {
  Code2,
  Search,
  UserCircle
} from "lucide-react";

function Header() {
  return (
    <header className="site-header">

      {/* Logo */}
      <a href="/" className="brand">

        <span className="brand-icon">
          <Code2 size={22} />
        </span>

        <span>
          DEV@Deakin
        </span>

      </a>

      {/* Navigation */}
      <nav className="main-nav">

        <a href="#articles">
          Articles
        </a>

        <a href="#tutorials">
          Tutorials
        </a>

        <a href="#community">
          Community
        </a>

      </nav>

      {/* Header buttons */}
      <div className="header-actions">

        <button
          className="icon-button"
          aria-label="Search"
        >
          <Search size={20} />
        </button>

        <button className="profile-button">

          <UserCircle size={20} />

          Sign in

        </button>

      </div>

    </header>
  );
}

export default Header;
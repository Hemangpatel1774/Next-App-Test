import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar">
    <h1>My Next App</h1>
    <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/users">All Users</Link>
      </div>
    </nav>
  );
};

export default Navbar;

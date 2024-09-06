import React from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const authStatus = useSelector((state) => state.auth.status); // Make sure status is correctly set
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true, // Home is always active
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus, // Only active when not authenticated
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus, // Only active when not authenticated
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus, // Only active when authenticated
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus, // Only active when authenticated
    },
  ];

  // Function to check if an item is active based on the current location
  const getActiveClass = (slug) => {
    return window.location.pathname === slug
      ? "bg-blue-500 text-white"
      : "hover:bg-blue-100";
  };

  return (
    <header className="py-3 shadow bg-white">
      <Container>
        <nav className="flex">
          <div className="mr-4">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`inline-block px-6 py-2 duration-200 rounded-full ${getActiveClass(
                      item.slug
                    )}`} // Apply active class
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;

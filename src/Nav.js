import React, { useEffect, useState } from "react";
import "./Nav.css"

function Nav() {

    const [show, handleShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",() => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://e7.pngegg.com/pngimages/422/132/png-clipart-logo-chromecast-netflix-4k-resolution-design-text-logo-thumbnail.png"
        // src="https://upload.wikimedia.org/wikipedia/commons/0/0f/"
        alt="Netflix Logo"
      />

      <img
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix Logo"
      />
    </div>
  );
}

export default Nav;

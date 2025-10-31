import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const NavbarContext = createContext();
export const NavbarColorContext = createContext();

export function NavContext({ children }) {
  const [navOpen, setNavOpen] = useState(false);
  const [navColor, setNavColor] = useState("white");

  const locate = useLocation().pathname;
  useEffect(() => {
    if (locate == "/projects" || locate == "/agence") {
      setNavColor("black");
    } else {
      setNavColor("white");
    }
  });

  return (
    <div>
      <NavbarContext.Provider value={[navOpen, setNavOpen]}>
        <NavbarColorContext.Provider value={[navColor, setNavColor]}>
          {children}
        </NavbarColorContext.Provider>
      </NavbarContext.Provider>
    </div>
  );
}

// export default NavContext;

export const useNavbarContext = () => {
  return useContext(NavbarContext);
};

export const useNavbarColorContext = () => {
  return useContext(NavbarColorContext);
};

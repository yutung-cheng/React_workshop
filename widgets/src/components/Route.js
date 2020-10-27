import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  //current path sets to whatever the pathname is.
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => {
      //Whenever the pathname changes, we just update currentPath to be once again whatever pathname is
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", onLocationChange);

    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []); //Run the first time initial at the screen.

  // When provide one JSX inside another JAX, the inner one provide the outer one as a prop called "children".
  return currentPath === path ? children : null;
};

export default Route;

import React from "react";

const Link = ({ className, href, children }) => {
  //Do Not Do a full page reload
  const onClick = event => {
    // Add a check statment if user is holding Command/CTRL key to open the page in the new tab.
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();

    //This function is to change the URL without reloading the pages.
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;

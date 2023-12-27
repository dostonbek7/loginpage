import React from "react";

function Footer() {
  return (
    <footer className=" fixed bottom-0 left-0 right-0 z-30 bg-neutral-500 py-4 text-center font-medium">
      <p>All Right Reserved. {new Date().getFullYear()}</p>
    </footer>
  )
}

export default Footer;

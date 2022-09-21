import React from 'react';

export default function Footer() {
  return (
    <footer>
      <p className="center">
        &copy; Earth's Crust 🌱 {new Date().getFullYear()}
      </p>
    </footer>
  );
}

function Footer({ message }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <h3>{message}</h3>
        </div>

        {/* <div className="footer-bottom">
          <p>&copy; 2025 Umer Nawaz. All rights reserved. | Designed with love</p>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;

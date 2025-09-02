function Footer() {
  const currentTime = new Date();
  return (
    <p className="footer-text">
      &copy;{currentTime.getFullYear()} React. All rights reserved.
    </p>
  );
}

export default Footer;

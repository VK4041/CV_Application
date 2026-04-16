import "../styles/footer.css";
export default function Footer() {
  return (
    <footer className="footer flex flex-col">
      <p className="footerText">Made by Varun Kumar</p>
      <a
        href="https://github.com/VK4041"
        target="_blank"
        rel="noreferrer noopener"
      >
        <i className="fa-brands fa-github"></i>
      </a>
    </footer>
  );
}

import { Footer1 } from "../data";
import { Footer2 } from "../data";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {Footer1.map((key) => {
          return (
            <li>
              <a href={key.href} className="footer-link">
                {key.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {Footer2.map((key) => {
          return (
            <li id={key.id}>
              <a href={key.link} target="__blank" className="footer-icon">
                <i className={key.icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;

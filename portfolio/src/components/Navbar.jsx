import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className=" mb:20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className=" m-8  flex text-2xl font-bold  justify-center font-sans text-white">
          Portfolio
        </h1>
      </div>
      <div className="m-8 flex justify-center items-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/dalipyadav/">
          <FaLinkedin />
        </a>
        <a href="https://github.com/your-github-dalip2734">
          <FaGithub />
        </a>
        <a href="https://twitter.com/your-twitter-dalipyadav68">
          <FaSquareXTwitter />
        </a>
        <a href="https://www.instagram.com/itz_dalipyadav/">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

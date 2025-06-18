import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => (
  <footer id="about" className="bg-sky-900 text-white pt-10 pb-6">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      <div>
        <h2 className="text-lg font-semibold mb-2">School</h2>
        <p className="text-sm text-gray-300">
          Cheran Matriculation Higher Secondary School
        </p>
        <p className="text-sm text-gray-300">Vennaimalai, Karur, Tamil Nadu</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">College</h2>
        <p className="text-sm text-gray-300">Kongu Engineering College</p>
        <p className="text-sm text-gray-300">Perundurai, Erode, Tamil Nadu</p>
        <p className="text-sm text-gray-300">B.Tech. AI Data Science</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Contact</h2>
        <p className="text-sm text-gray-300">
          Email:{" "}
          <a
            rel="noopener noreferrer"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=manojitbalasubramanianr@gmail.com"
            target="_blank"
            className="text-sm text-gray-300"
          >
            manojitbalasubramanianr@gmail.com
          </a>
        </p>
        <p className="text-sm text-gray-300">Mobile: +91 9489230788</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Follow Me</h2>
        <div className="flex space-x-4 mt-2 text-xl">
          <a
            href="https://twitter.com/manojitrb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="hover:text-blue-300" />
          </a>
          <a
            href="https://linkedin.com/in/manojitbalasubramanian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="hover:text-blue-500" />
          </a>
          <a
            href="https://github.com/manojitbalasubramanian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-400" />
          </a>
          <a
            href="https://instagram.com/manojit_balasubramanian"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-400" />
          </a>
        </div>
      </div>
    </div>
    <div className="text-center text-sm text-gray-400 mt-8">
      © {new Date().getFullYear()} Manojit Balasubramanian. All rights reserved.
    </div>
  </footer>
);

export default Footer;

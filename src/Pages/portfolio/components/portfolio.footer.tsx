const PortfolioFooter = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer className="border-t border-black/20 mt-20 py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Name & Copyright */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Nandini Tarafdar</span>. All Rights
          Reserved.
        </p>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <button onClick={() => scrollToSection("hero")} className="hover:font-semibold">
            Home
          </button>
          <button onClick={() => scrollToSection("about")} className="hover:font-semibold">
            About
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:font-semibold">
            Projects
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:font-semibold">
            Contact
          </button>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 text-sm">
          <a
            href="https://github.com/Nandini559"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-700"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/nandinitarafdar-708189354"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-amber-700"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default PortfolioFooter;
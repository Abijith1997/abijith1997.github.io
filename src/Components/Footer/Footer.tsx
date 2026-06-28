import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 px-6 md:px-12 mt-16 border-t border-neutral-200 dark:border-neutral-850 bg-transparent transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Copyright */}
        <p className="text-xs text-neutral-400 dark:text-neutral-500 font-mono text-center md:text-left">
          &copy; {currentYear} Abijith M A. All rights reserved.
        </p>

        {/* Right Side: Social Icons */}
        <ul className="flex items-center justify-center gap-6">
          <li className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">
            <a
              href="https://www.linkedin.com/in/abijith-asokan-784a01338/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin size={20} />
            </a>
          </li>
          <li className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">
            <a
              href="https://www.instagram.com/abijith.01/?locale=de&hl=am-et"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <IconBrandInstagram size={20} />
            </a>
          </li>
          <li className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">
            <a 
              href="https://github.com/Abijith1997" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconBrandGithub size={20} />
            </a>
          </li>
          <li className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">
            <a 
              href="mailto:abijithasokan@gmail.com"
              aria-label="Gmail"
            >
              <IconBrandGmail size={20} />
            </a>
          </li>
          <li className="text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300">
            <a 
              href="https://wa.me/qr/RI7PZLNXJQCFG1" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <IconBrandWhatsapp size={20} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

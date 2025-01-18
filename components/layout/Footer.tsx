import React from 'react';

const Footer: React.FC = () => {
  const footerLinks = [
    { title: 'About', links: ['How it works', 'Careers', 'Investors', 'Partners'] },
    { title: 'Support', links: ['Help Center', 'Safety', 'Cancellation', 'COVID-19'] },
    { title: 'Community', links: ['Blog', 'Press', 'Forum', 'Events'] },
  ];

  return (
    <footer className="bg-red-500 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-white hover:text-gray-400">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 text-center text-white">
          <p>© 2024 ALX Listing App.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

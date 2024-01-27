import Link from 'next/link';

const Navbar = () => {

const pages = [
    { id: 1, route: '/', label: 'Home' },
    { id: 2, route: '/about', label: 'About' },
    { id: 3, route: '/contact', label: 'Contact' },
    // Add more pages as needed
    ];
    
  return (
    <nav className="flex space-x-4">
      {pages.map((page) => (
        <Link key={page.id} href={page.route}>
          {page.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;

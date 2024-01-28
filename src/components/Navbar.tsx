import Link from 'next/link';

const Navbar = () => {

  const pages = [
    { id: 1, route: '/', label: 'Home' },
    { id: 2, route: '/about', label: 'About' },
    { id: 3, route: '/contact', label: 'Contact' },
    { id: 4, route: '/podcastList', label: 'My Podcasts' },
    // Add more pages as needed
  ];
    
  return (
    <nav className="fixed top-0 left-0 w-full bg-white z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2">
          <div className="flex space-x-4">
            {pages.map((page) => (
              <Link className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium" key={page.id} href={page.route}>
                {page.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700 px-3 py-2 rounded-md text-sm font-medium">Pod Pro</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

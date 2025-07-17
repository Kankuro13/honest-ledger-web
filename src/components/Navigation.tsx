import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    { name: 'Tax Services', path: '/services/tax' },
    { name: 'Audit & Assurance', path: '/services/audit' },
    { name: 'Bookkeeping', path: '/services/bookkeeping' },
    { name: 'Financial Consulting', path: '/services/consulting' },
    { name: 'Business Advisory', path: '/services/advisory' },
  ];

  const NavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? 'text-primary border-b-2 border-primary'
        : 'text-foreground hover:text-primary'
    }`;

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-xl font-bold text-primary">
              Local Services
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={NavLinkClass}>
                Home
              </NavLink>
              <NavLink to="/about" className={NavLinkClass}>
                About
              </NavLink>
              
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-card border border-border">
                  {services.map((service) => (
                    <DropdownMenuItem key={service.path} asChild>
                      <NavLink
                        to={service.path}
                        className="w-full px-4 py-2 text-sm text-foreground hover:text-primary hover:bg-accent"
                      >
                        {service.name}
                      </NavLink>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <NavLink to="/industries" className={NavLinkClass}>
                Industries
              </NavLink>
              <NavLink to="/team" className={NavLinkClass}>
                Team
              </NavLink>
              <NavLink to="/credentials" className={NavLinkClass}>
                Credentials
              </NavLink>
              <NavLink to="/resources" className={NavLinkClass}>
                Resources
              </NavLink>
              <NavLink to="/contact" className={NavLinkClass}>
                Contact
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card border-t border-border">
              <NavLink
                to="/"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </NavLink>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-base font-medium text-foreground mb-2">Services</div>
                {services.map((service) => (
                  <NavLink
                    key={service.path}
                    to={service.path}
                    className="block px-3 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-accent rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </NavLink>
                ))}
              </div>

              <NavLink
                to="/industries"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Industries
              </NavLink>
              <NavLink
                to="/team"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </NavLink>
              <NavLink
                to="/credentials"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Credentials
              </NavLink>
              <NavLink
                to="/resources"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </NavLink>
              <NavLink
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-accent rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
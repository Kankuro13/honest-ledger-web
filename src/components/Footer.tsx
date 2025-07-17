import { NavLink } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-professional text-professional-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Local Services</h3>
            <p className="text-professional-foreground/80 mb-4 leading-relaxed">
              Providing professional accounting services with integrity and objectivity. 
              Our experienced team delivers reliable financial solutions tailored to your business needs.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Biratnagar-12, Main Road, Morang, Nepal</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>+977-21-523456</span>
              </div>
              <div className="flex items-center text-sm">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>info@localservices.com.np</span>
              </div>
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Sunday - Friday: 10:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <NavLink to="/about" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                About Us
              </NavLink>
              <NavLink to="/team" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                Our Team
              </NavLink>
              <NavLink to="/credentials" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                Credentials
              </NavLink>
              <NavLink to="/contact" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                Contact Us
              </NavLink>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-md font-semibold mb-4">Services</h4>
            <nav className="space-y-2">
              <NavLink to="/services/tax" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                Tax Services
              </NavLink>
              <NavLink to="/services/audit" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                Audit & Assurance
              </NavLink>
              <NavLink to="/services/bookkeeping" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                Bookkeeping
              </NavLink>
              <NavLink to="/services/consulting" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                Financial Consulting
              </NavLink>
            </nav>
          </div>

          {/* Government Links */}
          <div>
            <h4 className="text-md font-semibold mb-4">Nepal Government Resources</h4>
            <nav className="space-y-2">
              <a href="https://www.ird.gov.np" target="_blank" rel="noopener noreferrer" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                IRD - Inland Revenue Department
              </a>
              <a href="https://www.mof.gov.np" target="_blank" rel="noopener noreferrer" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                Ministry of Finance
              </a>
              <a href="https://www.sebon.gov.np" target="_blank" rel="noopener noreferrer" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                SEBON - Securities Board of Nepal
              </a>
              <a href="https://www.ican.org.np" target="_blank" rel="noopener noreferrer" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                ICAN - Institute of Chartered Accountants
              </a>
              <a href="https://www.nrb.org.np" target="_blank" rel="noopener noreferrer" className="block text-sm text-professional-foreground/80 hover:text-professional-foreground transition-colors">
                NRB - Nepal Rastra Bank
              </a>
            </nav>
          </div>
        </div>

        <div className="border-t border-professional-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-professional-foreground/60">
            <p>&copy; 2024 Local Services. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-4">
              <span>Licensed in Nepal</span>
              <span>•</span>
              <span>Member ICAN</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
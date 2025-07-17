import { NavLink } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  Shield, 
  Users, 
  Building, 
  TrendingUp, 
  FileText,
  Award,
  Phone
} from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Professional Accounting Services
              <span className="block text-primary">Built on Integrity</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Providing comprehensive financial solutions with objectivity and professional excellence. 
              Our experienced team delivers reliable accounting services tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <NavLink to="/contact">Schedule Consultation</NavLink>
              </Button>
              <Button asChild variant="outline" size="lg">
                <NavLink to="/about">Learn About Us</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Comprehensive accounting solutions designed to meet your business objectives with professional excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Calculator className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Tax Services</h3>
                <p className="text-muted-foreground mb-4">
                  Professional tax preparation and planning services for individuals and businesses.
                </p>
                <Button asChild variant="outline" size="sm">
                  <NavLink to="/services/tax">Learn More</NavLink>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Audit & Assurance</h3>
                <p className="text-muted-foreground mb-4">
                  Independent audit services providing objective financial statement verification.
                </p>
                <Button asChild variant="outline" size="sm">
                  <NavLink to="/services/audit">Learn More</NavLink>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Bookkeeping</h3>
                <p className="text-muted-foreground mb-4">
                  Accurate financial record maintenance and monthly reporting services.
                </p>
                <Button asChild variant="outline" size="sm">
                  <NavLink to="/services/bookkeeping">Learn More</NavLink>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <NavLink to="/services">View All Services</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground">
              Professional accounting services across diverse business sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <Building className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-medium">Healthcare</h4>
            </div>
            <div className="text-center p-4">
              <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-medium">Manufacturing</h4>
            </div>
            <div className="text-center p-4">
              <Users className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-medium">Non-Profit</h4>
            </div>
            <div className="text-center p-4">
              <Award className="h-10 w-10 text-primary mx-auto mb-3" />
              <h4 className="font-medium">Professional Services</h4>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="outline">
              <NavLink to="/industries">View All Industries</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Sterling & Associates</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Integrity</h3>
                <p className="text-muted-foreground">
                  Committed to ethical standards and transparent communication in all our professional relationships.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Experienced Team</h3>
                <p className="text-muted-foreground">
                  Licensed professionals with extensive experience across various industries and business challenges.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Credentials</h3>
                <p className="text-muted-foreground">
                  Licensed CPAs maintaining current certifications and continuing education requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline">
              <NavLink to="/about">Learn More About Us</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a consultation to discuss your accounting needs with our professional team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <NavLink to="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us Today
              </NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
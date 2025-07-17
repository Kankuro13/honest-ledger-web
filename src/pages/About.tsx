import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Shield, Users, Award, Target, Eye, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              About Sterling & Associates CPA
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A professional accounting firm committed to delivering exceptional financial services 
              with integrity, objectivity, and unwavering professional standards.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide professional accounting services that help our clients achieve their 
                  financial objectives while maintaining the highest standards of integrity and objectivity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as a trusted accounting partner known for professional excellence, 
                  ethical practice, and delivering reliable financial solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Our Values</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Professional integrity, client confidentiality, objective analysis, 
                  and commitment to continuing education and professional development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Professional History</h2>
            
            <div className="prose max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Sterling & Associates CPA was established with a fundamental commitment to providing 
                professional accounting services that meet the highest ethical standards. Our practice 
                is built on the principles of integrity, objectivity, and professional competence.
              </p>
              
              <p className="text-lg leading-relaxed mb-6">
                Since our founding, we have maintained our dedication to delivering accurate, reliable 
                financial services while adhering to all professional standards and regulations. Our 
                team consists of licensed CPAs who maintain current certifications and participate in 
                continuing professional education.
              </p>
              
              <p className="text-lg leading-relaxed">
                We serve clients across various industries, providing comprehensive accounting solutions 
                tailored to meet specific business needs. Our approach emphasizes clear communication, 
                timely service delivery, and maintaining the confidentiality that our clients expect 
                from their professional accounting relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Professional Approach</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We maintain strict adherence to professional standards while delivering personalized service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Ethical Standards</h3>
              <p className="text-muted-foreground text-sm">
                Maintaining professional integrity and objectivity in all client relationships and services.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center">
              <Users className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Client-Focused</h3>
              <p className="text-muted-foreground text-sm">
                Tailoring our services to meet specific client needs while maintaining professional boundaries.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center">
              <Award className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Professional Excellence</h3>
              <p className="text-muted-foreground text-sm">
                Commitment to continuing education and staying current with professional standards and regulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Affiliations</h2>
            <p className="text-lg text-muted-foreground">
              Active membership in professional organizations ensuring current knowledge and ethical standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-background rounded-lg">
              <h3 className="text-xl font-semibold mb-2">American Institute of CPAs (AICPA)</h3>
              <p className="text-muted-foreground">
                Members in good standing, maintaining continuing education requirements and ethical standards.
              </p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg">
              <h3 className="text-xl font-semibold mb-2">State CPA Society</h3>
              <p className="text-muted-foreground">
                Licensed practitioners maintaining current state certifications and local professional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Learn More About Our Services</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss how our professional accounting services can support your business objectives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <NavLink to="/contact">Contact Us</NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <NavLink to="/team">Meet Our Team</NavLink>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
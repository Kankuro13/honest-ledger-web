import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Award, GraduationCap, Users, Shield } from 'lucide-react';

export const Team = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Professional Team
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Licensed CPAs committed to maintaining professional standards and delivering 
              exceptional accounting services with integrity and expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Professional Excellence</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team consists of licensed Certified Public Accountants who maintain current 
              certifications and participate in continuing professional education to ensure 
              we provide the most current and accurate professional services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Licensed CPAs</h3>
                <p className="text-muted-foreground text-sm">
                  All team members maintain current CPA licenses and professional certifications.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <GraduationCap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Continuing Education</h3>
                <p className="text-muted-foreground text-sm">
                  Regular participation in professional development and continuing education programs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Collaborative Approach</h3>
                <p className="text-muted-foreground text-sm">
                  Team-based service delivery ensuring comprehensive coverage of client needs.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">Professional Standards</h3>
                <p className="text-muted-foreground text-sm">
                  Adherence to AICPA Code of Professional Conduct and ethical guidelines.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Qualifications */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Professional Qualifications</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Education & Certification</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Bachelor's and Master's degrees in Accounting from accredited institutions
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      CPA licenses maintained in good standing
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Continuing professional education completed annually
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Professional development in specialized areas
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Professional Experience</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Extensive experience in public accounting practice
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Industry-specific knowledge across multiple sectors
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Current knowledge of accounting standards and regulations
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      Professional project management and client service experience
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Professional Commitment</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Our team maintains the highest professional standards in all client relationships and service delivery.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Integrity</h3>
                <p className="text-muted-foreground text-sm">
                  Honest and transparent communication in all professional relationships and engagements.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Objectivity</h3>
                <p className="text-muted-foreground text-sm">
                  Impartial and unbiased professional judgment in all analyses and recommendations.
                </p>
              </div>
              
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">Confidentiality</h3>
                <p className="text-muted-foreground text-sm">
                  Strict maintenance of client confidentiality and protection of sensitive information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Structure Note */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">Professional Team Structure</h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Our professional team structure ensures appropriate oversight, quality control, 
            and efficient service delivery for all client engagements. Each project is staffed 
            with appropriate personnel based on complexity and specialized requirements.
          </p>
          
          <div className="bg-background rounded-lg p-8">
            <p className="text-muted-foreground italic">
              In accordance with professional standards, detailed team member information 
              is available upon request for specific engagements and can be discussed 
              during initial consultations.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Our Team?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss your accounting needs and learn how our professional team can assist you.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Schedule Consultation</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};
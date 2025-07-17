import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Award, Shield, BookOpen, Users, FileCheck, Building } from 'lucide-react';

export const Credentials = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Credentials
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Licensed professionals maintaining current certifications and adhering to 
              the highest standards of professional practice and ethics.
            </p>
          </div>
        </div>
      </section>

      {/* Licensing & Certifications */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Licensing & Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team maintains all required professional licenses and certifications 
              to provide comprehensive accounting services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-8">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">CPA License</h3>
                <p className="text-muted-foreground">
                  Licensed Certified Public Accountants in good standing with state licensing boards.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Insurance</h3>
                <p className="text-muted-foreground">
                  Professional liability insurance coverage maintaining appropriate limits.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-8">
                <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Continuing Education</h3>
                <p className="text-muted-foreground">
                  Annual completion of required continuing professional education hours.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Professional Memberships */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Professional Memberships</h2>
            <p className="text-lg text-muted-foreground">
              Active participation in professional organizations ensuring current knowledge and ethical standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Users className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">American Institute of CPAs (AICPA)</h3>
                    <p className="text-muted-foreground mb-4">
                      Members in good standing with the national professional organization for CPAs.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Professional Ethics Code adherence
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Continuing education requirements
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Professional standards updates
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <Building className="h-10 w-10 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">State CPA Society</h3>
                    <p className="text-muted-foreground mb-4">
                      Active members of the state professional CPA organization.
                    </p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Local professional development
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        State regulatory updates
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        Professional networking
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quality Assurance Standards</h2>
            <p className="text-lg text-muted-foreground">
              Our practice maintains rigorous quality control procedures and professional standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 text-center">
              <FileCheck className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Peer Review</h3>
              <p className="text-muted-foreground text-sm">
                Regular peer review processes ensuring compliance with professional standards.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center">
              <Shield className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Quality Control</h3>
              <p className="text-muted-foreground text-sm">
                Systematic quality control procedures for all client engagements and services.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 text-center">
              <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-3">Standards Compliance</h3>
              <p className="text-muted-foreground text-sm">
                Adherence to Generally Accepted Accounting Principles and professional standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Development */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Continuing Professional Development</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Annual Requirements</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    40 hours of continuing professional education annually
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Ethics training and professional responsibility updates
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Technical accounting and auditing standards updates
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Industry-specific training and certifications
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-4">Professional Focus Areas</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Tax law updates and regulatory changes
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Financial reporting standards evolution
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Technology integration in accounting practice
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Professional ethics and independence requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Professional Qualifications You Can Trust</h2>
          <p className="text-xl mb-8 opacity-90">
            Work with licensed professionals committed to maintaining the highest standards of professional practice.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Schedule Consultation</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};
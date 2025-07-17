import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Calculator, FileText, Clock, Shield, CheckCircle } from 'lucide-react';

export const TaxServices = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Calculator className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Tax Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive tax preparation and planning services ensuring compliance 
              with current tax regulations and optimizing your tax position.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Tax Service Offerings</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our tax services are designed to ensure accurate preparation and strategic 
                planning while maintaining full compliance with federal and state tax regulations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Individual Tax Returns</h3>
                    <p className="text-muted-foreground text-sm">Personal income tax preparation and filing services.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Business Tax Returns</h3>
                    <p className="text-muted-foreground text-sm">Corporate, partnership, and LLC tax return preparation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Tax Planning</h3>
                    <p className="text-muted-foreground text-sm">Strategic tax planning and compliance consulting.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Quarterly Estimates</h3>
                    <p className="text-muted-foreground text-sm">Estimated tax payment calculations and filing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Shield className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Compliance Assurance</h4>
                        <p className="text-muted-foreground text-sm">
                          Thorough review to ensure compliance with current tax laws and regulations.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <FileText className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Accurate Documentation</h4>
                        <p className="text-muted-foreground text-sm">
                          Detailed documentation and record-keeping for all tax filings.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Timely Filing</h4>
                        <p className="text-muted-foreground text-sm">
                          Adherence to all filing deadlines and extension requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Detailed Service Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Individual Tax Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Form 1040 preparation and filing
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Itemized deduction analysis
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Tax credit identification
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Multi-state tax return preparation
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Amended return preparation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Business Tax Services</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Corporate tax return preparation
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Partnership and LLC returns
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    S-Corporation elections and filings
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Payroll tax compliance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Sales and use tax returns
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Tax Preparation Process</h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach ensuring accuracy and compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Document Collection</h3>
                <p className="text-muted-foreground text-sm">
                  Gathering all necessary tax documents and financial records.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Analysis & Preparation</h3>
                <p className="text-muted-foreground text-sm">
                  Professional analysis and accurate tax return preparation.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Review & Verification</h3>
                <p className="text-muted-foreground text-sm">
                  Thorough review for accuracy and compliance verification.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Filing & Documentation</h3>
                <p className="text-muted-foreground text-sm">
                  Electronic filing and complete documentation delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss your tax preparation and planning needs with our professional team.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Schedule Tax Consultation</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};
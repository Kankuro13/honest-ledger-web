import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Shield, FileCheck, Eye, Users, CheckCircle } from 'lucide-react';

export const AuditServices = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Audit & Assurance Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Independent audit services providing objective verification of financial statements 
              and internal controls with professional integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Professional Audit Services</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our audit services provide independent verification and objective assessment 
                of financial statements and internal control systems in accordance with 
                professional auditing standards.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Financial Statement Audits</h3>
                    <p className="text-muted-foreground text-sm">Independent audit of annual financial statements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Review Engagements</h3>
                    <p className="text-muted-foreground text-sm">Limited assurance reviews of financial statements.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Internal Control Assessment</h3>
                    <p className="text-muted-foreground text-sm">Evaluation of internal control systems and procedures.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Compliance Auditing</h3>
                    <p className="text-muted-foreground text-sm">Assessment of compliance with specific requirements.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Audit Standards</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Eye className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Professional Independence</h4>
                        <p className="text-muted-foreground text-sm">
                          Maintaining objectivity and independence in all audit engagements.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <FileCheck className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">GAAS Compliance</h4>
                        <p className="text-muted-foreground text-sm">
                          Adherence to Generally Accepted Auditing Standards.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Users className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Quality Control</h4>
                        <p className="text-muted-foreground text-sm">
                          Systematic quality control procedures for all engagements.
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

      {/* Types of Audits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Types of Audit Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Financial Statement Audits</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Annual financial statement audits
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Opinion letter issuance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Management letter preparation
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    GAAP compliance verification
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Review Engagements</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Limited assurance procedures
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Analytical procedures
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Inquiry procedures
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Review report preparation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Compliance Audits</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Regulatory compliance assessment
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Grant compliance auditing
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Internal policy compliance
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Compliance reporting
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Audit Process</h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach ensuring thorough and objective assessment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Planning</h3>
                <p className="text-muted-foreground text-sm">
                  Risk assessment and audit planning based on understanding of the entity.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Fieldwork</h3>
                <p className="text-muted-foreground text-sm">
                  Execution of audit procedures and evidence gathering.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Evaluation</h3>
                <p className="text-muted-foreground text-sm">
                  Analysis of audit evidence and findings evaluation.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Reporting</h3>
                <p className="text-muted-foreground text-sm">
                  Preparation and delivery of audit opinion and management letter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Note */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-background rounded-lg p-8 text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Independence</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our audit services maintain strict professional independence and objectivity. 
              We adhere to all independence requirements and professional standards to ensure 
              the integrity and reliability of our audit opinions.
            </p>
            <p className="text-sm text-muted-foreground italic">
              All audit engagements are conducted in accordance with Generally Accepted Auditing Standards (GAAS) 
              and applicable professional standards.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Audit Services?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss your audit and assurance needs with our professional team.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Schedule Audit Consultation</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};
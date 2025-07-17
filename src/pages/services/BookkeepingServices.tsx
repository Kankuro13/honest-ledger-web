import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { FileText, TrendingUp, Calendar, Database, CheckCircle } from 'lucide-react';

export const BookkeepingServices = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Bookkeeping Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Accurate financial record maintenance and monthly reporting services 
              to keep your business finances organized and current.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Comprehensive Bookkeeping</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our bookkeeping services ensure accurate maintenance of your financial records, 
                providing the foundation for informed business decisions and regulatory compliance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Monthly Financial Reports</h3>
                    <p className="text-muted-foreground text-sm">Comprehensive monthly financial statements and reports.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Accounts Payable/Receivable</h3>
                    <p className="text-muted-foreground text-sm">Management of vendor payments and customer invoicing.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Bank Reconciliation</h3>
                    <p className="text-muted-foreground text-sm">Regular bank statement reconciliation and cash management.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Payroll Processing</h3>
                    <p className="text-muted-foreground text-sm">Complete payroll processing and tax compliance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Service Benefits</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Financial Clarity</h4>
                        <p className="text-muted-foreground text-sm">
                          Clear, accurate financial reporting for informed decision-making.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Calendar className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Timely Updates</h4>
                        <p className="text-muted-foreground text-sm">
                          Regular monthly updates and timely financial reporting.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Database className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Organized Records</h4>
                        <p className="text-muted-foreground text-sm">
                          Systematic organization and maintenance of financial records.
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

      {/* Detailed Services */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">Detailed Service Offerings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">General Ledger Management</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Chart of accounts setup
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Journal entry preparation
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Monthly closing procedures
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Trial balance preparation
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Accounts Management</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Invoice processing
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Payment processing
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Aging reports
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Collections support
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-4">Financial Reporting</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Income statements
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Balance sheets
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Cash flow statements
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    Custom reports
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Integration */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Technology Integration</h2>
            <p className="text-lg text-muted-foreground">
              Modern bookkeeping solutions using current accounting software and systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <Database className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Cloud-Based Systems</h3>
                <p className="text-muted-foreground text-sm">
                  Secure, accessible cloud-based accounting platforms.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <TrendingUp className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Real-Time Reporting</h3>
                <p className="text-muted-foreground text-sm">
                  Up-to-date financial information and reporting.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Document Management</h3>
                <p className="text-muted-foreground text-sm">
                  Digital document storage and organization.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-card rounded-lg p-6 h-full">
                <Calendar className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Automated Processes</h3>
                <p className="text-muted-foreground text-sm">
                  Streamlined processes for improved efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Bookkeeping Process</h2>
            <p className="text-lg text-muted-foreground">
              A systematic approach ensuring accurate and timely financial record keeping.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-background rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h3 className="font-semibold mb-2">Setup & Configuration</h3>
                <p className="text-muted-foreground text-sm">
                  Initial system setup and chart of accounts configuration.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-background rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h3 className="font-semibold mb-2">Data Entry & Processing</h3>
                <p className="text-muted-foreground text-sm">
                  Regular transaction entry and processing.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-background rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h3 className="font-semibold mb-2">Monthly Reconciliation</h3>
                <p className="text-muted-foreground text-sm">
                  Bank reconciliations and account balancing.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-background rounded-lg p-6 h-full">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">4</span>
                </div>
                <h3 className="font-semibold mb-2">Report Delivery</h3>
                <p className="text-muted-foreground text-sm">
                  Monthly financial reports and analysis delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Streamline Your Financial Records</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss how our bookkeeping services can keep your finances organized and current.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Schedule Bookkeeping Consultation</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};
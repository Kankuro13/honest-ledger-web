import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Users, Target, TrendingUp, Lightbulb, CheckCircle } from 'lucide-react';

export const AdvisoryServices = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="h-16 w-16 text-primary mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Business Advisory Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional business advisory services focusing on operational efficiency 
              and financial performance improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Strategic Business Advisory</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our business advisory services provide objective guidance to help organizations 
                improve operational efficiency and achieve sustainable financial performance.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Business Performance Analysis</h3>
                    <p className="text-muted-foreground text-sm">Comprehensive evaluation of business operations and performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Operational Consulting</h3>
                    <p className="text-muted-foreground text-sm">Process improvement and operational efficiency consulting.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Financial System Review</h3>
                    <p className="text-muted-foreground text-sm">Assessment and improvement of financial systems and controls.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Card>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-6">Advisory Focus Areas</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Target className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Strategic Planning</h4>
                        <p className="text-muted-foreground text-sm">
                          Long-term strategic planning and business development guidance.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <TrendingUp className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Performance Optimization</h4>
                        <p className="text-muted-foreground text-sm">
                          Identification of improvement opportunities and efficiency gains.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Lightbulb className="h-8 w-8 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-2">Process Improvement</h4>
                        <p className="text-muted-foreground text-sm">
                          Business process analysis and improvement recommendations.
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Improve Your Business Performance</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss how our advisory services can help optimize your business operations.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Schedule Advisory Consultation</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};
import { NavLink } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Calculator, 
  Shield, 
  FileText,
  TrendingUp,
  Users,
  Building
} from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: Calculator,
      title: 'Tax Services',
      description: 'Comprehensive tax preparation and planning services for individuals and businesses, ensuring compliance with current tax regulations.',
      path: '/services/tax',
      features: [
        'Individual Tax Returns',
        'Business Tax Planning',
        'Tax Compliance Review',
        'Quarterly Tax Estimates'
      ]
    },
    {
      icon: Shield,
      title: 'Audit & Assurance',
      description: 'Independent audit services providing objective verification of financial statements and internal controls.',
      path: '/services/audit',
      features: [
        'Financial Statement Audits',
        'Internal Control Assessment',
        'Compliance Auditing',
        'Review Engagements'
      ]
    },
    {
      icon: FileText,
      title: 'Bookkeeping Services',
      description: 'Professional bookkeeping and financial record maintenance with accurate monthly reporting.',
      path: '/services/bookkeeping',
      features: [
        'Monthly Financial Reports',
        'Accounts Payable/Receivable',
        'Bank Reconciliation',
        'Payroll Processing'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Financial Consulting',
      description: 'Strategic financial analysis and consulting services to support business decision-making.',
      path: '/services/consulting',
      features: [
        'Financial Analysis',
        'Cash Flow Projections',
        'Budget Development',
        'Financial Planning'
      ]
    },
    {
      icon: Users,
      title: 'Business Advisory',
      description: 'Professional business advisory services focusing on operational efficiency and financial performance.',
      path: '/services/advisory',
      features: [
        'Business Performance Analysis',
        'Operational Consulting',
        'Financial System Review',
        'Process Improvement'
      ]
    },
    {
      icon: Building,
      title: 'Entity Formation',
      description: 'Assistance with business entity selection and formation processes, including compliance requirements.',
      path: '/services/entity-formation',
      features: [
        'Entity Structure Analysis',
        'Formation Documentation',
        'Compliance Setup',
        'Ongoing Requirements'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background to-accent py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Accounting Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive financial solutions delivered with professional integrity and objective analysis 
              to support your business objectives.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <service.icon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-foreground">Key Services Include:</h4>
                        <ul className="space-y-2">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Button asChild className="w-full sm:w-auto">
                        <NavLink to={service.path}>Learn More</NavLink>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Service Approach</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              We deliver professional accounting services with a commitment to accuracy, timeliness, and ethical standards.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">1</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Assessment</h3>
                  <p className="text-muted-foreground text-sm">
                    Thorough evaluation of your current financial situation and requirements.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-accent rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">2</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Implementation</h3>
                  <p className="text-muted-foreground text-sm">
                    Professional execution of services according to established timelines and standards.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-accent rounded-lg p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold">3</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Ongoing Support</h3>
                  <p className="text-muted-foreground text-sm">
                    Continued professional relationship with regular reviews and updates as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Needs?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to learn more about how our professional services can support your financial objectives.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Schedule Consultation</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};
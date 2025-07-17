import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { 
  Building, 
  Heart, 
  Wrench, 
  GraduationCap,
  ShoppingBag,
  Home,
  Users,
  Landmark
} from 'lucide-react';

export const Industries = () => {
  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Specialized accounting services for medical practices, healthcare facilities, and related service providers.',
      services: [
        'Medical Practice Accounting',
        'Healthcare Compliance',
        'Insurance Billing Support',
        'Financial Reporting'
      ]
    },
    {
      icon: Wrench,
      title: 'Manufacturing',
      description: 'Comprehensive financial services for manufacturing businesses, including cost accounting and inventory management.',
      services: [
        'Cost Accounting Systems',
        'Inventory Management',
        'Production Financial Analysis',
        'Tax Planning'
      ]
    },
    {
      icon: Users,
      title: 'Non-Profit Organizations',
      description: 'Specialized services for non-profit entities, including grant compliance and donor reporting.',
      services: [
        'Grant Compliance',
        'Donor Reporting',
        'Form 990 Preparation',
        'Board Financial Reporting'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Professional Services',
      description: 'Tailored accounting solutions for professional service firms and consultants.',
      services: [
        'Time-Based Billing',
        'Project Profitability',
        'Partner Distributions',
        'Professional Liability'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'Retail & E-commerce',
      description: 'Financial services designed for retail businesses and online commerce operations.',
      services: [
        'Sales Tax Management',
        'Inventory Accounting',
        'Multi-Location Reporting',
        'E-commerce Integration'
      ]
    },
    {
      icon: Home,
      title: 'Real Estate',
      description: 'Specialized accounting for real estate professionals, developers, and property management companies.',
      services: [
        'Property Management Accounting',
        'Development Project Tracking',
        'Rental Income Reporting',
        'Depreciation Analysis'
      ]
    },
    {
      icon: Building,
      title: 'Construction',
      description: 'Project-based accounting services for contractors and construction companies.',
      services: [
        'Job Cost Accounting',
        'Progress Billing',
        'Equipment Depreciation',
        'Subcontractor Management'
      ]
    },
    {
      icon: Landmark,
      title: 'Financial Services',
      description: 'Accounting services for financial institutions and investment-related businesses.',
      services: [
        'Regulatory Compliance',
        'Investment Accounting',
        'Fiduciary Reporting',
        'Risk Assessment'
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
              Industries We Serve
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional accounting services tailored to meet the unique requirements 
              and challenges of diverse business sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <industry.icon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{industry.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {industry.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-foreground">Specialized Services:</h4>
                        <ul className="space-y-2">
                          {industry.services.map((service, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {service}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Expertise */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Industry-Specific Expertise</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Our team maintains current knowledge of industry-specific regulations, 
              best practices, and accounting standards to provide relevant professional services.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-accent rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Regulatory Knowledge</h3>
                  <p className="text-muted-foreground text-sm">
                    Current understanding of industry-specific regulations and compliance requirements.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-accent rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
                  <p className="text-muted-foreground text-sm">
                    Implementation of industry-recognized accounting and financial management practices.
                  </p>
                </div>
              </div>
              
              <div className="text-center">
                <div className="bg-accent rounded-lg p-6">
                  <h3 className="text-lg font-semibold mb-2">Specialized Reporting</h3>
                  <p className="text-muted-foreground text-sm">
                    Industry-specific financial reporting and analysis tailored to business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Industries */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Additional Industries</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
              While we specialize in the industries listed above, our professional team 
              has experience serving businesses across various other sectors.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-card rounded-lg p-4 text-center">
                <p className="font-medium text-foreground">Technology</p>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <p className="font-medium text-foreground">Agriculture</p>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <p className="font-medium text-foreground">Transportation</p>
              </div>
              <div className="bg-card rounded-lg p-4 text-center">
                <p className="font-medium text-foreground">Hospitality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us to discuss how our professional services can be tailored to your specific business sector.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Contact Us Today</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};
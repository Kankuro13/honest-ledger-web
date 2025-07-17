import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { 
  FileText, 
  Calendar, 
  AlertCircle, 
  BookOpen, 
  Calculator,
  Clock
} from 'lucide-react';

export const Resources = () => {
  const resources = [
    {
      icon: Calendar,
      title: 'Tax Calendar',
      description: 'Important tax deadlines and filing dates for individuals and businesses.',
      items: [
        'Individual Tax Deadlines',
        'Business Tax Dates',
        'Quarterly Payment Schedules',
        'Extension Filing Dates'
      ]
    },
    {
      icon: FileText,
      title: 'Financial Documents Checklist',
      description: 'Essential documents needed for various accounting services and tax preparation.',
      items: [
        'Tax Preparation Documents',
        'Audit Preparation Materials',
        'Bookkeeping Records',
        'Business Formation Papers'
      ]
    },
    {
      icon: Calculator,
      title: 'Business Planning Tools',
      description: 'Resources to help with business financial planning and analysis.',
      items: [
        'Cash Flow Planning',
        'Budget Templates',
        'Financial Ratios Guide',
        'Business Metrics'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Compliance Guidelines',
      description: 'Important compliance information for various business types and industries.',
      items: [
        'Regulatory Requirements',
        'Industry-Specific Compliance',
        'Reporting Obligations',
        'Record Retention Guidelines'
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
              Professional Resources
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Access helpful information and tools to support your financial planning 
              and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {resources.map((resource, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <resource.icon className="h-12 w-12 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{resource.title}</h3>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-foreground">Includes:</h4>
                        <ul className="space-y-2">
                          {resource.items.map((item, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                              {item}
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

      {/* Important Deadlines */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Key Annual Deadlines</h2>
            <p className="text-lg text-muted-foreground">
              Important dates to remember for tax and business compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-accent rounded-lg p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">March 15</h3>
              <p className="text-sm text-muted-foreground">S-Corp & Partnership Returns</p>
            </div>
            
            <div className="bg-accent rounded-lg p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">April 15</h3>
              <p className="text-sm text-muted-foreground">Individual & C-Corp Returns</p>
            </div>
            
            <div className="bg-accent rounded-lg p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">May 15</h3>
              <p className="text-sm text-muted-foreground">Non-Profit Organizations</p>
            </div>
            
            <div className="bg-accent rounded-lg p-6 text-center">
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">September 15</h3>
              <p className="text-sm text-muted-foreground">Extended Returns Due</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Guidance Note */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card rounded-lg p-8 text-center">
            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Professional Guidance</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The information provided here is for general guidance only. Specific situations 
              may require individualized professional advice. We recommend consulting with 
              our professional team for matters relating to your particular circumstances.
            </p>
            <p className="text-sm text-muted-foreground italic">
              Tax laws and regulations are subject to change. Always verify current requirements 
              with qualified professionals before making important financial decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Additional Information</h2>
            <p className="text-lg text-muted-foreground">
              Links to official sources and professional organizations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-background rounded-lg">
              <h3 className="text-lg font-semibold mb-3">IRS Resources</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Official tax forms, publications, and guidance from the Internal Revenue Service.
              </p>
              <p className="text-xs text-muted-foreground">www.irs.gov</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg">
              <h3 className="text-lg font-semibold mb-3">AICPA Standards</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Professional standards and ethics guidance from the American Institute of CPAs.
              </p>
              <p className="text-xs text-muted-foreground">www.aicpa.org</p>
            </div>
            
            <div className="text-center p-6 bg-background rounded-lg">
              <h3 className="text-lg font-semibold mb-3">State Requirements</h3>
              <p className="text-muted-foreground text-sm mb-4">
                State-specific tax and business compliance requirements and forms.
              </p>
              <p className="text-xs text-muted-foreground">Contact us for state-specific links</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Professional Assistance?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact our team for personalized guidance on your specific accounting and tax needs.
          </p>
          <Button asChild size="lg" variant="secondary">
            <NavLink to="/contact">Contact Us Today</NavLink>
          </Button>
        </div>
      </section>
    </div>
  );
};
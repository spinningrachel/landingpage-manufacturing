import { DemoForm } from './components/demo-form';
import { NewsletterSignup } from './components/newsletter-signup';
import { Badge } from './components/ui/badge';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { BarChart, Zap, Cpu, Factory, DollarSign, PackageSearch, CheckCircle, Plane } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section style={{ backgroundColor: '#0E0022' }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headlines */}
            <div>
              <h1 className="text-5xl lg:text-6xl mb-6 leading-tight text-white">
                Achieve <span className="text-blue-400">90% Better</span> Defect Detection
              </h1>
              <h2 className="text-3xl text-gray-200 mb-6">
                In Days, Not Months
              </h2>

              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Visual Layer turns raw inspection data into ROI-driven models that work in live production.
              </p>
              
              {/* Demo Benefits */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <BarChart className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 text-white">DATA QUALITY FIRST</h4>
                    <p className="text-gray-300">Curates and validates data, uncovers unseen defects, and keeps results production-ready.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 text-white">RAPID DEPLOYMENT</h4>
                    <p className="text-gray-300">Accelerate model training and retraining in days instead of months with models that actually work.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Cpu className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="mb-1 text-white">CPU-FIRST PLATFORM</h4>
                    <p className="text-gray-300">Get up and running on standard hardware for ingestion and indexing, with optimized infrastructure and minimal GPU dependency.</p>
                  </div>
                </div>
              </div>

              {/* Industry Recognition */}
              <div>
                <p className="text-sm text-gray-300 mb-3">Industry Recognition:</p>
                <div className="flex gap-4 flex-wrap">
                  <Badge variant="outline" className="text-sm py-2 px-4 border-gray-500 text-gray-200 hover:bg-gray-800">Apple Partner</Badge>
                  <Badge variant="outline" className="text-sm py-2 px-4 border-gray-500 text-gray-200 hover:bg-gray-800">Trusted by Fortune 10 Companies</Badge>
                  
                </div>
              </div>
            </div>

            {/* Right Column - Demo Form */}
            <div className="lg:pl-8">
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Visual Layer Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl mb-4">Why Partner with Visual Layer</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-lg border shadow-sm">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Factory className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl mb-4">Proven Production Impact</h3>
              <p className="text-gray-600 leading-relaxed">
                Cut deployment cycles from months to days, reduce review costs by 95%, and increase factory yield.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg border shadow-sm">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl mb-4">Clear ROI</h3>
              <p className="text-gray-600 leading-relaxed">
                Consistent payback proven in live production—lower warranty costs, less waste, more throughput.
              </p>
            </div>

            <div className="text-center bg-white p-8 rounded-lg border shadow-sm">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <PackageSearch className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl mb-4">~100% Defect Detection</h3>
              <p className="text-gray-600 leading-relaxed">
                Achieve advanced AI-powered inspection with vastly higher defect detection accuracy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1683765084506-3ad53915aa01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcXVhbGl0eSUyMGNvbnRyb2wlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc1ODYyNjM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manufacturing quality control inspection"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
            <div>
              <h3 className="text-3xl mb-6">Advanced AI-Powered Inspection</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Manual inspection misses up to 30% of defects, driving quality costs that consume 5–35% of revenue. Visual Layer closes this gap with automated inspection at scale.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p>Automatically identify defects with 90% higher accuracy</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p>Integrate seamlessly with existing systems (CAD, MES, quality pipelines) without rip-and-replace</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p>Continuously monitor and adapt models for sustained accuracy in production</p>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <p>Control your data completely with self-hosted deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-3xl mb-6">Enterprise-Ready Platform</h3>
              <p className="text-xl text-gray-600 mb-6">
                Built for manufacturing scale with enterprise security and compliance.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <h4 className="mb-2">Purpose-built for Manufacturing</h4>
                  <p className="text-gray-600">Tailored to manufacturing workflows with enterprise-grade security</p>
                </div>
                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <h4 className="mb-2">Scalable Architecture</h4>
                  <p className="text-gray-600">Handle thousands of inspections per hour with consistent performance</p>
                </div>

                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <div className="flex items-center gap-2 mb-2">
                    <h4>Aerospace & Defense Ready</h4>
                  </div>
                  <p className="text-gray-600">Proven CAD reuse capabilities for complex aerospace and defense manufacturing requirements</p>
                </div>
                                <div className="bg-white p-4 rounded-lg border shadow-sm">
                  <h4 className="mb-2">Expert Support</h4>
                  <p className="text-gray-600">Dedicated implementation team, ongoing technical support, and a true partner in your success</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwQUklMjB0ZWNobm9sb2d5JTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NTg2MjYzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Industrial AI technology automation"
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
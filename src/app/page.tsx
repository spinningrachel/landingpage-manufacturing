'use client';

import { PricingForm } from '@/components/devlink/PricingForm';
import { Nav } from '@/components/devlink/Nav';
import { Marquee } from '@/components/devlink/Marquee';
import { NewsletterSignup } from '@/components/forms/NewsletterSignup';
import dynamic from 'next/dynamic';

const FooterSection = dynamic(() => import('../../devlink/FooterSection').then(mod => ({ default: mod.FooterSection })), {
  ssr: false
});

export default function App() {
  return (
    
    <div className="min-h-screen bg-white font-sans">
      <section>
        <Nav />
      </section>
      {/* Hero Section */}
      <section style={{ backgroundColor: 'rgb(14, 0, 34)', padding: '80px 0px' }}>
        <div className="linear-gradient">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Headlines */}
              <div>
              <h1 style={{ color: 'white' }}>
                <span className="font-light">Achieve{" "}
                <span className="bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 bg-clip-text text-transparent">
                  90% Better
                </span>{" "}
                Defect Detection</span>
              </h1>
              <h2 className="text-white mb-4">
               <span className="font-semibold">In Days</span> <span className="font-light">, Not Months</span>
              </h2>
                <p className="text-white leading-relaxed mb-8">
                Visual Layer turns raw inspection data into ROI-driven models that work in live production.
                </p>

              {/* Feature Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 stroke-white flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">DATA QUALITY FIRST</h4>
                    <p className="text-white mb-2">
                      Curates and validates data, uncovers unseen defects, and keeps results production-ready.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 stroke-white flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">RAPID DEPLOYMENT</h4>
                    <p className="text-white mb-2">
                      Accelerate model training and retraining in days instead of months with models that actually work.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 stroke-white flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">CPU-FIRST PLATFORM</h4>
                    <p className="text-white mb-2">
                      Get up and running on standard hardware for ingestion and indexing, with optimized infrastructure and minimal GPU dependency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Industry Recognition */}
              <div className="mb-8">
                <p className="text-white mb-4">Trusted by</p>
                <div className="flex flex-wrap gap-4">
                  <div className="relative">
                    <div className="absolute -inset-px bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 rounded-lg"></div>
                    <div className="relative px-4 py-2 rounded-lg text-white" style={{ backgroundColor: 'rgb(14, 0, 34)' }}>
                      Apple Partners
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-px bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 rounded-lg"></div>
                    <div className="relative px-4 py-2 rounded-lg text-white" style={{ backgroundColor: 'rgb(14, 0, 34)' }}>
                      Trusted by Fortune 10 Companies
                    </div>
                  </div>
                </div>
              </div>
            </div>

              {/* Right Column - Form */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 to-green-300 rounded-2xl blur opacity-75"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                  <h4 className="text-gray-900 mb-6">See Visual Layer in Action</h4>
                  <p className="text-gray-600 mb-6">Send us your details, and we'll get back to you to schedule a personalized demo.</p>
                  <PricingForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Why Manufacturing Teams Partner With <span className="font-bold bg-gradient-to-r from-purple-600 via-blue-700 to-green-600 bg-clip-text text-transparent">Visual Layer</span>
            </h2>
            <p className="text-gray-600">
              Transform your quality control with AI that actually works in production environments
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Speed */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>

              </div>
              <h4 className="mb-4">Lightning Fast Deployment</h4>
              <p className="text-gray-600 leading-relaxed">
                Deploy production-ready defect detection in days, not months. Our AI learns from your existing data instantly.
              </p>
            </div>

            {/* Accuracy */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

              </div>
              <h4 className="text-gray-900 mb-4">Superior Accuracy</h4>
              <p className="text-gray-600 leading-relaxed">
                Achieve 10x better defect detection compared to traditional methods. Reduce false positives dramatically.
              </p>
            </div>

            {/* Integration */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

              </div>
              <h4 className="text-gray-900 mb-4">Production Ready</h4>
              <p className="text-gray-600 leading-relaxed">
                Seamlessly integrate with your existing production line. Real-time processing with enterprise-grade reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="py-20  bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-gray-900 mb-6">
                See Visual Layer in Action
              </h2>
              <p className=" text-gray-600 mb-8 leading-relaxed">
                Watch how our AI identifies defects with precision that exceeds human inspection capabilities while maintaining production line speed.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gray-900 mb-2">Real-time Detection</h5>
                    <p className="text-gray-600">Identify defects as products move through your production line with sub-second processing times</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gray-900 mb-2">Detailed Analytics</h5>
                    <p className="text-gray-600">Get insights on defect patterns and quality trends over time with comprehensive reporting</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gray-900 mb-2">Easy Integration</h5>
                    <p className="text-gray-600">Connect with your existing cameras and inspection systems without disrupting operations</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img src="/vlb-explore-manufacturing.png"></img>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0"></div>
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="mb-4">
                Proven ROI for Manufacturing
            </h2>
              <p className="max-w-3xl mx-auto">
                Our customers see immediate impact on their bottom line with measurable improvements across all key metrics
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

              </div>
              <div className="text-5xl mb-2">40%</div>
              <div className=" mb-3">Cost Reduction</div>
              <p className="text-gray-900 leading-relaxed">
                Reduce inspection costs and minimize waste from undetected defects across your production line
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
</svg>

              </div>
              <div className="text-5xl mb-2">60%</div>
              <div className=" mb-3">Faster Processing</div>
              <p className="text-gray-900 leading-relaxed">
                Accelerate quality control processes without compromising accuracy or reliability
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
</svg>

              </div>
              <div className="text-5xl mb-2">10x</div>
              <div className=" mb-3">Better Accuracy</div>
              <p className="text-gray-900 leading-relaxed">
                  Catch defects that human inspectors miss consistently with AI-powered precision
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20  bg-gray-100">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-gray-900 mb-6">
            Ready to Transform Your Manufacturing Quality Control?
          </h2>
          <p className=" text-gray-600 mb-8 leading-relaxed">
            Join hundreds of manufacturers already using Visual Layer to improve their defect detection and streamline their production processes.
          </p>
          
        </div>
        <section className="mx-10">
          <div className="bg-white rounded-2xl p-8 mx-8" style={{ width: '100%' }}>
              <Marquee />
          </div>

          </section>
          <section>
                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 mx-20">
            <NewsletterSignup />
          </div>

          <div className="relative inline-block mx-10">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 rounded-lg blur opacity-75 animate-pulse mx-10"></div>
            <button className="relative bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 mx-40">
              Book Your Demo Today
            </button>
          </div>
        </section>
              <section className="ml-10 mr-10" style={{ backgroundColor: 'rgb(14, 0, 34)' }}>
                <div style={{padding: '20px 20px 20px 0px'}}>
        <FooterSection />
        </div>
      </section>
      </section>
    </div>
  )
}
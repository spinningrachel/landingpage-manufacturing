'use client';

import { PricingForm } from '@/components/devlink/PricingForm';
import { NavBlockNoMenu } from '../../devlink/NavBlockNoMenu';
import { FooterNoNewsletter } from '../../devlink/FooterNoNewsletter';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../../devlink/Footer').then(mod => ({ default: mod.Footer })), {
  ssr: false
});

export default function App() {
  return (
    
    <div className="min-h-screen bg-white font-sans">
      <NavBlockNoMenu />
      {/* Hero Section */}
      <section style={{ backgroundColor: 'rgb(14, 0, 34)', padding: '80px 0px' }}>
        <div className="linear-gradient">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Headlines */}
              <div>

              <h1 className="text-[46px]"><span className="font-thin text-white">From Impossible Inspection Workloads to </span><span className="font-bold bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 bg-clip-text text-transparent">Actionable Intelligence</span>
              </h1>
              <h2 className="!text-[26px] mt-5 mb-5 text-white !font-extrathin leading-[1.4]">Achieve 90% Better Defect Detection <span className="!font-extrabold"> In Days</span>, Not Months</h2>
                <p className="text-white text-2xl font-light  mb-8">
                </p>
              {/* Feature Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">DAYS NOT MONTHS</h4>
                    <p className="text-white mb-2">
                      Visual Layer gives manufacturers the foundation to turn overwhelming inspection data into a strategic advantage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">FROM BEFORE TO AFTER</h4>
                    <p className="text-white mb-2">
                      Visual Layer automates indexing and search to deliver insights and measurable ROI in a flash.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white mb-1">ENTERPRISE SCALE AND PRODUCTION READY</h4>
                    <p className="text-white mb-2">
                      Visual Layer scales with you from proof-of-concept to petabyte production.
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
                      Apple Partners and
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute -inset-px bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 rounded-lg"></div>
                    <div className="relative px-4 py-2 rounded-lg text-white" style={{ backgroundColor: 'rgb(14, 0, 34)' }}>
                      Fortune 10 Companies
                    </div>
                  </div>
                </div>
              </div>
            </div>

              {/* Right Column - Form */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 to-green-300 rounded-2xl blur opacity-75"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                  <h4 className="text-darkgray text-lg font-extrabold mb-6">See Visual Layer in Action</h4>
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
              Transform quality control with AI engineered for production—delivering higher yield, lower costs, and immediate operational impact.
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
              <h4 className="mb-4">Seamless Integration</h4>
              <p className="text-gray-600 leading-relaxed">
                
Connect instantly and integrate with existing cameras and inspection systems without disruption.
              </p>
            </div>

            {/* Accuracy */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
</svg>

              </div>
              <h4 className="text-gray-900 mb-4">Intelligence in Motion</h4>
              <p className="text-gray-600 leading-relaxed">
                
Continuously analyze production images in near real-time, detecting defects and surfacing critical insights.
              </p>
            </div>

            {/* Integration */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
</svg>

              </div>
              <h4 className="text-gray-900 mb-4">Insights at Scale</h4>
              <p className="text-gray-600 leading-relaxed">                
              Uncover patterns and trends, and export high-quality data into training pipelines, or downstream analytics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Demo */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mt-5 mb-5 !font-extrathin leading-[1.4]">
                Smarter Workflows in Three Steps
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Three easy steps move manufacturers from data overload to measurable impact:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gray-900 mb-2">Unlock</h5>
                    <p className="text-gray-600">Make massive visual datasets usable and searchable.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gray-900 mb-2">Discover</h5>
                    <p className="text-gray-600">Find the needle in the haystack in seconds, uncovering insights at scale.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="size-10">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gray-900 mb-2">Automate</h5>
                    <p className="text-gray-600">Eliminate manual work with reliable automation, saving time and cost.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
              className="w-xl"
              src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/68d95660b8e5d7f8e8312180_vlb-explore-manufacturing5.png"
              alt="Visual Layer Welding Dataset"
/>
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
              <p className="text-lg max-w-3xl mx-auto">
                Our customers report immediate ROI: from double‑digit cost savings to faster throughput and significant accuracy improvements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Up to 30%+ Lower Quality Control Costs */}
              <div className="text-center">
                <span className="block text-sm font-semibold mb-2 invisible">Up to</span>
                <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold">+25%</span>
                </div>
                <h4 className="font-bold mb-3">Reduction in Quality Control Costs</h4>
                <p className="text-gray-900 leading-relaxed">
                  Reduce inspection costs and minimize waste from undetected defects across the production line.
                </p>
              </div>

              {/* Up to 5× Faster Model Development */}
              <div className="text-center">
                <span className="block text-sm font-semibold mb-2">Up to</span>
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold">5×</span>
                </div>
                <h4 className="font-bold mb-3">Faster Model Development</h4>
                <p className="text-gray-900 leading-relaxed">
                  Accelerate AI model training and deployment cycles—cutting timelines from months to weeks.
                </p>
              </div>

              {/* Up to 90–95% Manual Review Savings */}
              <div className="text-center">
                <span className="block text-sm font-semibold mb-2">Up to</span>
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold">95%</span>
                </div>
                <h4 className="font-bold mb-3">Higher Accuracy</h4>
                <p className="text-gray-900 leading-relaxed">
                  Automation with human-in-the-loop maintains accuracy and closes feedback loops fast.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20  bg-gray-100">
        <div className="max-w-7xl mb-10 mt-auto ml-auto mr-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Form */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 to-green-300 rounded-2xl blur opacity-75"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                <h4 className="text-darkgray font-extrabold text-lg mb-6">Get Started Today</h4>
                <p className="text-gray-600 mb-6">Send us your details, and we'll get back to you to schedule a personalized demo.</p>
                <PricingForm />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="text-center lg:text-left">

              <h2 className="text-gray-900 mb-6">
                Transform Your  Quality Control
              </h2>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Adopters of Visual Layer move fast with accurate, scalable, cost-efficient and unified workflows. 
              <span className="block mt-2 font-semibold text-purple-600">Don’t be left behind.</span>
            </p>
                                          <div className="mb-6">
                <img src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/68d953ad20210cfdb85d8e30_vlb-explore-manufacturing4.png" alt="Visual Layer Dataset for Model Training" className="mx-auto lg:mx-0" />
              </div>
            </div>
            
          </div>
                  
        </div>
        <FooterNoNewsletter />
      </section>
      
    </div>
    
  )
}
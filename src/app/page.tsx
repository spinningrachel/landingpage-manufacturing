'use client';

import { SalesforceForm } from '@/components/SalesforceForm';
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
              <h2 className="!text-[24px] mt-5 text-white !font-extrathin leading-[1.4]"> 90% Better Defect Detection </h2>
                <p className="text-white text-2xl font-light  mb-8">
                </p>
              {/* Feature Points */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <div>
                    <h4 className="text-white mb-1">FROM DAYS TO MONTHS</h4>
                    <p className="text-white mb-2">
                      Turn overwhelming inspection data into strategic advantage.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <div>
                    <h4 className="text-white mb-1">FROM BEFORE TO AFTER IN A FLASH</h4>
                    <p className="text-white mb-2">
                      Automate indexing & deliver insights and measurable ROI.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <div>
                    <h4 className="text-white mb-1">ENTERPRISE SCALE, PRODUCTION READY</h4>
                    <p className="text-white mb-2">
                      Scale easily from proof-of-concept to petabyte production.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="w-6 h-6 mt-1 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <div>
                    <h4 className="text-white mb-1">SIMPLE TO USE, NO TECHNICAL BARRIERS</h4>
                    <p className="text-white mb-2">
                      Teams across roles explore and validate data with ease.
                    </p>
                  </div>
                </div>

              </div>

              {/* Industry Recognition */}

            </div>

              {/* Right Column - Form */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-blue-400 to-green-500 to-green-300 rounded-2xl blur opacity-75"></div>
                <div className="relative bg-white rounded-2xl p-8 shadow-2xl">
                  <h4 className="text-darkgray text-lg font-extrabold mb-6">See Visual Layer in Action</h4>
                  <p className="text-gray-600 mb-0">Send us your details. We'll get back to you ASAP to schedule a personalized demo.</p>
                  <SalesforceForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-h-full" style={{ paddingBottom: '20px', backgroundColor: 'rgb(14, 0, 34)' }}>
      <div className="max-w-5xl mx-auto pt-3 text-center">
        <h3 className='text-gray-400 mb-4'>
          Trusted by Leaders in Manufacturing
        </h3>
        <img
          className="w-4/5 mx-auto"
          src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/68dbe32a144dcb047de58215_Trusted%20By%20logos.png"
          alt="Visual Layer Endorsed by Leaders in Manufacturing"
        />
        </div>
        </section>

      {/* Product Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-9">
            <h2 className="text-gray-900 mb-4">
              Why Manufacturing Teams Partner With <span className="font-bold bg-gradient-to-r from-purple-600 via-blue-700 to-green-600 bg-clip-text text-transparent">Visual Layer</span>
            </h2>
            <p className="text-gray-600">
              Transform quality control with AI engineered for production. Deliver higher yield, lower costs, and immediate operational impact.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Speed */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
                  <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
                  <path d="M3 21l2.5 -2.5" />
                  <path d="M18.5 5.5l2.5 -2.5" />
                  <path d="M10 11l-2 2" />
                  <path d="M13 14l-2 2" />
                </svg>
              </div>
              <h4 className="mb-4 text-black !font-900">Seamless Integration</h4>
              <p className="text-gray-500 leading-relaxed">

Connect instantly and integrate with existing cameras and inspection systems without disruption.
              </p>
            </div>

            {/* Accuracy */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12ZM17 12H12M12 16H14.1716C14.702 16 15.2107 16.2107 15.5858 16.5858L17.5 18.5M17.5 5.5L15.5858 7.41421C15.2107 7.78929 14.702 8 14.1716 8H12M8.26756 6C8.09739 5.70583 8 5.36429 8 5C8 3.89543 8.89543 3 10 3C11.1046 3 12 3.89543 12 5V19C12 20.1046 11.1046 21 10 21C8.89543 21 8 20.1046 8 19M5.99999 8.73244C5.40218 8.38663 4.99999 7.74028 4.99999 7C4.99999 5.89543 5.89542 5 6.99999 5C7.36428 5 7.70582 5.0974 8 5.26757M5 8.17065C3.83481 8.58249 3 9.69373 3 10.9999C3 12.3062 3.83481 13.4174 5 13.8292C5.31278 13.9398 5.64936 13.9999 6 13.9999M4.76389 14C4.28885 14.5308 4 15.2316 4 16C4 17.6569 5.34315 19 7 19C7.76835 19 8.46924 18.7111 9 18.2361M19 18C20.1046 18 21 18.8954 21 20C21 21.1046 20.1046 22 19 22C17.8954 22 17 21.1046 17 20C17 18.8954 17.8954 18 19 18ZM19 2C20.1046 2 21 2.89543 21 4C21 5.10457 20.1046 6 19 6C17.8954 6 17 5.10457 17 4C17 2.89543 17.8954 2 19 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4 className="mb-4 text-black !font-900">Intelligence in Motion</h4>
              <p className="text-gray-500 leading-relaxed">

Continuously analyze production images in near real-time. Detect defects and surface critical insights.
              </p>
            </div>

            {/* Integration */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 4.4375C15.3462 4.4375 16.4375 3.34619 16.4375 2H17.5625C17.5625 3.34619 18.6538 4.4375 20 4.4375V5.5625C18.6538 5.5625 17.5625 6.65381 17.5625 8H16.4375C16.4375 6.65381 15.3462 5.5625 14 5.5625V4.4375ZM1 11C4.31371 11 7 8.31371 7 5H9C9 8.31371 11.6863 11 15 11V13C11.6863 13 9 15.6863 9 19H7C7 15.6863 4.31371 13 1 13V11ZM4.87601 12C6.18717 12.7276 7.27243 13.8128 8 15.124 8.72757 13.8128 9.81283 12.7276 11.124 12 9.81283 11.2724 8.72757 10.1872 8 8.87601 7.27243 10.1872 6.18717 11.2724 4.87601 12ZM17.25 14C17.25 15.7949 15.7949 17.25 14 17.25V18.75C15.7949 18.75 17.25 20.2051 17.25 22H18.75C18.75 20.2051 20.2051 18.75 22 18.75V17.25C20.2051 17.25 18.75 15.7949 18.75 14H17.25Z"/>
                </svg>
              </div>
              <h4 className="mb-4 text-black !font-900">Insights at Scale</h4>
              <p className="text-gray-500 leading-relaxed">
              Uncover patterns and trends. Export high-quality data into training pipelines, or downstream analytics.
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
                Smarter Workflows in <span className='font-extrabold'>3</span> Steps
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Three easy steps move manufacturers from data overload to measurable impact:
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                      <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91" d="M12,1.5h0a6.68,6.68,0,0,1,6.68,6.68V11a0,0,0,0,1,0,0H5.32a0,0,0,0,1,0,0V8.18A6.68,6.68,0,0,1,12,1.5Z"/>
                      <line fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91" x1="9.14" y1="16.77" x2="11.05" y2="16.77"/>
                      <line fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91" x1="5.32" y1="16.77" x2="7.23" y2="16.77"/>
                      <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91" d="M21.73,20A5.06,5.06,0,0,1,13,20a5.07,5.07,0,0,1,8.77,0Z"/>
                      <circle fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91" cx="17.25" cy="19.96" r="0.48"/>
                      <polyline fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.91" points="21.55 15.82 21.55 11.04 2.46 11.04 2.46 22.5 11.05 22.5"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gray-900 mb-2">Unlock</h5>
                    <p className="text-gray-600">Make massive visual datasets usable and searchable.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mt-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white">
                      <path d="M4.96488 5.09625L8.5107 17.5066L11.5514 11.4253L17.188 9.17062L4.96488 5.09625ZM2.89945 2.29958L21.7052 8.56818C21.9672 8.6555 22.1088 8.93866 22.0215 9.20063C21.975 9.34016 21.8694 9.45214 21.7328 9.50676L13.0002 12.9998L8.57501 21.8501C8.45151 22.0971 8.15118 22.1972 7.90419 22.0737C7.77883 22.011 7.68553 21.8986 7.64703 21.7639L2.26058 2.91129C2.18472 2.64577 2.33846 2.36903 2.60398 2.29316C2.70087 2.26548 2.80386 2.26772 2.89945 2.29958Z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gray-900 mb-2">Discover</h5>
                    <p className="text-gray-600">Find the needle in the haystack in seconds, uncovering insights at scale.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-white">
                      <polygon fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.84" points="17.53 10.16 12.92 10.16 12.92 3.71 6.47 13.84 11.08 13.84 11.08 20.3 17.53 10.16"/>
                      <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.84" d="M16.61,3a10.14,10.14,0,0,1-2.94,19"/>
                      <path fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.84" d="M7.39,21A10.14,10.14,0,0,1,10.33,2"/>
                      <polyline fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.84" points="16.61 7.39 16.61 2.78 21.22 2.78"/>
                      <polyline fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="1.84" points="7.39 16.61 7.39 21.22 2.78 21.22"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="text-gray-900 mb-2">Automate</h5>
                    <p className="text-gray-600">Eliminate manual work with reliable automation, saving time and cost.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex justify-center">
              <img
                className="w-full max-w-xs sm:max-w-md mx-auto rounded-sm object-contain"
                src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/68d6ef63f37f1af593bbee9e_vlb-explore-manufacturing3.png"
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
                Our customers report immediate ROI: from cost savings to faster throughput and significant accuracy improvements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* +30% Increase in Model Accuracy */}
              <div className="text-center">
                <span className="block text-sm font-semibold mb-2 invisible">Up to</span>
                <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold">+30%</span>
                </div>
                <h4 className="font-bold mb-3">Increase in Model Accuracy</h4>
                <p className="text-gray-900 leading-relaxed">
                  Deliver significantly higher accuracy, reduce false negatives and catch issues earlier.
                </p>
              </div>

              {/* Up to 20× Faster Model Development */}
              <div className="text-center">
                <span className="block text-sm font-semibold mb-2">Up to</span>
                <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold">20×</span>
                </div>
                <h4 className="font-bold mb-3">Faster Model Development</h4>
                <p className="text-gray-900 leading-relaxed">
                  Shrink training and deployment cycles from months to days, accelerating time-to-value.
                </p>
              </div>

              {/* Up to Higher Yield Lower Escape Rate */}
              <div className="text-center">
                <span className="block text-sm font-semibold mb-2 invisible" >Up to</span>
                <div className="w-32 h-32 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="50%" height="50%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trending-up">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                    <polyline points="17 6 23 6 23 12"></polyline>
                  </svg>
                </div>
                <h4 className="font-bold mb-3">Higher Yield, Lower Escape</h4>
                <p className="text-gray-900 leading-relaxed">
                  Reduce defective units that slip past inspection; boost overall yield and customer satisfaction.
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
                <SalesforceForm />
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
                <img 
                className="rounded-sm mx-auto " 
                src="https://cdn.prod.website-files.com/66603dc3a8308da80ba98f5e/68d953ad20210cfdb85d8e30_vlb-explore-manufacturing4.png" alt="Visual Layer Dataset for Model Training"/>
              </div>
            </div>
            
          </div>

 
  
        </div>
        <FooterNoNewsletter />
      </section>
      
    </div>
    
  )
}
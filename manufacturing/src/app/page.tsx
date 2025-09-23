"use client";

import { DemoForm } from "@/components/forms/DemoForm";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "white", fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "#0E0022",
          padding: "80px 0"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
              gap: "48px",
              alignItems: "center"
            }}
          >
            {/* Left Column - Headlines */}
            <div>
              <h1
                style={{
                  fontSize: "3.75rem",
                  lineHeight: 1.1,
                  marginBottom: "24px",
                  color: "white",
                  fontWeight: 700
                }}
              >
                Achieve <span style={{ color: "#60a5fa" }}>90% Better</span> Defect Detection
              </h1>
              <h2
                style={{
                  fontSize: "1.875rem",
                  color: "#e5e7eb",
                  marginBottom: "24px"
                }}
              >
                In Days, Not Months
              </h2>

              <p
                style={{
                  fontSize: "1.25rem",
                  color: "#d1d5db",
                  marginBottom: "32px",
                  lineHeight: 1.6
                }}
              >
                Visual Layer turns raw inspection data into ROI-driven models that work in live production.
              </p>

              {/* Demo Benefits */}
              <div style={{ marginBottom: "32px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ color: "#60a5fa", fontSize: "1.5rem", marginTop: "4px" }}>📊</div>
                  <div>
                    <h4 style={{ marginBottom: "4px", color: "white", fontWeight: 600, fontSize: "14px" }}>DATA QUALITY FIRST</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                      Curates and validates data, uncovers unseen defects, and keeps results production-ready.
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ color: "#60a5fa", fontSize: "1.5rem", marginTop: "4px" }}>⚡</div>
                  <div>
                    <h4 style={{ marginBottom: "4px", color: "white", fontWeight: 600, fontSize: "14px" }}>RAPID DEPLOYMENT</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                      Accelerate model training and retraining in days instead of months with models that actually work.
                    </p>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ color: "#60a5fa", fontSize: "1.5rem", marginTop: "4px" }}>💻</div>
                  <div>
                    <h4 style={{ marginBottom: "4px", color: "white", fontWeight: 600, fontSize: "14px" }}>CPU-FIRST PLATFORM</h4>
                    <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                      Get up and running on standard hardware for ingestion and indexing, with optimized infrastructure and minimal GPU dependency.
                    </p>
                  </div>
                </div>
              </div>

              {/* Industry Recognition */}
              <div>
                <p style={{ fontSize: "0.875rem", color: "#d1d5db", marginBottom: "12px" }}>Industry Recognition:</p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      padding: "8px 16px",
                      border: "1px solid #6b7280",
                      color: "#e5e7eb",
                      borderRadius: "4px",
                      backgroundColor: "rgba(107, 114, 128, 0.1)"
                    }}
                  >
                    Apple Partners
                  </span>
                  <span
                    style={{
                      fontSize: "0.875rem",
                      padding: "8px 16px",
                      border: "1px solid #6b7280",
                      color: "#e5e7eb",
                      borderRadius: "4px",
                      backgroundColor: "rgba(107, 114, 128, 0.1)"
                    }}
                  >
                    Trusted by Fortune 10 Companies
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Demo Form */}
            <div style={{ paddingLeft: "32px" }}>
              <DemoForm />
            </div>
          </div>
        </div>
      </section>

      {/* Why Visual Layer Section */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "2.25rem", marginBottom: "16px", color: "#111827" }}>
              Why Partner with Visual Layer
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px"
            }}
          >
            <div
              style={{
                textAlign: "center",
                backgroundColor: "white",
                padding: "32px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
              }}
            >
              <div
                style={{
                  backgroundColor: "#dbeafe",
                  borderRadius: "50%",
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px auto",
                  fontSize: "2rem"
                }}
              >
                🏭
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "16px", color: "#111827" }}>
                Proven Production Impact
              </h3>
              <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
                Cut deployment cycles from months to days, reduce review costs by 95%, and increase factory yield.
              </p>
            </div>

            <div
              style={{
                textAlign: "center",
                backgroundColor: "white",
                padding: "32px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
              }}
            >
              <div
                style={{
                  backgroundColor: "#dcfce7",
                  borderRadius: "50%",
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px auto",
                  fontSize: "2rem"
                }}
              >
                💰
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "16px", color: "#111827" }}>
                Clear ROI
              </h3>
              <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
                Consistent payback proven in live production—lower warranty costs, less waste, more throughput.
              </p>
            </div>

            <div
              style={{
                textAlign: "center",
                backgroundColor: "white",
                padding: "32px",
                borderRadius: "8px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
              }}
            >
              <div
                style={{
                  backgroundColor: "#fae8ff",
                  borderRadius: "50%",
                  width: "64px",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px auto",
                  fontSize: "2rem"
                }}
              >
                🔍
              </div>
              <h3 style={{ fontSize: "1.25rem", marginBottom: "16px", color: "#111827" }}>
                ~100% Defect Detection
              </h3>
              <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
                Achieve advanced AI-powered inspection with vastly higher defect detection accuracy
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Section */}
      <section style={{ padding: "80px 0", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
              gap: "48px",
              alignItems: "center"
            }}
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1683765084506-3ad53915aa01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwcXVhbGl0eSUyMGNvbnRyb2wlMjBpbnNwZWN0aW9ufGVufDF8fHx8MTc1ODYyNjM2OXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Manufacturing quality control inspection"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  height: "384px",
                  objectFit: "cover"
                }}
              />
            </div>
            <div>
              <h3 style={{ fontSize: "1.875rem", marginBottom: "24px", color: "#111827" }}>
                Advanced AI-Powered Inspection
              </h3>
              <p style={{ fontSize: "1.125rem", color: "#374151", marginBottom: "24px", lineHeight: 1.6 }}>
                Manual inspection misses up to 30% of defects, driving quality costs that consume 5–35% of revenue.
                Visual Layer closes this gap with automated inspection at scale.
              </p>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <span style={{ color: "#16a34a", fontSize: "1.25rem" }}>✓</span>
                  <p style={{ color: "#111827" }}>Automatically identify defects with 90% higher accuracy</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <span style={{ color: "#16a34a", fontSize: "1.25rem" }}>✓</span>
                  <p style={{ color: "#111827" }}>Integrate seamlessly with existing systems (CAD, MES, quality pipelines) without rip-and-replace</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <span style={{ color: "#16a34a", fontSize: "1.25rem" }}>✓</span>
                  <p style={{ color: "#111827" }}>Continuously monitor and adapt models for sustained accuracy in production</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ color: "#16a34a", fontSize: "1.25rem" }}>✓</span>
                  <p style={{ color: "#111827" }}>Control your data completely with self-hosted deployment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(500px, 1fr))",
              gap: "48px",
              alignItems: "center"
            }}
          >
            <div>
              <h3 style={{ fontSize: "1.875rem", marginBottom: "24px", color: "#111827" }}>
                Enterprise-Ready Platform
              </h3>
              <p style={{ fontSize: "1.25rem", color: "#6b7280", marginBottom: "24px" }}>
                Built for manufacturing scale with enterprise security and compliance.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "16px"
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <h4 style={{ marginBottom: "8px", fontWeight: 600, color: "#111827" }}>Purpose-built for Manufacturing</h4>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Tailored to manufacturing workflows with enterprise-grade security</p>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <h4 style={{ marginBottom: "8px", fontWeight: 600, color: "#111827" }}>Scalable Architecture</h4>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Handle thousands of inspections per hour with consistent performance</p>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <h4 style={{ marginBottom: "8px", fontWeight: 600, color: "#111827" }}>Aerospace & Defense Ready</h4>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Proven CAD reuse capabilities for complex aerospace and defense manufacturing requirements</p>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    padding: "16px",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <h4 style={{ marginBottom: "8px", fontWeight: 600, color: "#111827" }}>Expert Support</h4>
                  <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Dedicated implementation team, ongoing technical support, and a true partner in your success</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1647427060118-4911c9821b82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwQUklMjB0ZWNobm9sb2d5JTIwYXV0b21hdGlvbnxlbnwxfHx8fDE3NTg2MjYzNzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Industrial AI technology automation"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  height: "384px",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{ padding: "80px 0", backgroundColor: "#f9fafb" }}>
        <div style={{ maxWidth: "1024px", margin: "0 auto", padding: "0 24px" }}>
          <NewsletterSignup />
        </div>
      </section>
    </div>
  );
}
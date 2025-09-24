"use client";

import { DemoForm } from "@/components/forms/DemoForm";
import { NewsletterSignup } from "@/components/forms/NewsletterSignup";

export default function Home() {
  const gradientBorder: React.CSSProperties = {
    border: "none",
    borderRadius: "16px",
    background: "linear-gradient(to right, #A63B94, #0197D8, #1BC07D)",
    padding: ".5px"
  };
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
    fontWeight: "300"
  }}
>
  Achieve{" "}
  <span
    style={{
      fontWeight: "800",
      background: "linear-gradient(to right, #A63B94, #0197D8, #1BC07D)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "transparent"
    }}
  >
    90% Better
  </span>{" "}
  Defect Detection
</h1>
              <h2
                style={{
                  fontSize: "1.875rem",
                  color: "#e5e7eb",
                  marginBottom: "24px"
                }}
              >
                <span style={{ fontWeight: "900" }}>In Days</span>, Not Months
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
              <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
              <img
                src="/quality.png"
                alt="Data Quality Icon"
                style={{ width: "24px", height: "24px", marginTop: "4px" }}
              />
              <div>
                <h4 style={{ marginBottom: "4px", color: "white", fontWeight: "900" }}>DATA QUALITY FIRST</h4>
                <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                  Curates and validates data, uncovers unseen defects, and keeps results production-ready.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "16px" }}>
              <img
                src="speed.png"
                alt="Rapid Deployment Icon"
                style={{ width: "24px", height: "24px", marginTop: "4px" }}
              />
              <div>
                <h4 style={{ marginBottom: "4px", color: "white", fontWeight: "900" }}>RAPID DEPLOYMENT</h4>
                <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                  Accelerate model training and retraining in days instead of months with models that actually work.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <img
                src="increase-trend.png"
                alt="CPU First Icon"
                style={{ width: "24px", height: "24px", marginTop: "4px" }}
              />
              <div>
                <h4 style={{ marginBottom: "4px", color: "white", fontWeight: "900" }}>CPU-FIRST PLATFORM</h4>
                <p style={{ color: "#d1d5db", fontSize: "0.875rem" }}>
                  Get up and running on standard hardware for ingestion and indexing, with optimized infrastructure and minimal GPU dependency.
                </p>
              </div>
            </div>

              {/* Industry Recognition */}
              <div>
                <p style={{ fontSize: "0.875rem", color: "#d1d5db", marginBottom: "12px", marginTop:"32px" }}>Industry Recognition:</p>
                <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <span style={{ ...gradientBorder, display: "inline-block" }}>
                  <span style={{
                    display: "block",
                    borderRadius: "14px",
                    backgroundColor: "#160C28",
                    padding: "12px 20px",
                    fontSize: "0.875rem",
                    color: "#e5e7eb",
                    fontWeight: 700,
                    textAlign: "center",
                    minWidth: "160px"
                  }}>
                    Apple Partners
                  </span>
                </span>
                <span style={{ ...gradientBorder, display: "inline-block" }}>
                  <span style={{
                    display: "block",
                    borderRadius: "14px",
                    backgroundColor: "#160C28",
                    padding: "12px 20px",
                    fontSize: "0.875rem",
                    color: "#e5e7eb",
                    fontWeight: 700,
                    textAlign: "center",
                    minWidth: "160px"
                  }}>
                    Trusted by Fortune 10 Companies
                  </span>
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
<section style={{ padding: "80px 0" }}>
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
            <img
                src="/manufacturing-images.png"
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
</section>
      {/* Why Visual Layer Section */}
      <section style={{ padding: "80px 0" }}>
        
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
          <div style={{ textAlign: "center", marginBottom: "64px" }}>
            <h2 style={{ fontSize: "2.25rem", marginBottom: "16px", color: "#111827" }}>
              Why Partner with{" "}
              <span
                style={{
                  fontWeight: "800",
                  background:
                    "linear-gradient(to right, #A63B94, #0197D8, #1BC07D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  color: "transparent"
                }}
              >
                Visual Layer
              </span>
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "32px"
            }}
          >
            <div style={{ ...gradientBorder }}>
              <div style={{
                borderRadius: "14px",
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                padding: "32px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                textAlign: "center"
              }}>
                <div
                  style={{
                    backgroundColor: "#A281C5",
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
                                    <img
                  src="/factory.svg"
                  alt="factory Icon"
                  style={{ width: "40px", height: "40px" }}
                />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "16px", color: "#111827" }}>
                  <span style={{ fontWeight: "800" }}>Proven Production Impact</span>
                </h3>
                <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
                  Cut deployment cycles from months to days, reduce review costs
                  by 95%, and increase factory yield.
                </p>
              </div>
            </div>

            <div style={{ ...gradientBorder }}>
              <div style={{
                borderRadius: "14px",
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                padding: "32px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                textAlign: "center"
              }}>
                <div
                  style={{
                    backgroundColor: "#808CC6",
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
                  <img
                  src="/dollar.svg"
                  alt="dollar Icon"
                  style={{ width: "40px", height: "40px" }}
                />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "16px", color: "#111827" }}>
                  <span style={{ fontWeight: "800" }}>Clear ROI</span>
                </h3>
                <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
                  Consistent payback proven in live production—lower warranty
                  costs, less waste, more throughput.
                </p>
              </div>
            </div>

            <div style={{ ...gradientBorder }}>
              <div style={{
                borderRadius: "14px",
                backgroundColor: "white",
                height: "100%",
                width: "100%",
                padding: "32px",
                boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)",
                textAlign: "center"
              }}>
                <div
                  style={{
                    backgroundColor: "#0A99C9",
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
                  <img
                  src="/find.svg"
                  alt="find Icon"
                  style={{ width: "40px", height: "40px" }}
                />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "16px", color: "#111827" }}>
                  <span style={{ fontWeight: "800" }}>~100% Defect Detection</span>
                </h3>
                <p style={{ color: "#6b7280", lineHeight: 1.6 }}>
                  Achieve advanced AI-powered inspection with vastly higher defect
                  detection accuracy
                </p>
              </div>
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
                src="/right-panel.png"
                alt="Manufacturing quality control inspection"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  width: "80%",
                  height: "400px",
                  objectFit: "cover"
                }}
              />
            </div>
            <div>
                <h3 style={{ fontSize: "1.875rem", marginBottom: "24px", color: "#111827" }}>
                Advanced<span style={{ fontWeight: "800" }}> AI-Powered </span>Inspection
                </h3>
              <p style={{ fontSize: "1.125rem", color: "#374151", marginBottom: "24px", lineHeight: 1.6 }}>
                Manual inspection misses up to 30% of defects, driving quality costs that consume 5–35% of revenue.
                Visual Layer closes this gap with automated inspection at scale.
              </p>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <img
  src="/bullet.png"
  alt="Green Bullet"
  style={{ width: "20px", height: "20px" }}
/>
                  <p style={{ color: "#111827" }}>Automatically identify defects with 90% higher accuracy</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <img
  src="/bullet.png"
  alt="Green Bullet"
  style={{ width: "20px", height: "20px" }}
/>
                  <p style={{ color: "#111827" }}>Integrate seamlessly with existing systems (CAD, MES, quality pipelines) without rip-and-replace</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <img
  src="/bullet.png"
  alt="Green Bullet"
  style={{ width: "20px", height: "20px" }}
/>
                  <p style={{ color: "#111827" }}>Continuously monitor and adapt models for sustained accuracy in production</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <img
  src="/bullet.png"
  alt="Green Bullet"
  style={{ width: "20px", height: "20px" }}
/>
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
                <span style={{ fontWeight: "800" }}>Enterprise-Ready </span>Platform
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
                <div style={{ ...gradientBorder }}>
                  <div style={{
                    borderRadius: "14px",
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                    padding: "16px",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                  }}>
                    <h4 style={{ marginBottom: "8px", fontWeight: "900", color: "#111827" }}>Purpose-built for Manufacturing</h4>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Tailored to manufacturing workflows with enterprise-grade security</p>
                  </div>
                </div>
                <div style={{ ...gradientBorder }}>
                  <div style={{
                    borderRadius: "14px",
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                    padding: "16px",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                  }}>
                    <h4 style={{ marginBottom: "8px", fontWeight: "900", color: "#111827" }}>Scalable Architecture</h4>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Handle thousands of inspections per hour with consistent performance</p>
                  </div>
                </div>
                <div style={{ ...gradientBorder }}>
                  <div style={{
                    borderRadius: "14px",
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                    padding: "16px",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                  }}>
                    <h4 style={{ marginBottom: "8px", fontWeight: "900", color: "#111827" }}>Aerospace & Defense Ready</h4>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Proven CAD reuse capabilities for complex aerospace and defense manufacturing requirements</p>
                  </div>
                </div>
                <div style={{ ...gradientBorder }}>
                  <div style={{
                    borderRadius: "14px",
                    backgroundColor: "white",
                    height: "100%",
                    width: "100%",
                    padding: "16px",
                    boxShadow: "0 1px 3px 0 rgba(0, 0, 0, 0.1)"
                  }}>
                    <h4 style={{ marginBottom: "8px", fontWeight: "900", color: "#111827" }}>Expert Support</h4>
                    <p style={{ color: "#6b7280", fontSize: "0.875rem" }}>Dedicated implementation team, ongoing technical support, and a true partner in your success</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                  width: "100%",
                  height: "384px"
                }}
              >
                <img
                  src="/vlb-explore-manufacturing3.png"
                  alt="Industrial AI technology automation"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ marginTop: "80px" }}>
            <img
                src="/vlb-explore-manufacturing.png"
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
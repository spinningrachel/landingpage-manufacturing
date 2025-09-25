import "../index.css";

export const metadata = {
  title: "Visual Layer Manufacturing - AI-Powered Defect Detection",
  description: "Achieve 90% Better Defect Detection in Days, Not Months. Visual Layer turns raw inspection data into ROI-driven models that work in live production.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{
        minHeight: "100vh",
        backgroundColor: "white",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      }}>
        {children}
      </body>
    </html>
  );
}
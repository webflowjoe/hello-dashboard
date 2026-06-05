export const metadata = {
  title: 'Hello Dashboard',
  description: 'Webflow Cloud deploy test',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        background: '#FAFAFA',
        minHeight: '100vh',
      }}>
        {children}
      </body>
    </html>
  );
}

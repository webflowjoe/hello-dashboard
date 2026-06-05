export default function HomePage() {
  return (
    <main style={{
      maxWidth: 720,
      margin: '0 auto',
      padding: '80px 24px',
    }}>
      <div style={{
        fontSize: 12,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        color: '#6B6557',
        marginBottom: 16,
      }}>
        Webflow Cloud Deploy Test
      </div>
      <h1 style={{
        fontSize: 48,
        fontWeight: 600,
        margin: '0 0 16px 0',
        color: '#0F4C75',
        letterSpacing: '-0.02em',
      }}>
        Hello from the dashboard.
      </h1>
      <p style={{
        fontSize: 18,
        color: '#1A1916',
        lineHeight: 1.5,
        marginBottom: 32,
      }}>
        If you can read this, the deployment pipeline works. We can proceed
        with porting the actual dashboard.
      </p>
      <div style={{
        padding: '16px 20px',
        background: '#FFFFFF',
        border: '1px solid #E5E5E5',
        borderRadius: 4,
        fontSize: 14,
        color: '#6B6557',
      }}>
        <div style={{ marginBottom: 4 }}>
          <strong style={{ color: '#1A1916' }}>Build timestamp:</strong> {new Date().toISOString()}
        </div>
        <div>
          <strong style={{ color: '#1A1916' }}>Next.js + OpenNext + Cloudflare Workers</strong> via Webflow Cloud
        </div>
      </div>
    </main>
  );
}

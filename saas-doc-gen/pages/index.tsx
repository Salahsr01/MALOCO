import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Welcome to SaaS Doc Gen</title>
        <meta name="description" content="Generate documents easily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Welcome to SaaS Document Generator</h1>
        <p>Your go-to solution for creating professional documents quickly.</p>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/dashboard" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#0070f3', color: 'white', textDecoration: 'none', borderRadius: '5px' }}>
            Go to Dashboard
          </Link>
        </div>
        {/* You can add more marketing content or a call to action to sign up/login here */}
      </main>
    </>
  );
}

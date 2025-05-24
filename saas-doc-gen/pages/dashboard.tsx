import Head from 'next/head';
import Navbar from '../components/Navbar';
// import FormComponent from '../components/Form'; // Uncomment when Form is ready

export default function DashboardPage() {
  // Placeholder for user session - replace with actual auth check
  const user = { name: 'Demo User', email: 'user@example.com' }; // Replace with actual user data from Clerk/Supabase

  if (!user) {
    // Handle case where user is not logged in, e.g., redirect to login
    // For now, just showing a message.
    return (
      <>
        <Navbar />
        <main style={{ padding: '2rem' }}>
          <p>Please log in to access the dashboard.</p>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>Dashboard - SaaS Doc Gen</title>
        <meta name="description" content="Manage your documents" />
      </Head>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Dashboard</h1>
        <p>Welcome, {user.name}!</p>
        <p>Select a document type to get started:</p>
        {/* Placeholder for document type selection */}
        <div>
          <button style={{ marginRight: '1rem', padding: '0.5rem 1rem' }}>Create Invoice</button>
          <button style={{ padding: '0.5rem 1rem' }}>Create Report</button>
          {/* Add more document types as needed */}
        </div>
        <div style={{ marginTop: '2rem' }}>
          {/* <FormComponent /> */} {/* Uncomment and pass props when Form.tsx is implemented */}
          <p><em>Form will be displayed here once a document type is selected.</em></p>
        </div>
      </main>
    </>
  );
}

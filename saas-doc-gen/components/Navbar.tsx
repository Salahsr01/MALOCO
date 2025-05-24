// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

// Placeholder for authentication status - replace with actual Clerk/Supabase logic
const useAuth = () => {
  // Replace with actual useUser() from Clerk or session from Supabase
  return { isSignedIn: true, user: { name: 'Demo User' } };
};

const Navbar: React.FC = () => {
  const { isSignedIn, user } = useAuth(); // Replace with actual auth hook

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem', backgroundColor: '#f0f0f0' }}>
      <Link href="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold', fontSize: '1.2rem' }}>
        SaaS DocGen
      </Link>
      <div>
        <Link href="/dashboard" style={{ marginRight: '1rem', textDecoration: 'none', color: '#0070f3' }}>
          Dashboard
        </Link>
        {isSignedIn ? (
          <>
            <span style={{ marginRight: '1rem' }}>Welcome, {user?.name}!</span>
            {/* Add a sign out button here that calls Clerk.signOut() or Supabase.auth.signOut() */}
            <button onClick={() => alert('Sign out clicked - implement actual sign out')}>Sign Out</button>
          </>
        ) : (
          <>
            {/* Replace with actual Clerk <SignInButton /> or Supabase login logic */}
            <button onClick={() => alert('Sign in clicked - implement actual sign in')} style={{ marginRight: '0.5rem' }}>Sign In</button>
            <button onClick={() => alert('Sign up clicked - implement actual sign up')}>Sign Up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

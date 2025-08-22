"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import type { UserProfile } from '@/types';
import { usePathname, useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  loading: boolean;
  role: 'admin' | 'client' | null;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userProfile: null,
  loading: true,
  role: null,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<'admin' | 'client' | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        setUser(user);
        const userDocRef = doc(db, 'users', user.uid);
        try {
            const userDoc = await getDoc(userDocRef);
            if (userDoc.exists()) {
              const profile = userDoc.data() as UserProfile;
              setUserProfile(profile);
              setRole(profile.role);
              
              const isAuthPage = pathname === '/login' || pathname === '/signup';
              if (isAuthPage) {
                router.push(profile.role === 'admin' ? '/admin' : '/client');
              }

            } else {
              setRole(null);
              setUserProfile(null);
              router.push('/login');
            }
        } catch (error) {
            console.error("Error fetching user role:", error);
            setRole(null);
            setUserProfile(null);
            router.push('/login');
        }

      } else {
        setUser(null);
        setRole(null);
        setUserProfile(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router, pathname]);

  return (
    <AuthContext.Provider value={{ user, userProfile, loading, role }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

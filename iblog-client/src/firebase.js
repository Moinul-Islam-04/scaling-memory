import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
// Environment variables are loaded from .env file
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBBc5ht0ptfYgPY6883266vlaqetRRJrvw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "iblog-2b002.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "iblog-2b002",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "iblog-2b002.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "980135420193",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:980135420193:web:7720919e893048e5f1de60"
};

// Debug: Log environment variables (remove in production)
console.log('Firebase Config:', {
  apiKey: firebaseConfig.apiKey ? '✓ Loaded' : '✗ Missing',
  authDomain: firebaseConfig.authDomain ? '✓ Loaded' : '✗ Missing',
  projectId: firebaseConfig.projectId ? '✓ Loaded' : '✗ Missing',
  storageBucket: firebaseConfig.storageBucket ? '✓ Loaded' : '✗ Missing',
  messagingSenderId: firebaseConfig.messagingSenderId ? '✓ Loaded' : '✗ Missing',
  appId: firebaseConfig.appId ? '✓ Loaded' : '✗ Missing'
});

// Check if all required environment variables are present
const requiredEnvVars = ['AIzaSyBBc5ht0ptfYgPY6883266vlaqetRRJrvw', 'iblog-2b002.firebaseapp.com', 'iblog-2b002', 'iblog-2b002.firebasestorage.app'];
const missingEnvVars = requiredEnvVars.filter(varName => !import.meta.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('Missing required environment variables:', missingEnvVars);
  console.error('Please check your .env file and make sure all Firebase configuration variables are set.');
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google provider
export const googleProvider = new GoogleAuthProvider();

export default app; 
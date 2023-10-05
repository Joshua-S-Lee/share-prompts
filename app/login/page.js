import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { signUp } from '../../lib/auth';

export default function SignUp() {
    const [session] = useSession();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    // Redirect to home page if user is already signed in
    if (session) {
        router.push('/');
        return null;
    }

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await signUp(email, password);
            router.push('/login');
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p>{error}</p>}
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
}

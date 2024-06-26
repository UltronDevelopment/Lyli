/* 
    File:    src/app/auth/register/page.jsx
    Author:  RappyTV <rappytv@rappytv.com>
    Date:    1 June 2023

    This program is free software: you can redistribute it and/or modify it
    under the terms of the GNU General Public License as published by the Free
    Software Foundation, either version 3 of the License, or (at your option) any
    later version.

    This program is distributed in the hope that it will be useful, but WITHOUT
    ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
    details.

    You should have received a copy of the GNU General Public License along
    with this program. If not, see <https://www.gnu.org/licenses/>.

    © UPN Development 2021
*/

'use client'

import Link from 'next/link';
import { useEffect, useState } from 'react';

const RegisterPage = () => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        setError(``);
    }, [user, email, pass]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Send credentials to backend
    };
    
    return (
        <>
            <img src="/img/branding.png" alt="" />
            <div id="form-wrap-top">
                <h2>Register</h2>
                <h5 id="error">{error}</h5>
                <form id="login-form" onSubmit={handleSubmit}>
                    <input type="text" id="username" name="username" placeholder="Username" autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} required />
                    <input type="email" id="email" name="email" placeholder="E-Mail" autoComplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <input type="password" id="Password" name="Password" placeholder="Password" onChange={(e) => setPass(e.target.value)} value={pass} required />
                    <input type="submit" id="login" value="Create account" />
                </form>
                <p><Link href="/auth/login">Already have an account?</Link></p>
                <div id="form-wrap-bottom"></div>
            </div>
        </>
    )
}

export default RegisterPage;
/* 
    File:    src/app/auth/register/page.js
    Author:  RappyTV <rappytv@rappytv.com>
    Date:    1 July 2023

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

import { useState } from 'react';

const ResetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Send data to backend
    };
    
    return (
        <>
            <img src="/img/branding.png" alt="" />
            <div id="login-form-wrap">
                <h2>Reset Password</h2>
                <h5 style={{ color: '#33ff17' }}>{error}</h5>
                <form id="login-form" onSubmit={handleSubmit}>
                    <input type="email" id="email" name="email" placeholder="E-Mail" autocomplete="off" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <input type="submit" id="login" value="Send" />
                </form>
                <p><a href="login">Login</a></p>
                <div id="create-account-wrap"></div>
            </div>
        </>
    )
}

export default ResetPasswordPage;
/* 
    File:    src/app/[list]/page.jsx
    Author:  RappyTV <rappytv@rappytv.com>
    Date:    30 June 2023

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

import Head from 'next/head';
import { notFound } from 'next/navigation';

const lists = [
    {
        user: {
            name: `ultronreal`,
            avatar: `https://cdn.discordapp.com/avatars/846419661456539738/ac088a0165acdd3722d60a4c36ac8bdc.png?size=1024`,
            flags: [`verified`, `dev`]
        },
        background: `https://cdn.rappytv.com/ultron/bg.png`,
        links: [
            {
                label: `My Project Lyli`,
                url: `https://lyli.site`
            },
            {
                label: `My Project Straio`,
                url: `https://straio.de`
            }
        ]
    }
];

export async function generateMetadata({ params: { list: path } }) {
    const list = lists.find((list) => `%40${list.user.name}` == path);

    if(!list) return notFound();

    return {
        title: `Lyli - @${list.user.name}`,
    }
}

const ListPage = ({ params: { list: path } }) => {
    const list = lists.find((list) => `%40${list.user.name}` == path);

    return (
        <>
            <img className="icon" src={list.user.avatar} alt="icon" />
            <h1 className="username">
                @{list.user.name} {list.user.flags.map((flag) =>
                    <span className={`${flag}-badge`}></span>
                )}
            </h1>
            <br />
            {list.links.map((link, index) => 
                <a key={index} className="button" href={link.url} target="_blank">{link.label}</a>
            )}
            <br />
            <br />
            <div className="bg">
                <img className="bg-image" src={list.background} alt="" />
            </div>

            <footer>
                <p className="footer-text">&copy; Lyli, 2023</p>
            </footer>
        </>
    )
}

export default ListPage;
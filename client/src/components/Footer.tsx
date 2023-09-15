import { Key } from 'react'

// The list of links to add to the footer in [text, route] pairs
const routes = [  
    ['Privacy Policy', '/privacy_policy'],
]

// Allows adding link elements to the footer
function FooterLinkElement({route, rkey}: {route: string[], rkey: Key}) {
    const title = route[0]
    const url = route[2]

    return (
        <li key={rkey} className="list-none">
            <div className="flex justify-center items-center -ml-3 mr-1">
                <p>|&nbsp;</p>
                <a href={url} className="pr-3 py-2 hover:text-button-pink">
                    {title}
                </a>
            </div>
        </li>
    )
}

// A footer containing copyright information and a list of link elements
export default function Footer() {
    return (
        <footer className="bg-footer">
            <div className="flex justify-center items-center">
                <div className="mx-4 my-4">
                    <p className="text-center">© The-Syntax-Sorcerers 2023
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    {routes.map((route, rkey: Key) => (
                        <FooterLinkElement route={route} rkey={rkey} />
                    ))}
                </div>
            </div>
        </footer>
    )
}
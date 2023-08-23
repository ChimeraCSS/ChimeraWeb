'use client';

import Link from "next/link"

const Navbar = () => {
    function toggleTheme() {
        if(document.body.classList.contains("chimera-dark")) {
            document.body.classList.remove("chimera-dark");
        }else{
            document.body.classList.add("chimera-dark");
        }
    }

    return (
        <header className='bg-teal-600 flex items-center justify-between p-5'>
            <div className="w-20 flex gap-2">
                <a href="https://github.com/ChimeraCSS/ChimeraCSS">
                    <img alt="github logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
                </a>
                <a href="https://www.npmjs.com/package/chimeracss">
                    <img alt="npm logo" src="https://icons.veryicon.com/png/o/miscellaneous/eva-fill/npm-3.png" />
                </a>
            </div>

            {/*This style for nav should be included in Chimera */}
            <nav className='flex gap-4'>
                <Link href="/">ChimeraCSS</Link>
                <Link href="/documentation">Docs</Link>
                <Link href="/test-enviroment">Test-Enviroment</Link>
                <Link href="/contribute">Contribute</Link>
                <Link href="/contact-us">Contact us</Link>
            </nav>
            <button onClick={toggleTheme}>
                Darkmode
            </button>
        </header>
    )
}
export default Navbar
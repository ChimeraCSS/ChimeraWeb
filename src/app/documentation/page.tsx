import Navbar from "../components/Navbar";

const Ingress = () => {
    return(
        <section>
            <h1>Getting started</h1>
            <p>
                Welcome to the ChimeraCSS documentation. 
                The page will guide you through the different parts of the framework.
            </p>
            <blockquote>
                <h3>
                    What does the documentation cover?
                </h3>
                <ul>
                    <li>
                        <a href="#installation">Installation</a>
                    </li>
                    <li>
                        <a href="#elements">Elements</a>
                    </li>
                    <li>
                        <a href="#theme">Theme</a>
                    </li>
                    <li>
                        <a href="#customization">Customization</a>
                    </li>
                </ul>
                <p>
                    <strong>NOTE:</strong> This documentation is still a work in progress.
                </p>
            </blockquote>
        </section>        
    )
}

const Installation = () => {
    return(
        <section id="installation">
            <h2>Installation</h2>
            <p>
                There are several ways to install ChimeraCSS, but the easiest way is to use a CDN.
                Just add this line to your HTML header:
            </p>
            <code>
                &lt;link rel="stylesheet" href="https://unpkg.com/chimeracss/css/chimera.css" /&gt;
            </code>
            <p>
                You can also download the ChimeraCSS package and directly link to the Chimera.css file:
            </p>
            <code>
                npm install chimeracss
            </code>
            <p>or</p>
            <code>
                yarn add chimeracss
            </code>
        </section>
    )
}

const Elements = () => {
    return(
        <section id="elements">
            <h2>Elements</h2> 
            <p><a href="https://unpkg.com/chimeracss/css/chimera.css">This</a> is the full framework</p>
        </section>
    )
}

const Theme = () => {
    return(
        <section id="theme">
            <h2>Theme</h2>
            <p>
                ChimeraCSS has two themes, light and dark. 
                The light theme is the default theme, but
                you can easily change to the dark theme by
                adding the class <code>chimera-dark</code>
                to the body element.
            </p>
            <code>
                &lt;body class="chimera-dark"&gt;
            </code>
            <p>
                You can also change the theme with javascript.
                Just add the class <code>chimera-dark</code> to the body element.
                You can for example toggle this theme with a button running this function:
            </p>
            <code>{/** 
                function toggleTheme() {
                    if(document.body.classList.contains("chimera-dark")) {
                        document.body.classList.remove("chimera-dark");
                    }else{
                        document.body.classList.add("chimera-dark");
                    }
                }            
            */}
            </code>
            <p>
                This style will override the default theme, by using the child selector. 
                Chimera will still be compatible with classbased frameworks like Bootstrap and TailwindCSS.
            </p>
        </section>
    )
}

const Customization = () => {
    return(
        <section id="customization">
            <h2>Customization</h2>
            <p>
                ChimeraCSS uses CSS variables to make it easy to customize the framework.
                You can change the default colors by overriding the CSS variables. For this we will 
                recommend that you locally install the package, so you can edit the CSS file.
            </p>

            <pre>
                /*------------------------------Variables----------------------------*/
                --Chimera-primary: hsl(183, 67%, 40%);
                --Chimera-secondary: hsl(183, 54%, 56%);
                --Chimera-accent: hsl(183, 67%, 40%); /* Same as primary ATM */
                --Chimera-accent-hover: hsl(183, 67%, 35%);
                --Chimera-accent-visited: hsl(183, 67%, 25%);
                --Chimera-accent-active: hsl(183, 67%, 30%);
                --Chimera-text: hsl(0, 0%, 25%);
                --Chimera-background: hsl(40, 30%, 95%);
                --Chimera-background-secondary: hsl(40, 20%, 90%);
            </pre>
        </section>
    )
}


export default function Documentation() {
    return(
        <>
            <Navbar/>
            <main className="w-full flex justify-center py-16">
                <div className="w-1/2">
                    <Ingress/>
                    <Installation/>
                    <Elements/>
                    <Theme/>
                    <Customization/>
                </div>
            </main>
        </>
    )
}
import Navbar from "../components/Navbar";

const Ingress = () => {
    return (
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
                    <ul>
                        <li>
                            <a href="#Button">Button</a>
                        </li>
                        <li>
                            <a href="#Blockquote">Blockquote</a>
                        </li>
                        <li>
                            <a href="#Headings">Headings</a>
                        </li>
                        <li>
                            <a href="#Links">Links</a>
                        </li>
                        <li>
                            <a href="#Tables">Tables</a>
                        </li>
                        <li>
                            <a href="#Textfields">Textfields</a>
                        </li>
                        <li>
                            <a href="#Images">Images</a>
                        </li>

                    </ul>
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
    return (
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
    return (
        <section id="elements">
            <h2>Elements</h2>
            <p><a href="https://unpkg.com/chimeracss/css/chimera.css">This</a> is the full framework</p>
            <Element
                name="Button"
                description="The button element is a simple button with a hover effect."
                cssCode={`
                    button {
                        padding: 7px 16px;
                        font-size: medium;
                        border-radius: 8px;
                        border: 0px;
                        background-color: var(--Chimera-primary);
                        color: #ffff;
                    }
                `}
            >
                <button>Button</button>
            </Element>


            <Element
                name="Headings"
                description="The button element is a simple button with a hover effect."
                cssCode={`
                    button {
                        padding: 7px 16px;
                        font-size: medium;
                        border-radius: 8px;
                        border: 0px;
                        background-color: var(--Chimera-primary);
                        color: #ffff;
                    }
                `}
                >
                <div>
                    <h1>Chimera</h1>
                    <h2>Chimera</h2>
                    <h3>Chimera</h3>
                    <h4>Chimera</h4>
                    <h5>Chimera</h5>
                    <h6>Chimera</h6>
                </div>
                </Element>

            <Element
                name="Blockquote"
                description="The button element is a simple button with a hover effect."
                cssCode={`

                `}
                >
                        <blockquote>
                            Simplicity is the ultimate sophistication.
                            <br />
                            <cite>- Leonardo da Vinci</cite>
                        </blockquote>
                </Element>

                <Element
                name="Textfields"
                description="The button element is a simple button with a hover effect."
                cssCode={`

                `}
                >
                    <input type="text" placeholder="This is a textfield" />
                </Element>

                <Element
                name="Links"
                description="The button element is a simple button with a hover effect."
                cssCode={`

                `}
                >
                    <h3>This is a <a href="#">link</a></h3>
                </Element>

                <Element
                name="Tables"
                description="The button element is a simple button with a hover effect."
                cssCode={`

                `}
                >
                    <table>
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Jill</td>
                                <td>Smith</td>
                                <td>50</td>
                            </tr>
                            <tr>
                                <td>Eve</td>
                                <td>Jackson</td>
                                <td>94</td>
                            </tr>
                        </tbody>
                    </table>
                </Element>

        </section>
    )
}

interface ElementInterface {
    name: string,
    description: string,
    cssCode: string,
    children: JSX.Element
}

const Element = (props: ElementInterface) => {
    return (
        <>
            <h4 id={props.name}>{props.name}</h4>
            <p>{props.description}</p>
            <div className="h-60 bg-bg-ch-secondary rounded-xl flex overflow-hidden">
                <div className="p-5 w-1/2">
                    <code className="">{props.cssCode}</code>
                </div>
                <div className="h-full w-2 bg-ch-primary"></div>
                <div className="p-3 bg-white h-full w-1/2 flex flex-col justify-center items-center">
                    {props.children}
                </div>
            </div>
        </>
    )
}

const Theme = () => {
    return (
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
    return (
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
    return (
        <>
            <Navbar />
            <main className="w-full flex justify-center py-16 ">
                <div className="w-1/2">
                    <Ingress />
                    <Installation />
                    <Elements />
                    <Theme />
                    <Customization />
                </div>
            </main>
        </>
    )
}
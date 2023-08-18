
export default function Home() { 
  return (
    <>
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
          <a>Get Started</a>
          <a>Documentation</a>
          <a>Contribute</a>
          <a>Contact us</a>
        </nav>
      </header>
      <main className="bg-gray-100 flex flex-col items-center">
        <section className="px-6 w-full max-w-4xl">
          <div className='flex flex-col items-center mt-10'>
            <div>
              <img alt="ChimeraCSS logo" src="https://avatars.githubusercontent.com/u/141823796?s=96&v=4" />
            </div>
              <h1>This is <a>ChimeraCSS</a></h1>
              <p>The classless CSS-framework for clean, modern and soft design.</p>

              {/*This style for buttons should be included in Chimera */} 
              <button className='mt-6'>Get started</button>  
          </div>
          <hr className="my-10"/>
          <div>
            <h2>The principle of classless css</h2>
            <p>
              Instead of building every new UI project bottom-up all over again, we can use a classless CSS-framework to build on top of.
              By overriding the default html styles for <samp>elements</samp>, you can get consistent design across your project,
              from the start.
            </p>
          </div>

          <div>
            <h3>Benefits of using classless and Chimera</h3>
            <p>
              Apart from the obvious benefit of not having
              to write any CSS and good-looking UI, there are other benefits to
              using a classless framework like <strong>ChimeraCSS</strong>.
            </p>

            <h4>No maintaining of css</h4>
            <p>
                You dont have to remember and maintain 
                <code>.classNames</code> or <code>#ids</code>.
            </p>

            <h4>Easy to get started</h4>
            <p>
                It is easy to get started with, and easy to learn;
                just add the stylesheet to your project and you are good to go.
            </p>

            <h4>Easy to customize</h4>
            <p>
                It is easy to customize! Element styles are at the bottom of the css hierarchy, so you can easily override them with your own styles.
                This also means that you can use it with class-based frameworks like Bootstrap or TailwindCSS (Which is used at this webpage). 
            </p>

            <h4>Accessibility from the start</h4>
            <p>
                Classless styling encourages the use of good semantics
                in your HTML, which is good for SEO and accessibility.
                ChimeraCSS has accessibility as one of its core principles, which is why
                buuttons, links, inputs and other elements are all styled
                with accessibility in mind.
            </p>

            <h4>Responsive by default</h4>
            <p>
              We want to bring the benefits of Chimera to all platforms and devices.
              That is why ChimeraCSS is responsive by default, and this picture will
              look good on your laptop as well as your phone or tablet.
              <div  className="w-full flex justify-center">
                <div className="w-2/3 max-w-2xl">
                  <img src='https://images.unsplash.com/photo-1682687219640-b3f11f4b7234?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60'/>
                </div>
              </div>
            </p>
          </div>

          <div className="mt-10">
            <hr/>
            <h2>Get started</h2>
            <p>You can implement chimera into your private project by including this tag in your HTML header. (Remember to declare version where &quot;:version&quot; is, in the URL)</p>
            <pre>
              <code className="lang-html">
                &lt;link <span className="hljs-keyword">rel</span>=<span className="hljs-string">"stylesheet"</span> <span className="hljs-keyword">type</span>=<span className="hljs-string">"text/css"</span> href=<span className="hljs-string">"https://unpkg.com/chimeracss@:version/chimera.css"</span>/&gt;
              </code>
            </pre>
            <p>if you want the darkmode version of chimera, import this tag</p>
            <pre>
              <code className="lang-html">
                &lt;link <span className="hljs-keyword">rel</span>=<span className="hljs-string">"stylesheet"</span> <span className="hljs-keyword">type</span>=<span className="hljs-string">"text/css"</span> href=<span className="hljs-string">"https://unpkg.com/chimeracss@:version/chimera-dark.css"</span>/&gt;
              </code>
            </pre>
            <p>You can also download the ChimeraCSS package and directly link to the Chimera.css file:</p>
            <pre>
              <code className="lang-bash">
                npm <span className="hljs-keyword">install</span> chimeracss
              </code>
            </pre>
            <p>or</p>
            <pre>
              <code className="lang-bash">
                yarn <span className="hljs-keyword">add</span><span className="bash"> chimeracss</span>
              </code>
            </pre>
          </div>         
          </section>
      </main>
    </> 
  )
}

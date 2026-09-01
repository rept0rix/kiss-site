import './style.css'

const appUrl = import.meta.env.VITE_APP_URL || '#app'

document.querySelector('#app').innerHTML = `
  <header class="hero">
    <img class="hero-icon" src="/kiss-icon-512.png" width="128" height="128" alt="KISS lips icon" />
    <h1 class="logo">KISS</h1>
    <p class="tagline">Throw a kiss at someone.<br />That's the whole app.</p>
    <a class="cta" id="open-kiss" href="${appUrl}">Open KISS</a>
  </header>

  <main>
    <section class="section" id="how">
      <h2>How it works</h2>
      <ol class="steps">
        <li>
          <span class="step-num">1</span>
          <div>
            <h3>Throw a kiss</h3>
            <p>Pick someone. Send a kiss from your phone. One screen. Done.</p>
          </div>
        </li>
        <li>
          <span class="step-num">2</span>
          <div>
            <h3>They get your face</h3>
            <p>A WhatsApp card lands with <em>your</em> face on it. Instant. Viral.</p>
          </div>
        </li>
        <li>
          <span class="step-num">3</span>
          <div>
            <h3>Catch &amp; kiss back</h3>
            <p>They catch it. They kiss back. The loop keeps going.</p>
          </div>
        </li>
      </ol>
    </section>

    <section class="section" id="features">
      <h2>What you get</h2>
      <div class="cards">
        <article class="card">
          <h3>Orbit</h3>
          <p>Your people circle you. See who's kissing who in your orbit.</p>
        </article>
        <article class="card">
          <h3>Super Kiss</h3>
          <p>When a regular kiss isn't enough — go nuclear. Blood-red.</p>
        </article>
        <article class="card">
          <h3>LIVE</h3>
          <p>Kisses fly in real time. Catch one mid-air. Send it on.</p>
        </article>
      </div>
    </section>

    <section class="section" id="install">
      <h2>Install the PWA</h2>
      <div class="install-grid">
        <div class="install-card">
          <h3>iPhone</h3>
          <p>Open in <strong>Safari</strong> → tap <strong>Share</strong> → <strong>Add to Home Screen</strong>.</p>
        </div>
        <div class="install-card">
          <h3>Android</h3>
          <p>Open in Chrome → menu → <strong>Add to Home screen</strong> / Install app.</p>
        </div>
      </div>
      <p class="install-note">No App Store. No Play Store. Just your home screen.</p>
    </section>
  </main>

  <footer class="footer">
    <p>send one · catch one · send it on</p>
  </footer>
`

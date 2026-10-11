import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Braces, Database, Mail, Menu, Server, Workflow, X, Code2, Terminal, Layers3 } from 'lucide-react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import './styles.css';

const skills = [
  { title: 'Backend & Architecture', items: ['Java', 'Spring Boot', 'Spring Security', 'REST APIs', 'Microservices', 'Spring AI', 'Kafka'] },
  { title: 'Frontend', items: ['React.js', 'React Hooks', 'React Router', 'JavaScript ES6', 'Tailwind CSS', 'HTML5 / CSS3'] },
  { title: 'Data & Security', items: ['Oracle SQL / PL/SQL', 'MySQL', 'MongoDB', 'Redis', 'OAuth2', 'JWT', 'RBAC', 'Keycloak'] },
  { title: 'Tools & Delivery', items: ['Docker', 'Git / GitHub', 'JasperReports', 'Payment Integration', 'Agile / Scrum'] },
];

const projects = [
  {
    number: '01',
    name: 'AI Error Debugger',
    type: 'AI-POWERED DEVELOPER TOOL',
    description: 'Built a Spring AI-powered tool to analyze application error logs, suggest likely solutions, and recommend best practices. Added query caching to reduce repeated work and optimize costs.',
    tags: ['Java', 'Spring AI', 'Query Caching', 'Log Analysis'],
    icon: <Braces size={22} />,
  },
  {
    number: '02',
    name: 'Habit Tracker — Microservices',
    type: 'PERSONAL PROJECT',
    description: 'Designed a habit-tracking application using a microservices approach, with OAuth2 role-based access control through Keycloak and Kafka event streaming.',
    tags: ['Spring Boot', 'Kafka', 'Spring Security', 'Keycloak'],
    icon: <Workflow size={22} />,
  },
  {
    number: '03',
    name: 'Payments, GST & Reconciliation',
    type: 'ENTERPRISE APPLICATIONS',
    description: 'Delivered secure Canara Bank VAN/VPA payment workflows, Razorpay POS integration, GST Portal Seemless Intigration with generic JSON builder, and JasperReports-based transaction and reconciliation outputs.',
    tags: ['REST APIs', 'Payment APIs', 'GST / E-invoicing', 'JasperReports'],
    icon: <Database size={22} />,
  },
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">AM</span><span>Aniruddha Mukherjee<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Expertise</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="/Aniruddha-Mukherjee-Resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"></span> JAVA FULL STACK DEVELOPER · 4+ YEARS EXPERIENCE</div>
            <h1>Building reliable<br />systems for <span className="accent-text">real-world</span><br />problems<span className="accent-text">.</span></h1>
            <p className="hero-lede">I’m Aniruddha — a Java Full Stack Developer building enterprise applications with Java, Spring Boot, microservices, React, and SQL/NoSQL databases. I work across secure APIs, payment integrations, GST workflows, and AI-powered developer tools.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">View selected work <ArrowDownRight size={17} /></a>
              <a className="button button-ghost" href="#contact">Discuss a project <ArrowUpRight size={16} /></a>
            </div>
            <div className="hero-meta"><span><Code2 size={15} /> Backend & Full Stack</span><i></i><span><Layers3 size={15} /> Microservices & APIs</span></div>
          </div>
          <div className="hero-visual" aria-label="Decorative backend engineering illustration">
            <div className="visual-grid"></div>
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="core-card">
              <div className="core-top"><span className="window-dots"><b></b><b></b><b></b></span><span className="core-label">SYSTEMS / 001</span></div>
              <div className="terminal-icon"><Terminal size={31} /></div>
              <div className="code-lines"><span className="code-purple">public class</span> <span className="code-green">Solution</span> {'{'}</div>
              <div className="code-lines indent"><span className="code-purple">private final</span> <span className="code-blue">Reliability</span> mindset;</div>
              <div className="code-lines indent"><span className="code-purple">private final</span> <span className="code-blue">Curiosity</span> growth;</div>
              <div className="code-lines">{'}'}</div>
              <div className="core-footer"><span className="status-dot"></span> THINK · BUILD · IMPROVE</div>
            </div>
            <div className="float-chip chip-java"><span className="chip-symbol">☕</span><span><b>Java</b><small>Core language</small></span></div>
            <div className="float-chip chip-api"><Server size={17} /><span><b>REST APIs</b><small>Designed to scale</small></span></div>
            <div className="visual-caption">CRAFTING THE LOGIC BEHIND THE PRODUCT</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line"></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-inner">
            <p className="section-kicker">01 / A LITTLE ABOUT ME</p>
            <div className="intro-content">
              <h2>Full stack thinking.<br /><span>Reliable systems. Real business impact.</span></h2>
              <div className="intro-text"><p>With 4+ years of experience, I build and improve enterprise applications from backend APIs to responsive React screens. My work includes payment workflows, GST/e-invoicing, reporting, database optimization, and AI-assisted debugging.</p><a className="text-link" href="#experience">More about my journey <ArrowRight size={16} /></a></div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading"><div><p className="section-kicker">02 / TOOLKIT</p><h2>My technical <span>toolbox.</span></h2></div><p className="heading-note">The tools I use to design, build, test, and ship dependable software.</p></div>
          <div className="skills-grid">{skills.map((group, index) => <article className="skill-card" key={group.title}><div className="skill-card-top"><span className="skill-index">0{index + 1}</span><ArrowUpRight size={17} /></div><h3>{group.title}</h3><div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="services-section" id="services">
          <div className="section-wrap section-block">
            <div className="section-heading"><div><p className="section-kicker">03 / HOW I CAN HELP</p><h2>From a tricky API to<br /><span>a useful product.</span></h2></div><p className="heading-note">Practical development support for startups, small businesses, and software teams — with a focus on reliable delivery and maintainable code.</p></div>
            <div className="services-grid">
              <article className="service-card"><span className="service-num">01</span><div className="service-icon"><Server size={20} /></div><h3>Backend & API Development</h3><p>Build or extend Java/Spring Boot applications, secure REST APIs, authentication flows, and backend services.</p><div className="service-footer">JAVA · SPRING BOOT · REST</div></article>
              <article className="service-card"><span className="service-num">02</span><div className="service-icon"><Database size={20} /></div><h3>Database & Reporting</h3><p>SQL query optimization, data-driven features, Excel/report exports, dashboards, and JasperReports workflows.</p><div className="service-footer">ORACLE · MYSQL · REPORTING</div></article>
              <article className="service-card"><span className="service-num">03</span><div className="service-icon"><Workflow size={20} /></div><h3>Integrations & Automation</h3><p>Integrate payment gateways, banking APIs, POS systems, and third-party services with secure transaction handling.</p><div className="service-footer">API INTEGRATION · AUTOMATION</div></article>
              <article className="service-card"><span className="service-num">04</span><div className="service-icon"><Layers3 size={20} /></div><h3>MVPs & Ongoing Support</h3><p>Build MVP backend features, add React screens, troubleshoot production bugs, or extend an existing application.</p><div className="service-footer">MVP BACKENDS · MAINTENANCE</div></article>
            </div>
            <div className="services-cta"><p>Have a project in mind? Tell me what you're trying to build.</p><a className="text-link" href="mailto:aniruddhamukherjee232@gmail.com?subject=Freelance%20software%20project%20enquiry">Let's discuss your project <ArrowRight size={16} /></a></div>
          </div>
        </section>

        <section className="work-section" id="work">
          <div className="section-wrap section-block">
            <div className="section-heading"><div><p className="section-kicker">04 / SELECTED WORK</p><h2>Problems solved.<br /><span>Systems delivered.</span></h2></div><p className="heading-note">A selection of engineering work and projects. Some professional work is described at a high level to respect confidentiality.</p></div>
            <div className="project-list">{projects.map(project => <article className="project-card" key={project.number}><div className="project-number">{project.number}</div><div className="project-main"><div className="project-type">{project.type}</div><h3>{project.name}</h3><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><div className="project-icon">{project.icon}</div></article>)}</div>
            <p className="project-note">Want to see implementation details? Ask me about architecture decisions, trade-offs, and what I learned building these systems.</p>
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading"><div><p className="section-kicker">05 / EXPERIENCE</p><h2>Engineering with<br /><span>business context.</span></h2></div><p className="heading-note">Experience across enterprise software, backend services, database-driven applications, and integrations.</p></div>
          <div className="timeline">
            <article className="timeline-item"><div className="timeline-marker"></div><div className="timeline-date">MAR 2024 — PRESENT</div><div className="timeline-content"><h3>Software Engineer <span>/ Java Full Stack</span></h3><p className="company">Data Core Systems Inc. · Kolkata, India</p><ul><li>Built an AI-powered exception and error debugger with Spring AI to analyze logs, suggest solutions, and cache queries for cost optimization.</li><li>Integrated Canara Bank VAN/VPA APIs for UPI, QR, NEFT, and RTGS payment workflows, and integrated Razorpay POS for card transactions.</li><li>Developed JasperReports-based sales and reconciliation reports, plus a reusable GST JSON integration framework and PDF/TXT generation that reduced compliance-related errors by 25%.</li><li>Built reusable React components and responsive enterprise screens using React Hooks, Tailwind CSS, and REST APIs.</li></ul></div></article>
            <article className="timeline-item"><div className="timeline-marker"></div><div className="timeline-date">SEP 2022 — MAR 2024</div><div className="timeline-content"><h3>Software Engineer <span>/ Java Backend</span></h3><p className="company">Quality and Testing Info Solutions Pvt. Ltd. · Gurugram, India</p><ul><li>Developed 15+ Spring Security-protected REST APIs, improving data exchange efficiency by 35%.</li><li>Optimized API performance and database queries to improve responsiveness and reduce production latency.</li></ul></div></article>
          </div>
          <div className="education-strip">
            <div><p className="section-kicker">EDUCATION</p><h3>Bachelor of Computer Applications (BCA)</h3><p>ABS Academy of Science Technology and Management · Durgapur · 2016–2019</p></div>
            <div className="education-score">8.0 <span>/ 10 CGPA</span></div>
          </div>
          <div className="achievement-strip">
            <span>ACCIOJOB · Backend Development</span>
            <span>LEETCODE · 1600+ rating</span>
            <span>800+ problems solved</span>
          </div>
        </section>

        <section className="principles-band"><div className="section-wrap principles-inner"><p className="section-kicker">HOW I WORK</p><div className="principles-grid"><div><span>01</span><h3>Understand first</h3><p>Start with the problem, users, and constraints before choosing a solution.</p></div><div><span>02</span><h3>Build for change</h3><p>Prefer clear boundaries, readable code, and maintainable design.</p></div><div><span>03</span><h3>Own the outcome</h3><p>Think beyond implementation: test, observe, debug, and improve.</p></div></div></div></section>

        <section className="contact-section section-wrap" id="contact">
          <p className="section-kicker">06 / CONTACT</p><h2>Need a developer<br />to <span>build it right?</span></h2><p className="contact-copy">Whether you're hiring for a backend role or need help with a software project, I'd be glad to hear what you're working on.</p>
          <a className="button button-primary contact-button" href="mailto:aniruddhamukherjee232@gmail.com?subject=Portfolio%20enquiry">Let&#39;s talk <ArrowUpRight size={17} /></a>
          <div className="contact-links">
            <a href="https://github.com/Ani111112" target="_blank" rel="noreferrer"><FaGithub size={17}/> GitHub <ArrowUpRight size={13} /></a>
            <a href="https://www.linkedin.com/in/aniruddha-dev" target="_blank" rel="noreferrer"><FaLinkedinIn size={17} /> LinkedIn <ArrowUpRight size={13} /></a>
            <a href="mailto:aniruddhamukherjee232@gmail.com"><Mail size={17} /> Email <ArrowUpRight size={13} /></a>
            <a href="https://leetcode.com/u/ByteAniruddha" target="_blank" rel="noreferrer"><Code2 size={17} /> LeetCode <ArrowUpRight size={13} />
            </a>
          </div>
        </section>
      </main>
      <footer className="footer"><a className="brand footer-brand" href="#home"><span className="brand-mark">AM</span><span>Aniruddha Mukherjee<span className="brand-dot">.</span></span></a><span>Available for backend roles & selected freelance projects.</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
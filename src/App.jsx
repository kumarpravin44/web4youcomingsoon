import cominf from './assets/hero-bg.jpeg';
import logo from './assets/logo.png';
import hiddenLogo from './assets/facbook-logo.png';
import LeadForm from './LeadForm';
import './App.css';

function App() {
  return (
    <>
      {/* 🔥 Background Video */}
      <div className="video-bg">
        <img src={cominf} alt="Background" />
      </div>
      <div className="main-layout">
        {/* Left Side - Logo & Content */}
        <div className="left-content">
          <div className="logo">
            <img src={logo} alt="Web4You Logo" />
            <img src={hiddenLogo} style={{display: 'none'}} alt="Web4You Logo" />
          </div>
          {/* <p className="tagline">Websites | Apps | Marketing | Complete Digital Solutions</p> */}
          
          <div className="description">
            <p>10+ years of freelance experience in digital marketing & development
Helping small businesses grow with affordable & result-driven solutions</p>
<p>Expertise in AI-powered marketing & automation systems
Build SaaS software, websites, and mobile apps
Create high-converting landing pages & sales funnels
Focus on real leads & paying customers (not just traffic)
Provide SEO, social media marketing & paid ads services
100% customized solutions for startups & low-budget businesses
Use AI + smart funnels to generate leads on autopilot</p>
<p>🎯 Goal: More Leads • More Clients • More Revenue</p>
<p>📞 Book Free Consultation | Get Your First Leads in 7 Days 🚀</p>
            
          </div>
          
          <h2  className="tagline">
            Follow Us
          </h2>

          {/* 🔥 Social Icons */}
          <div className="social">
            <a href="https://www.facebook.com/web4younoida/" target="_blank">
              <i className='bx bxl-facebook'></i>
            </a>
            <a href="https://www.linkedin.com/company/web4you-noida/" target="_blank">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a href="https://www.instagram.com/web4younoida/" target="_blank">
              <i className='bx bxl-instagram'></i>
            </a>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="right-form">
          <LeadForm />
        </div>
      </div>

      <div className="footer">
        📞 <a href="tel:8090212521"> +91 80902 12521 </a> | <a href="tel:+919971411966"> +91 9971411966 </a> <br />
        © 2026 Web4You. All Rights Reserved.
      </div>
    </>
  );
}

export default App;

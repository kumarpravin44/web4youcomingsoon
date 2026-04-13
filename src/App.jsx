import cominf from './assets/cominf.jpg';
import logo from './assets/logo.png';
import LeadForm from './LeadForm';
import './App.css';

function App() {
  return (
    <>
      {/* 🔥 Background Video */}
      <div className="video-bg">
        <img src={cominf} alt="Background" />
      </div>
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Web4You Logo" />
        </div>

        <p>Websites | Apps | Marketing | Complete Digital Solutions</p>

        <LeadForm />

        <a href="#" target="_blank" className="btn">
          Follow Us
        </a>

        {/* 🔥 Social Icons */}
        <div className="social">
          <a href="https://www.facebook.com/web4younoida/" target="_blank">
            <i className='bx bxl-facebook'></i>
          </a>
          <a href="https://www.linkedin.com/company/web4you-noida/" target="_blank">
            <i className='bx bxl-linkedin'></i>
          </a>
        </div>

        <div className="footer">
          📞 <a href="tel:8090212521"> +91 80902 12521 </a> | <a href="tel:+919971411966"> +91 9971411966 </a> <br />
          © 2026 Web4You. All Rights Reserved.
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
<>
<div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link to="/" class="nav-link px-2 text-muted">Home</Link></li>
      <li class="nav-item"><Link to="features-page" class="nav-link px-2 text-muted">Features</Link></li>
      <li class="nav-item"><Link to="faqs-page" class="nav-link px-2 text-muted">FAQs</Link></li>
      <li class="nav-item"><Link to="/about-us" class="nav-link px-2 text-muted">About</Link></li>
    </ul>
    <p>We recognise our responsibility to use data and technology for good. We may use or share your data with our data vendors. Take control of your data.</p>
    <p style={{textAlign:'center'}} ><b><i>Data Rights</i></b></p>
    <p class="text-center text-muted">© 2024 Mausam Predictor Pvt. Ltd.</p>
  </footer>
</div>

</>

  )
    };

export default Footer;

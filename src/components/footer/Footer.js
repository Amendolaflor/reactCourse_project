import React from 'react'
import "./Footer.css"
//import { Footer } from "react-bootstrap";

function Footer() {
	return (
	<footer class="mainfooter" role="contentinfo">
    <div class="footer-middle">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            {/* -Column1 */}
            <div class="footer-pad">
              <h4>About</h4>
              <ul class="list-unstyled">
                <li>Payment Center</li>
                <li>Contact Directory</li>
                <li>Forms</li>
                <li>FAQs</li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            {/* Column1 */}
            <div class="footer-pad">
              <h4>News</h4>
              <ul class="list-unstyled">
                <li>Website Tutorial</li>
                <li>Accessibility</li>
                <li>Disclaimer</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            {/* Column1*/}
            <div class="footer-pad">
              <h4>Contact</h4>
              <ul class="list-unstyled">
                <li>Parks and Recreation</li>
                <li>Public Works</li>
                <li>Police Department</li>
                <li>
                 
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3">
            <h4>Follow Us</h4>
            <ul class="social-network social-circle">
              <li><i class="fa fa-facebook"></i></li>
              <li><i class="fa fa-linkedin"></i></li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 copy">
            <p class="text-center">Copyright 2021 - NUTRI SPACE. All rights reserved.</p>
          </div>
        </div>
	</div>
	</div>
  </footer>
  );
}

export default Footer
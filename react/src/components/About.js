import React, { Component } from 'react'
import './About.css'
import Footer from './Footer'

export default class About extends Component {
  render() {
    return (
      <div class='back9'>
        <div class="container" id="s0"><br />
          <div class="about-section">
            <h1>About Us </h1>
            <p>Skyu Water jars Mineral Water stands apart with its promise of goodness that goes through rigorous Good QUALITY Process  and Testing Processing .
              Every drop is safe, pure and hygienic to the core and meets the quality guidelines set by the Bureau of Indian Standards (BIS)</p>
          </div>

          <div class="row">
            <div class="column">
              <div class="card back2">
                <div class="container">
                  <h3>Shashank Singh</h3>
                  <p class="title">Creator</p>
                  <p>Batch : PG-DAC MARCH-2022</p>
                  <p>shanky8896@gmail.com</p>
                  <p><button class="button">Contact No : +91 9509456785</button></p>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card back2">
                <div class="container">
                  <h3>Ravikant Navgraha</h3>
                  <p class="title">Creator</p>
                  <p>Batch : PG-DAC MARCH-2022</p>
                  <p>ravi675@gmail.com</p>
                  <p><button class="button">Contact Us : +91 7665483215</button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

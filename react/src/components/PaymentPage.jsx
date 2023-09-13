import React from 'react'
import Footer from './Footer'
import './Payment.css'
export default function PaymentPage() {
   return (
      <div class=" back9">
         <div class="container">
            <div class="row">
               <div class="col-md-6 mx-auto mt-5">
                  <div class="payment">
                     <div class="payment_header">
                        <div class="check"><i class="fa fa-check" aria-hidden="true"></i></div>
                     </div>
                     <div class="content">
                        <h1>Payment Success !</h1>
                        <p>Thank you for your purchase from Skyu Water Jar Distribution. Please let us know if we can do anything else to help! </p>
                        <a href="CustomerHome">Go to Home</a>
                     </div>

                  </div>
               </div>
            </div>
         </div><br/><br/><br/><br/>
         <Footer></Footer>
      </div>
   )
}

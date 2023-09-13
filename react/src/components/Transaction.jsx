import React from "react";
import Footer from "./Footer";
import './Transaction.css'

export default class Transaction extends React.Component {

    constructor(props) {
        super(props)

        this.submitHandler = this.submitHandler.bind(this)
    }

    submitHandler() {
        alert("Payment Successful...!")

        this.props.history.push("/PaymentPage")
    }

    render() {
        return (

            <div class=" back4">
                <div class="row mb-4"><br />
                    <div class="col-lg-8 mx-auto text-center"><br /><br />
                        <h3 class="display-6">Payment Gateway </h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-6 mx-auto">
                        <div class="card ">
                            <div class="card-header">
                                <div class="tab-content">
                                    <div id="credit-card" class="tab-pane fade show active pt-3">
                                        <form onSubmit={this.submitHandler}>
                                            <div class="form-group">
                                                <label for="username"><h6>Card Owner</h6></label> <input type="text" name="username" placeholder="Card Owner Name" required class="form-control " />
                                            </div>
                                            <div class="form-group">
                                                <label for="cardNumber"> <h6>Card number</h6> </label>
                                                <div class="input-group"> <input type="text" name="cardNumber" placeholder="Valid card number" class="form-control " required /><div class="input-group-append">
                                                    <span class="input-group-text text-muted"> <i class="fab fa-cc-visa mx-1"></i> <i class="fab fa-cc-mastercard mx-1"></i> <i class="fab fa-cc-amex mx-1"></i> </span>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-8">
                                                    <div class="form-group"> <label><span class="hidden-xs">
                                                        <h6>Expiration Date</h6>
                                                    </span></label>
                                                        <div class="input-group"> <input type="number" placeholder="MM" name="" class="form-control" required /> <input type="number" placeholder="YY" name="" class="form-control" required /> </div>
                                                    </div>
                                                </div>
                                                <div class="col-sm-4">
                                                    <div class="form-group mb-4"> <label data-toggle="tooltip" title="Three digit CV code on the back of your card"><br />
                                                        <h6>CVV <i class="fa fa-question-circle d-inline"></i></h6>
                                                    </label> <input type="text" required class="form-control" /> </div>
                                                </div>
                                            </div>
                                            <div class="card-footer" align="center"> <button class="subscribe btn btn-primary btn-block shadow-sm"  > Confirm Payment </button></div>
                                        </form>
                                    </div>
                                </div>
                                <p class="text-muted">Note: After clicking on the button, you will be directed to a secure gateway for payment. After completing the payment process, you will be redirected to confirmation of payment. </p>
                            </div>
                        </div>
                    </div>
                </div><br />
                <Footer></Footer>
            </div>
        )
    }
}


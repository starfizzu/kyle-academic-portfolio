<?php  

// Abstract Class
abstract class PaymentMethod {
    abstract public function pay($amount);             // Abstract method: must be implemented by subclasses
    abstract public function getPaymentDetails();      // Abstract method: must be implemented by subclasses
}

// Base Class or Parent Class
class BasePayment extends PaymentMethod { 
    public $amount;
    
    public function __construct($amount) {
        $this->amount = $amount;
    }

    public function display() {
        echo "The payment amount is {$this->amount} \n";
    }

    // You must still define abstract methods from the parent
    public function pay($amount) {}
    public function getPaymentDetails() {}
}

// 1st Child Class
class CreditCardPayment extends BasePayment {
    public function pay($amount) {  // Overriding the Method Payment.
        echo "Processing payment of {$this->amount} using Credit Card...\n";
    }
    public function getPaymentDetails() {  // Overriding the Method Details.
        echo "Credit Card Payment successful.\n";
        echo "Details: Your Credit Card Payment was processed on 10/28/2025.\n";
    }
}

// 2nd Child Class
class PayPalPayment extends BasePayment {
    public function pay($amount) {  // Overriding the Method Payment.
        echo "Processing payment of {$this->amount} using PayPal...\n";
    }
    public function getPaymentDetails() {  // Overriding the Method Details.
        echo "PayPal Payment successful.\n";
        echo "Details: Your PayPal Payment was processed on 10/28/2025.\n";
    }
}

// 3rd Child Class
class GCashPayment extends BasePayment {
    public function pay($amount) {  // Overriding the Method Payment.
        echo "Processing payment of {$this->amount} using GCash...\n";
    }
    public function getPaymentDetails() {  // Overriding the Method Details.
        echo "GCash Payment successful.\n";
        echo "Details: Your GCash Payment was processed on 10/28/2025.\n";
    }
}

// Object Creation and Method Calls
$creditcard = new CreditCardPayment("₱50,000");
$creditcard->pay("₱50,000");
$creditcard->getPaymentDetails();

echo "\n";

$paypal = new PayPalPayment("₱50,000");
$paypal->pay("₱50,000");
$paypal->getPaymentDetails();

echo "\n";

$gcash = new GCashPayment("₱50,000");
$gcash->pay("₱50,000");
$gcash->getPaymentDetails();

echo "\n--- Looping through all payments ---\n";

$payments = [
    new CreditCardPayment("₱50,000"),
    new PayPalPayment("₱50,000"),
    new GCashPayment("₱50,000")
];

foreach ($payments as $payment) {
    $payment->pay("₱50,000");
    $payment->getPaymentDetails();
    echo "\n";
}
?>

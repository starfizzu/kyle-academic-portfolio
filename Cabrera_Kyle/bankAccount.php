<?php
 class BankAccount {
    public $accHolderName;
    public $balance;

    public function __construct ($accHolderName, $balance) {
        $this->accHolderName = $accHolderName;
        $this->balance = $balance;
    }

    public function deposit ($amount) {
        $this->balance += $amount;
        echo"You added $amount. Your balance is now $this->balance\n";
    }

    public function withdraw ($amount) {
        if ($amount > $this->balance) {
            echo "Incufficient balance! Current Balance: $this->balance.\n";
        } else {
            $this->balance -= $amount;
            echo "You took out $amount. Your new Balance: $this->balance.\n";
        }
    }

    public function checkBalance() {
        echo "Current Balance: $this->balance\n";
    }
 }

 $name = readline ("Enter Account Holder Name: ");
 $deposit = (float) readline ("Enter Initial deposit: ");
 
 $account = new BankAccount($name, $deposit);

 do {
    echo"\n--- MENU ---\n";
    echo"1. Deposit\n";
    echo"2. Withdraw\n";
    echo"3. Current Balance\n";
    echo"4. Exit\n";
    
    $choice = readline("Choose an Option: ");

    switch ($choice) {
        case 1: //Deposit
            $amount = (float) readline ("Enter deposit amount: ");
            $account->deposit($amount);  
            break;

        case 2: //Withdraw
            $amount = (float) readline ("Enter withdrawal amount: ");
            $account->withdraw($amount);
            break;

        case 3: //check Balance
            $account->checkBalance();
            break;
        
        case 4: //exit
            echo"exiting... goodbye!\n";
            break;

        default:
            echo "Invalid input. Try again\n";
            break;
    }
 } while ($choice != 4);

?>
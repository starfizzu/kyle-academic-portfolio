<?php
$age = (int)readline("Enter your age: ");
$monthlyIncome = (float)readline("Enter your monthly income: ");
$hasExistingLoan = readline("Do you have an existing loan? (yes/no): ");

if ($age >= 21 && $monthlyIncome >= 20000 && strtolower($hasExistingLoan) == "no") {
    echo "You are qualified for the loan.\n";
} else {
    echo "You are NOT qualified for the loan.\n";
}
?>
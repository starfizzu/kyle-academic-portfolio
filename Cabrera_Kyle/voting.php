<?php
for ($i = 1; $i <= 5; $i++) {
    $age = (int)readline("Enter age of person $i: ");
    if ($age >= 18) {
        echo "You are eligible to vote.\n";
    } else {
        echo "You are NOT eligible to vote.\n";
    }
}
?>
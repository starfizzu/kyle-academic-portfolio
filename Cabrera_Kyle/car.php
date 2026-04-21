<?php
class Car {
    public $brand;
    public $model;

    public function __construct($brand, $model) {
        $this->brand = $brand;
        $this->model = $model;
    }

    public function drive() {
        echo "The $this->brand $this->model is driving!\n";
    }
}
// create objects (real cars)
$car1 = new Car("BMW", "G80");
$car2 = new Car("Porsche", "911 Turbo");

// use the objects
$car1->drive();
$car2->drive();
?>
<?php
class House {
    private $address;
    private $numberOfRooms;
    private $area;

    public function __construct($address, $numberOfRooms, $area) {
        $this->address = $address;
        $this->numberOfRooms = $numberOfRooms;
        $this->area = $area;
    }

    public function getAddress() {
        return $this->address;
    }
    public function setAddress($address) {
        $this->address = $address;
    }

    public function getNumberOfRooms() {
        return $this->numberOfRooms;
    }
    public function setNumberOfRooms($numberOfRooms) {
        $this->numberOfRooms = $numberOfRooms;
    }

    public function getArea() {
        return $this->area;
    }
    public function setArea($area) {
        $this->area = $area;
    }

    public function calculatePrice($pricePerSqM) {
        return $pricePerSqM * $this->area;
    }
}

$house = new House("Bonuan Gueset District, Dagupan City, Pangasinan", 4, 95);
echo "House Address: " . $house->getAddress() . "\n";
echo "Number of Rooms: " . $house->getNumberOfRooms() . "\n";
echo "House Price: ₱" . $house->calculatePrice(11000) . "\n";
?>

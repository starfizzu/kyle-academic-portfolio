<?php
class Product {
    private $productName;
    private $productCode;
    private $price;

    public function __construct($productName, $productCode, $price) {
        $this->productName = $productName;
        $this->productCode = $productCode;
        $this->price = $price;
    }

    public function getProductName() {
        return $this->productName;
    }
    public function setProductName($productName) {
        $this->productName = $productName;
    }

    public function getProductCode() {
        return $this->productCode;
    }
    public function setProductCode($productCode) {
        $this->productCode = $productCode;
    }

    public function getPrice() {
        return $this->price;
    }
    public function setPrice($price) {
        $this->price = $price;
    }

    public function applyDiscount($discountPercentage) {
        $discountAmount = ($discountPercentage / 100) * $this->price;
        $this->price -= $discountAmount;
        return $this->price;
    }
}

$product = new Product("Notebook", "NB101", 50);
echo "Product: " . $product->getProductName() . "\n";
echo "Code: " . $product->getProductCode() . "\n";
echo "Original Price: ₱" . $product->getPrice() . "\n";
echo "Price after 15% discount: ₱" . $product->applyDiscount(15) . "\n";
?>

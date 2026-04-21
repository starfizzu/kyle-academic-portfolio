<?php
  class book {
    public $title;
    public $author;

    public function __construct ($title, $author) {
      $this->title = $title;
      $this->author = $author;
    }
  }

  $books = [];

  $n = (int) readline("How many books you want to add: ");

  for ($i = 0; $i < $n; $i++) {
    $title = readline("\nEnter title of book " . ($i + 1) . ": ");
    $author = readline("Enter author of book ". ($i + 1) . ": ");
    $books[] = new book($title, $author);
  }

  echo"\n List of Books Entered:\n";
  foreach ($books as $book) {
      echo "- " . $book->title . " by ". $book->author ."\n";
  }
?>
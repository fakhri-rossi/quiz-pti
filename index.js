const path = require("path");
const express = require("express");
const { log } = require("console");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

let songs = [
  {
    id: 1,
    author: "Rama",
    title: "Jomokkk",
    category: "Rock",
    content: [
      "Bermainlah dan terus tertawa",
      "Walau dunia tak seindah surga",
      "Bersyukurlah pada yang kuasa",
      "cinta kita di dunia... selamanya",
      "[br]",
      "Bermainlah dan terus tertawa",
      "Walau dunia tak seindah surga",
      "Bersyukurlah pada yang kuasa",
      "cinta kita di dunia... selamanya",
    ],
  },
  {
    id: 2,
    author: "Rama",
    title: "Jomokkk",
    category: "Rock",
    content: [
      "Bermainlah dan terus tertawa",
      "Walau dunia tak seindah surga",
      "Bersyukurlah pada yang kuasa",
      "cinta kita di dunia... selamanya",
    ],
  },
  {
    id: 3,
    author: "Rama",
    title: "Laskar Pelangi",
    category: "Pop",
    content: [
      "Bermainlah dan terus tertawa",
      "Walau dunia tak seindah surga",
      "Bersyukurlah pada yang kuasa",
      "cinta kita di dunia... selamanya",
    ],
  },
  {
    id: 4,
    author: "Rama",
    title: "Laskar Pelangi",
    category: "Pop",
    content: [
      "Bermainlah dan terus tertawa",
      "Walau dunia tak seindah surga",
      "Bersyukurlah pada yang kuasa",
      "cinta kita di dunia... selamanya",
    ],
  },
  {
    id: 5,
    author: "Rama",
    title: "Laskar Pelangi",
    category: "Indie",
    content: [
      "Bermainlah dan terus tertawa",
      "Walau dunia tak seindah surga",
      "Bersyukurlah pada yang kuasa",
      "cinta kita di dunia... selamanya",
    ],
  },
  {
    id: 6,
    author: "Rama",
    title: "Laskar Pelangi",
    category: "Indie",
    content: [
      "Bermainlah dan terus tertawa",
      "Walau dunia tak seindah surga",
      "Bersyukurlah pada yang kuasa",
      "cinta kita di dunia... selamanya",
    ],
  },
];

// Serve static files from the 'public' directory
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("index", { songs });
});

app.get("/:category", (req, res) => {
  const { category } = req.params;
  const filteredSongs = songs.filter(
    (song) => song.category.toLowerCase() == category.toString()
  );
  if (filteredSongs.length > 0) {
    res.render("kategori", { category, filteredSongs });
  } else {
    res.render("notfound");
  }
});

app.get("/lirik/:id", (req, res) => {
  const { id } = req.params;
  const song = songs.find((s) => parseInt(s.id) == id);

  if (song) {
    res.render("lirik", { song });
  } else {
    res.render("notfound");
  }
});

app.get("*", (req, res) => {
  res.render("notfound");
});

app.listen(8080, () => {
  console.log('Server is running at "http://localhost:8080"');
});

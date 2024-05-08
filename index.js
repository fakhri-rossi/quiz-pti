const path = require('path');
const express = require('express');
const { log } = require('console');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));


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
        ]
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
            "cinta kita di dunia... selamanya"
        ]
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
            "cinta kita di dunia... selamanya"
        ]
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
            "cinta kita di dunia... selamanya"
        ]
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
            "cinta kita di dunia... selamanya"
        ]
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
            "cinta kita di dunia... selamanya"
        ]
    }
];


app.get('/', (req, res) => {
    res.render('index', { songs });
});

app.get('/:category', (req, res) => {
    const { category } = req.params;
    const filteredSongs = songs.filter(song => song.category.toLowerCase() == category.toString());
    res.render('kategori', {category, filteredSongs});
})

app.get('/lirik/:id', (req, res) => {
    const {id} = req.params;
    const song = songs.find(s => parseInt(s.id) == id);
    console.log(song);
    
    res.render('lirik', { song });
});

app.listen(8080, () => {
    console.log('Server is running at "http://localhost:8080"');
});
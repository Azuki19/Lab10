const movies = [
    { 
    movie : 1,
    titulo : "Code Geass",
    rating : "(5/5 ratings)",
    ratingValue: 5.0,
    edad : "16+",
    descripcion1 : "A high-schooler who's granted powers to make anyone instantly obedient",
    descripcion2 : "dons a mask to lead Japan's rebellion against a long-invading Britannia.",
    fotob: "https://nerdologists.com/wp-content/uploads/2018/03/Code-Geass-Banner.jpg" ,
    fotoc: "https://static.wikia.nocookie.net/codegeass/images/a/af/Lelouch_of_the_Rebellion.png/revision/latest?cb=20161217124012&path-prefix=es"
    }    
    ,
    {
    movie : 2,
    titulo : "Death Note",
    rating : "(5/5 ratings)",
    ratingValue: 5.0,
    edad : "16+",
    descripcion1 : "A high school student named Light Turner discovers a mysterious notebook that has the power to kill anyone",
    descripcion2 : "whose name is written within its pages, and launches a secret crusade to rid the world of criminals.",
    fotob: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3ff8a854-1efc-4d39-a0dc-54a06b644dfd/d66y647-5707bd50-fac7-4176-b326-eb7e9ebb7921.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNmZjhhODU0LTFlZmMtNGQzOS1hMGRjLTU0YTA2YjY0NGRmZFwvZDY2eTY0Ny01NzA3YmQ1MC1mYWM3LTQxNzYtYjMyNi1lYjdlOWViYjc5MjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a_4LNKNAMZ6-QkQQNcuD4AabA2tZkkPxf2FczfS6udY" ,
    fotoc: "https://pics.filmaffinity.com/Death_Note_Serie_de_TV-660373023-large.jpg"
    }
    ,
    {
    movie : 3,
    titulo : "Psycho Pass",
    rating : "(4.4/5 ratings)",
    ratingValue: 4.4,
    edad : "16+",
    descripcion1 : "In An authoritarian future dystopia where omnipresent public sensors continuously",
    descripcion2 : "scan the mental states of every passing citizen in order to determine their criminal propensity.",
    fotob: "https://i.redd.it/bb3ur1n8lty51.jpg" ,
    fotoc: "https://pics.filmaffinity.com/Psycho_Pass_Serie_de_TV-750734297-large.jpg"
    }
    ,
    {
    movie : 4,
    titulo : "Terror in Resonance",
    rating : "(4.5/5 ratings)",
    ratingValue: 4.5,
    edad : "16+",
    descripcion1 : "In an alternative iteration of the present, two teenage boys who go",
    descripcion2 : "by the names Nine and Twelve steal a prototype atomic bomb in an apparent terrorist attack.",
    fotob: "https://64.media.tumblr.com/b0086f4f477b473bf86af69eb7302fe7/2cfd5e7db4d52935-cf/s1280x1920/279284cbc005df383daf6cf0c58c9f6da78cd67c.png" ,
    fotoc: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/866791fd95d756a9ebf3a0a51b2c6d07.jpe"
    }
    ,
    {
    movie : 5,
    titulo : "Durarara!!",
    rating : "(4/5 ratings)",
    edad : "16+",
    ratingValue: 4,
    descripcion1 : "Mikado, a young man longing for something unusual in his life,",
    descripcion2 : "moves to Ikebukuro at the invitation of his childhood friend Masaomi.",
    fotob: "https://www.centralcomics.com/wp-content/uploads/2019/09/durarara_banner.jpg" ,
    fotoc: "https://upload.wikimedia.org/wikipedia/en/5/50/Durarara%21%21_vol01_Cover.jpg"
    }
    ,
    {
    movie : 6,
    titulo : "Arriety",
    rating : "(5/5 ratings)", 
    ratingValue: 5.0,
    edad : "7+",
    descripcion1 : "When a tiny 'borrower' named Arrietty makes friends with a young boy many ",
    descripcion2 : "times her size, she must also shield her family from his towering elders.",
    fotob: "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABXHc4YBj_r9a0o8QHzMB--Smk5zqMedCSJuq9hdVEzUnFYa4Z9N0PO6sgVTWm89utS2temX4vBKbDd0Y7T9T5Bt3NkoowmCcnEvB.jpg?r=b3d" ,
    fotoc: "https://m.media-amazon.com/images/M/MV5BZDY3ZGI0ZDAtMThlNy00MzAxLTg4YjAtNjkwYTkxNmQ4MjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
    }
    ,
    {
    movie : 7,
    titulo : "Howl's Moving Castle",
    rating : "(5/5 ratings)",
    ratingValue: 5.0,
    edad : "7+",
    descripcion1 : "Teenager Sophie works in her late father's hat shop in a humdrum town, ",
    descripcion2 : "but things get interesting when she's transformed into an elderly woman.",
    fotob: "https://www.thefilmagazine.com/wp-content/uploads/2020/04/Howls-Moving-Castle-Review-Banner.jpg" ,
    fotoc: "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
    }
    ,
    {
    movie : 8,
    titulo : "My Hero Acdemia",
    rating : "(4/5 ratings)",
    ratingValue: 4,
    edad : "7+",
    descripcion1 : "For superhero fanboy Izuku Midoriya (aka Deku), being born without a quirk makes him almost give up his dream of going to U.A. High School,",
    descripcion2 : "But after a chance encounter with the legendary All Might, Deku starts on the road to become the greatest hero.",
    fotob: "https://i.pinimg.com/originals/2b/b5/92/2bb592b4863f21cae1af9ace51034b94.png" ,
    fotoc: "https://images.justwatch.com/poster/261483319/s718/boku-no-hero-academy.jpg"
    }
    ,
    {
    movie : 8,
    titulo : "Hunter x Hunter",
    rating : "(4.8/5 ratings)",
    ratingValue: 4.8,
    edad : "16+",
    descripcion1 : "To fulfill his dreams of becoming a legendary Hunter like his dad, ",
    descripcion2 : "a young boy must pass a rigorous examination and find his missing father.",
    fotob: "https://e0.pxfuel.com/wallpapers/197/780/desktop-wallpaper-killua-night-killua-hunter-anime-hunter-x-hunter-killua-laptop.jpg" ,
    fotoc: "https://www.crunchyroll.com/imgsrv/display/thumbnail/480x720/catalog/crunchyroll/cbb55a6382682bf71e91f685c6473c5a.jpe"
    }
    ,
    {
    movie : 9,
    titulo : "Ponyo",
    rating : "(5/5 ratings)",
    ratingValue: 5.0,
    edad : "7+",
    descripcion1 : "A 5-year-old boy named Sosuke forges a friendship with a ",
    descripcion2 : "goldfish princess named Ponyo, who desperately wants to become human.",
    fotob: "https://www.clevelandart.org/sites/default/files/styles/banner/public/banners/2019-05-11_Ponyo_B.jpg?itok=4-59j9A-" ,
    fotoc: "https://play-lh.googleusercontent.com/HPSYa37fHLN2Ojlc5o-gqnjGjYeX_-ycWdFmYUSSjyHAO6P8ltiETzyU_Y5xC_pfB45KqlixXpx_t8sDYQ"
    }


]

const firstLineMovies = movies.slice(0, 5);
const secondLineMovies = movies.slice(5, 10);
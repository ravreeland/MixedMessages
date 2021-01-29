
const randomAnnouncementWords = () => {
    // This will be the first piece of random data
    // Function will return a random intro head line

    const headLineArray = [ 
        "EXTRA EXTRA!",
        "HERE HERE!",
        "Come one, come all!",
        "Hear Ye! Hear Ye!",
        "Oyez Oyez Oyez!",
        "Hark!",
        "Lo!",
        "Behold!",
        "Listen!",
        "Gather 'round!",
        "Listen, n gather 'round!",
        "Come and look!"
    ]
    const randomIndex = Math.floor(Math.random()*headLineArray.length);
    return headLineArray[randomIndex];
}

for (let i = 0; i<30; i++){
    console.log(randomAnnouncementWords());
}




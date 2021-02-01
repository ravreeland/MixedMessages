
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
        "Come and look!",
        "Newsflash!"
    ]
    const randomIndex = Math.floor(Math.random()*headLineArray.length);
    return headLineArray[randomIndex];
}

const catchyMiddleSubject= () => {
    const middleSubjectArray = [
        "Superman saves plane from crashing,",
        "Superman kills Luis Lane,",
        "Crazy man in bat costume thinks reporter is superman,",
        "Billionaire thinks he has more money than a millionaire,",
        "Zoo lion escapes and eats icecream,",
        "Local Florida man in crocodile hat tries to get in crocodile pen,",
        "Aliens have been found, and are currently taking control over the earth,",
        "Florida has officially declared being a 'Florida man' is illegal,",
        "Local woman walks around with a murder of crows, and burns down the patriarchy,",
        "Naboo politician makes the snarky remark of 'democracy dying to thunderous applause',",
        "Emperor who 'loves democracy' gets rid of senate,",
        "Hello there. General Kenobi. You are a bold one,",
        "Newly appointed Lord chastizes Imperial officer, proceeds to choke him,",
        "News reporter finds themselves trapped in program,",
        "Oil executive declares 'war on oil' to increase gas prices,",
        "First man decides bones are delicious,",
        "Super powers are now available to trade and buy,",
    ]
    const randomIndex = Math.floor(Math.random()*middleSubjectArray.length);
    return middleSubjectArray[randomIndex];
}


for (let i = 0; i<30; i++){
    console.log(randomAnnouncementWords());
    console.log(catchyMiddleSubject());
}





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
        "Separatist sympathic Jedi traitors' temple was stormed by loyal clones,",
        "Here is a list of 15 AMAZING features of gadgets you totally knew about,"
    ]
    const randomIndex = Math.floor(Math.random()*middleSubjectArray.length);
    return middleSubjectArray[randomIndex];
}

const endingHookPhrase = () => {
    const endingHookArray = [
        "read on to find out more.",
        "continue on page 66.",
        "continue reading to learn more.",
        "find out more by clicking on link.",
        "you'd hate to learn how they did it.",
        "scroll down for more info.",
        "for more info, scroll through our ad-ridden, pointlessly expanded story.",
        "to be continued.",
        "to continue, add in more coins.",
        "read the whole article, by selling your soul to us.",
        "click here to read more.",
        "for $6.66 a month, you can read the full article, and other related content.",
        "please enjoy reading more...after these ads.",
        "leave if you don't want to learn how, read on to find out how.",
        "the details will shock you.",
        "numer 6 will break your heart.",
        "listen on tonights show to find out more.",
        "wait for next article to figure out how.",
        "please give us money to deliver hundreds of ads directly to your brain stem."
    ]
    const randomIndex = Math.floor(Math.random()*endingHookArray.length);
    
    return endingHookArray[randomIndex];
}

for (let i = 0; i<30; i++){
    console.log(randomAnnouncementWords());
    console.log(catchyMiddleSubject());
    console.log(endingHookPhrase());
}




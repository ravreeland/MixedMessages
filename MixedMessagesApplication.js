



const floridamanDate = () => {
    // This will be the first piece of random data
    // Function will return <random date>: Florida man
    let randomDay = Math.ceil(Math.random()*30); // Should return random number between 1 - 30; 
    const randomMonthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const randomMonth = randomMonthArray[Math.floor(Math.random()*randomMonthArray.length)];
    if ((randomMonth==="February") && (randomDay>28)){
        randomDay = 28; //Since Feb only has 28 days (excluding leap years), resassigning any day greater than 28 to 28.
    }
    const todayDate = new Date();
    const randomYear = todayDate.getFullYear() - Math.floor(Math.random()*21); //get random year going back 20 years

    return `${randomMonth} ${randomDay}, ${randomYear}: Florida man`;
}

const floridamanAction= () => {
    const action = [
       "arrested for",
       "chewed off",
       "trapped in",
       "killed by",
       "tried to",
       "insisted on",
       "protected car from",
       "fought",
       "bit",
       "busted",
       "caught"

    ]
    const randomIndex = Math.floor(Math.random()*action.length);
    return action[randomIndex];
}


const floridamanTarget = () => {
    const target = [
        "calling 911 after kitten denied entry into strip club.",
        "another man’s face.",
        "fighting drag queen with tiki torch runs for mayor",
        "unlocked closet for two days",
        "alligator while hiding from cops",
        "steal rack of ribs by stashing it in his pants",
        "Hurricane Dorian by parking it in kitchen",
        "trying to get alligator drunk",
        "evading arrest by cartwheeling away from cops"
    ]
    const randomIndex = Math.floor(Math.random()*target.length);
    
    return target[randomIndex];
}


const runMessageApp = () => {
    const firstPart = floridamanDate();
    const middlePart = floridamanAction();
    const thirdPart = floridamanTarget();
    return firstPart + " " + middlePart + " " + thirdPart;
}

for (let i = 0; i< 30; i++){
    console.log(runMessageApp());
}




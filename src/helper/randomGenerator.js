const nameList = [
    "John Smith", "Jane Doe", "Michael Johnson", "Emily Davis", "William Brown", "Olivia Wilson", "James Miller", "Sophia Moore", "Benjamin Taylor", "Isabella Anderson", "Liam Thomas", "Mia Jackson", "Ethan White", "Ava Harris", "Alexander Martin", "Charlotte Thompson", "Daniel Garcia", "Amelia Martinez", "Henry Robinson", "Harper Clark", "Matthew Rodriguez", "Evelyn Lewis", "Joseph Lee", "Aria Walker", "Samuel Hall", "Scarlett Young", "David Hernandez", "Grace King", "Christopher Wright", "Ella Scott", "Andrew Green", "Lily Adams", "Joshua Baker", "Zoe Nelson", "Ryan Carter", "Nora Mitchell", "Lucas Perez", "Hannah Roberts", "Nathan Turner", "Riley Phillips", "Isaac Campbell", "Lillian Parker", "Owen Evans", "Ellie Edwards", "Caleb Collins", "Chloe Stewart", "Jack Sanchez", "Penelope Morris", "Gabriel Rivera", "Layla Cook"
]

const descList = [
    "The quick brown fox jumps over the lazy dog.", "To be or not to be, that is the question.", "All that glitters is not gold.", "A journey of a thousand miles begins with a single step.", "Fortune favors the bold.", "Actions speak louder than words.", "Beauty is in the eye of the beholder.", "The pen is mightier than the sword.", "When in Rome, do as the Romans do.", "The early bird catches the worm.", "You can't judge a book by its cover.", "A picture is worth a thousand words.", "Birds of a feather flock together.", "Absence makes the heart grow fonder.", "A watched pot never boils.", "Every cloud has a silver lining.", "Honesty is the best policy.", "Laughter is the best medicine.", "Necessity is the mother of invention.", "The grass is always greener on the other side.", "Two heads are better than one.", "You can't have your cake and eat it too.", "Actions speak louder than words.", "A penny saved is a penny earned.", "Barking up the wrong tree.", "Better late than never.", "Blood is thicker than water.", "Caught between a rock and a hard place.", "Cry over spilled milk.", "Curiosity killed the cat.", "Don't count your chickens before they hatch.", "Don't put all your eggs in one basket.", "Easy come, easy go.", "Every dog has its day.", "Go the extra mile.", "Hit the nail on the head.", "Ignorance is bliss.", "In the heat of the moment.", "It's a piece of cake.", "Kill two birds with one stone.", "Let sleeping dogs lie.", "Lightning never strikes twice.", "Live and let live.", "No pain, no gain.", "On cloud nine.", "Once in a blue moon.", "Out of the frying pan and into the fire.", "Raining cats and dogs.", "The ball is in your court."
]

function randomList(list) {
    return list[Math.floor(Math.random() * list.length)];
};

export const generateName = () => {
    return randomList(nameList)
}

export const generateDesc = () => {
    return randomList(descList)
}
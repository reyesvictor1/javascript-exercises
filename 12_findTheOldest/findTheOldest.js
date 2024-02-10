const findTheOldest = function(people) {

    let oldestAge = 0;
    let oldestPerson = "";

    for (let i = 0; i < people.length; i++) {
        let yearOfDeath = 0;
        if ("yearOfDeath" in people[i]) {
            yearOfDeath = people[i].yearOfDeath;
        } else {
            const dt = new Date();
            yearOfDeath = dt.getFullYear();
        }
        
        const age = yearOfDeath - people[i].yearOfBirth;
        // console.log(`${people[i].name} is ${age} old`);
        if (age > oldestAge) {
            oldestAge = age;
            oldestPerson = people[i].name;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;

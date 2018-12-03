const models = require('../models');
const jsonUsers = require('./data/users.json');
const jsonQuests = require('./data/quests.json');


// Drops previous databases and seed new data
models.sequelize.sync({force: true})
    .then(() => {
        const usersPromise = createUsers();
        const questsPromise = createQuests();
    
        return Promise.all([usersPromise, questsPromise]).then(([users, quests]) => mapQuestsToUsers(users, quests))
    })
    .then(() => {
        // Read to confirm that data was entered
        models.User.findAll().then(res => {
            console.info('all users: ', res.map(val => val.get({plain: true})));   
            process.exit();                 
        });
    })
    .catch(err => {
        console.error(err);
        console.debug('Something went wrong with seeding. Exiting...');
        process.exit();
    })
    



function createUsers() {
    let users = [
        {
            username: 'Demon_Slayer' + Math.floor(Math.random()*1000),
            password: 'Shrestinian',
            level: Math.floor(Math.random()*100),
            xp: Math.floor(Math.random()*1000000)
        },
        {
            username: 'Ninja_Slayer' + Math.floor(Math.random()*1000),
            password: 'tmnt',
            level: Math.floor(Math.random()*100),
            xp: Math.floor(Math.random()*1000000)
        },
        {
            username: 'Box_Slayer' + Math.floor(Math.random()*1000),
            password: 'bucket4president',
            level: Math.floor(Math.random()*100),
            xp: Math.floor(Math.random()*1000000)
        },
        {
            username: 'Tokyo Machine' + Math.floor(Math.random()*1000),
            password: 'kawaii',
            level: Math.floor(Math.random()*100),
            xp: Math.floor(Math.random()*1000000)
        },
        {
            username: 'hedonisti_84' + Math.floor(Math.random()*1000),
            password: 'jallu_kjeh_khej',
            level: Math.floor(Math.random()*100),
            xp: Math.floor(Math.random()*1000000)
        }
    ];
    return models.User.bulkCreate([...users, ...jsonUsers], {returning: true})
}

function createQuests() {
    let quests = [
        {
            title: 'Kill the Box Dragon!',
            dueDate: new Date(2017,04,01),
            isComplete: false,
            description: "Just kill the dragon!",
            rewardExp: 100,
            currentAmount: 100,
            requiredAmount: 200
        },
        {
            title: 'Kill the Ninja Dragon!',
            dueDate: new Date(2017,04,01),
            isComplete: false,
            description: "Just kill the dragon! You can have pizza afterwards",
            rewardExp: 200,
            currentAmount: 100,
            requiredAmount: 300
        },
        {
            title: 'Kill the Demon Dragon!',
            dueDate: new Date(2017,04,01),
            isComplete: false,
            description: "Just kill the dragon! Watch out form ummm... demons?",
            rewardExp: 300,
            currentAmount: 100,
            requiredAmount: 400
        },
        {
            title: 'Kill the Box Dragon!',
            dueDate: new Date(2017,04,01),
            isComplete: false,
            description: "Scan 100 delivieries to kill this mytchical beast!!",
            rewardExp: 400,
            currentAmount: 80,
            requiredAmount: 100
        },
        {
            title: 'Defend the village!',
            dueDate: new Date(2017,04,01),
            isComplete: false,
            description: "A great new enemy has entered the village... The great JalluPullo\n" + 
                        "in order to defeat him, you must consume him before others suffer!!",
            rewardExp: 500,
            currentAmount: 100,
            requiredAmount: 500
        },
    ];

    return models.Quest.bulkCreate([...quests, ...jsonQuests], { returning: true });
}

function mapQuestsToUsers(users, quests) {
    users.forEach(user => {
        const i = Math.floor(Math.random() * quests.length)
        user.addQuest(quests[i]);
    });
}
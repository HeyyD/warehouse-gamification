

export default (models) => {
    // Drops previous databases
    models.sequalize.sync({force: true})
        .then(function() {

    // Create demo: Create a User instance and save it to the database
    UserModel.create({
      username: 'Demon_Slayer' + Math.floor(Math.random()*1000),
      password: 'Shrestinian',
      level: Math.floor(Math.random()*100),
      xp: Math.floor(Math.random()*1000000)
    })
    .then(function(user) {
        console.log('\nCreated User:', user.get({ plain: true}));

        QuestModel.create({
            title: 'Kill the Box Dragon!',
            dueDate: new Date(2017,04,01),
            isComplete: false,
            description: "Just kill the dragon!"
        })
        .then(function(quest) {
            console.log('\nCreated Quests:', quest.get({ plain: true}));

            quest.setUsers([user])
            .then(function() {
            
                // Read demo: find incomplete tasks assigned to user 'Anna''
                UserModel.findAll()
                .then(function(users) {
                    console.log('all users: ', JSON.stringify(users));                    
                })
            })
        })
    })
})
}
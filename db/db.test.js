const { findUser, saveUser, connect, disconnect } = require("../db/db");
const User = require('../api/models/user')
const mongoose = require('mongoose');

// beforeEach(async () => {
//     connect()
//     })

describe("db Test", () => {
    test('Save a user to MongoDB', async () => {
        //create user
        const newUser = new User({
            _id: mongoose.Types.ObjectId(),
            firstName: 'Heather',
            lastName: 'Mosley',
        });
        await connect();
        const user = await saveUser(newUser);
        expect(user.firstName).toEqual('Heather');
        expect(user.lastName).toEqual('Mosley');
        await disconnect();
    });

    test("find user", async () => {
        //get user from findUser({})
        //expect user firstName
        //expect user lastName

        const newUser = new User({
            _id: mongoose.Types.ObjectId(),
            firstName: 'Heather',
            lastName: 'Mosley',
        })
        const user = await findUser(newUser);
    })

    afterEach(async () => {
        //call disconnect
    })
})
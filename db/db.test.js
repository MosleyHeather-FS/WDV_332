const mongoose = require('mongoose')
const User = require('../api/models/user')
const { connect, saveUser, findUser, disconnect } = require('./db')

jest.mock('./db.js')

beforeEach( async () => {
  await connect();
  console.log("Connecting")
})

describe('', () => {
  test('Save a user to MongoDB', async () => {
    //create user
    const newUser = new User({
      _id: mongoose.Types.ObjectId(),
      firstName: 'Heather',
      lastName: 'Mosley',
      email: 'hmosley@student.fullsail.edu',
      password: 'password',
      address: 'P.O. Box 2490',
      city: 'Rayville',
      state: 'Louisiana',
      zip: '71269',
    })

    // saveUser pass the user
    const user = await saveUser(newUser)

    // expect test run data
    expect(user.firstName).toEqual('Heather')
    expect(user.lastName).toEqual('Mosley')
    expect(user.email).toEqual('hmosley@student.fullsail.edu')
    expect(user.password).toEqual('password')
    expect(user.address).toEqual('P.O. Box 2490')
    expect(user.city).toEqual('Rayville')
    expect(user.state).toEqual('Louisiana')
    expect(user.zip).toEqual('71269')

    test('Find user from MongoDB', async () => {
      // get user from findUser({})
      await findUser(email)

      // expect user firstName
      // expect user lastName
      expect(user.firstName).toEqual('Heather')
      expect(user.lastName).toEqual('Mosley')
    })
  })
})

afterEach( async () => {
  await disconnect();
  console.log("Disconnecting")
})

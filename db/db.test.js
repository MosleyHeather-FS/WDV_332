const { request } = require('express')
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
      zip: 71269,
    })

     // saveUser pass the user
    const user = await saveUser(newUser)
    
     // expect test run data
    expect(user.firstName).toEqual('Heather')
    expect(user.city).toEqual('Rayville')
    expect(user.password).toBeDefined()
})

    test('Find user from MongoDB', async () => {
      // get user from findUser({})
      const newUser = 'hmosley@student.fullsail.edu'
      const user = await findUser(newUser)

      // expect user firstName
      // expect user lastName
      
      expect(user.firstName).toEqual('Heather')
      expect(user.lastName).toEqual('Mosley')
      expect(user).toHaveProperty('zip', 71269);
    })
})

afterEach( async () => {
  await disconnect();
  console.log("Disconnecting")
})

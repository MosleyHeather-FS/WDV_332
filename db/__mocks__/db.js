const connect = async () => {
  console.log('Mocked Connection')
}

const saveUser = () => {
  return Promise.resolve({
    firstName: 'Heather',
    lastName: 'Mosley',
    email: 'hmosley@student.fullsail.edu',
    password: 'password',
    address: 'P.O. Box 2490',
    city: 'Rayville',
    state: 'Louisiana',
    zip: 71269,
  })
}

const findUser = () => {
  return Promise.resolve({
    firstName: 'Heather',
    lastName: 'Mosley',
    email: 'hmosley@student.fullsail.edu',
    password: 'password',
    address: 'P.O. Box 2490',
    city: 'Rayville',
    state: 'Louisiana',
    zip: 71269,
  })
}

const disconnect = async () => {
  console.log('Mock Disconnected')
}

module.exports = { connect, saveUser, findUser, disconnect }
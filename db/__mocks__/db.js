const connect = async () => {
  console.log('Mocked Connection')
}

const saveUser = () => {
  return Promise.resolve({
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
}

const findUser = () => {
  return Promise.resolve({
    firstName: 'Heather',
    lastName: 'Mosley',
  })
}

const disconnect = async () => {
  console.log('Mock Disconnected')
}

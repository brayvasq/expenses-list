const index = (request, response) => {
  response.send({ message: 'Test controller' })
}

module.exports = { index: index }

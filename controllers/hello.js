const helloPage = (request, h) => {
  const response = h.response({
    status: 'success',
    message: 'Hello, this is bookshelf API'
  })
  response.code(200)
  return response
}
export default helloPage

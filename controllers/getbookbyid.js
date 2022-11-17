import books from '../model/books.js '
const getBookById = (request, h) => {
  const { id } = request.params
  const getBook = books.find((book) => book.id === Number(id))
  if (!getBook) {
    const response = h.response({
      status: 'fail',
      message: 'Buku tidak ditemukan'
    })
    response.code(404)
    return response
  }
  const response = h.response({
    status: 'success',
    data: {
      book: getBook
    }
  })
  response.code(200)
  return response
}
export default getBookById

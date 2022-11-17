import books from '../model/books.js'
const deleteBook = (request, h) => {
  const { id } = request.params
  const bookIndex = books.findIndex((book) => book.id === Number(id))
  if (bookIndex === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Buku gagal dihapus. Id tidak ditemukan'
    })
    response.code(404)
    return response
  } else {
    books.splice(bookIndex, 1)
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus'
    })
    response.code(200)
    return response
  }
}
export default deleteBook

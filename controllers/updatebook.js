import books from '../model/books.js'
const updateBook = (request, h) => {
  const { id } = request.params
  const bookIndex = books.findIndex((book) => book.id === Number(id))
  if (bookIndex === -1) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal memperbarui buku. Id tidak ditemukan'
    })
    response.code(404)
    return response
  } else {
    const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload
    const isFinished = !(readPage < pageCount)
    const updatedAt = new Date().toISOString()
    if (!name) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. Mohon isi nama buku'
      })
      response.code(400)
      return response
    }
    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal memperbarui buku. readPage tidak boleh lebih besar dari pageCount'
      })
      response.code(400)
      return response
    }
    books[bookIndex] = {
      ...books[bookIndex],
      name,
      year,
      author,
      summary,
      publisher,
      pageCount,
      readPage,
      finished: isFinished,
      reading,
      updatedAt
    }
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil diperbarui'
    })
    response.code(200)
    return response
  }
}
export default updateBook

import books from '../model/books.js'

const postBook = (request, h) => {
  const generateId = Date.now()
  const insertedAt = new Date().toISOString()
  const { name, year, author, summary, publisher, pageCount, readPage, reading } = request.payload
  const isFinished = !(readPage < pageCount)
  if (!name) {
    const response = h.response({
      status: 'fail',
      message: 'Gagal menambahkan buku. Mohon isi nama buku'
    })
    response.code(400)
    return response
  } else {
    if (readPage > pageCount) {
      const response = h.response({
        status: 'fail',
        message: 'Gagal menambahkan buku. readPage tidak boleh lebih besar dari pageCount'
      })
      response.code(400)
      return response
    } else {
      const newBook = {
        id: generateId,
        name,
        year,
        author,
        summary,
        publisher,
        pageCount,
        readPage,
        finished: isFinished,
        reading,
        insertedAt,
        updatedAt: insertedAt
      }
      books.push(newBook)
      const response = h.response({
        status: 'success',
        message: 'Buku berhasil ditambahkan',
        data: {
          bookId: generateId
        }
      })
      response.code(201)
      return response
    }
  }
}

export default postBook

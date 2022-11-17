import books from '../model/books.js'

const getBooks = (request, h) => {
  const { name, reading, finished } = request.query
  if (name) {
    const getSomeWithThisName = books.filter((book) => book.name.toLowerCase().includes(name.toLowerCase()))
    const reduceThem = getSomeWithThisName.map(({ id, name, publisher }) => ({ id, name, publisher }))
    const response = h.response({
      status: 'success',
      data: {
        books: reduceThem
      }
    })
    response.code(200)
    return response
  } else if (reading) {
    const isReading = books.filter((book) => {
      return book.reading === Boolean(Number(reading))
    })
    const reduceThem = isReading.map(({ id, name, publisher }) => ({ id, name, publisher }))
    const response = h.response({
      status: 'success',
      data: {
        books: reduceThem
      }
    })
    response.code(200)
    return response
  } else if (finished) {
    const isFinished = books.filter((book) => {
      return book.finished === Boolean(Number(finished))
    })
    const reduceThem = isFinished.map(({ id, name, publisher }) => ({ id, name, publisher }))
    const response = h.response({
      status: 'success',
      data: {
        books: reduceThem
      }
    })
    response.code(200)
    return response
  } else {
    const getSome = books.map(({ id, name, publisher }) => ({ id, name, publisher }))
    const response = h.response({
      status: 'success',
      data: {
        books: getSome
      }
    })
    response.code(200)
    return response
  }
}

export default getBooks

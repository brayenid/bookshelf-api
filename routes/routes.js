import helloPage from '../controllers/hello.js'
import postBook from '../controllers/postbook.js'
import getBooks from '../controllers/getbooks.js'
import getBookById from '../controllers/getbookbyid.js'
import updateBook from '../controllers/updatebook.js'
import deleteBook from '../controllers/deletebook.js'
const routes = [
  {
    method: 'GET',
    path: '/',
    handler: helloPage
  },
  {
    method: 'POST',
    path: '/books',
    handler: postBook
  },
  {
    method: 'GET',
    path: '/books',
    handler: getBooks
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookById
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: updateBook
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBook
  }
]

export default routes

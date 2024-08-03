import Book from './models.js';

//Create a new book
export const createBook = async (req, res) => {

  try {
    const book = new Book(req.body);
    await book.save();
    res.status(201).send(book);

  } catch (error) {
    res.status(400).send({ message: error.message });
    
  }
};

//Get all books
export const getBooks = async (req, res) => {

  try {
    const books = await Book.find();
    res.status(200).send(books);

  } catch (error) {
    res.status(500).send({ message: error.message });

  }
};


//Get a single book by id
export const getBookById = async (req, res) => {

  try {
    const book = await Book.findById(req.params.id);

    if (!book)
        return res.status(404).send({ message: 'Book not found' });
    res.status(200).send(book);

  } catch (error) {
    res.status(500).send({ message: error.message });

  }
};


//Update a book by id
export const updateBook = async (req, res) => {

  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });

    if (!book)
        return res.status(404).send({ message: 'Book not found' });
    res.status(200).send(book);

  } catch (error) {
    res.status(400).send({ message: error.message });

  }
};



//Delete a book by id
export const deleteBook = async (req, res) => {

  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    if (!book)
        return res.status(404).send({ message: 'Book not found' });
    res.status(200).send({ message: 'Book deleted' });

  } catch (error) {
    res.status(500).send({ message: error.message });

  }
};

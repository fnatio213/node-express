const bookModel = require("./model")


const createBooksController= (req, res) => {
    const {title, author, summary} = req.body;

    const book = new bookModel({title, author, summary});

    book.save().then(
        result => {
            res.json({message: "book has been created 0011", data: result})
        }
    ).catch(err => console.log(err))

   
} 


const listBooksController = (req, res) => {
    const{id} = req.params;

    if(id) {
        bookModel.find({_id: id}).then(books => {
            res.json({data: books})    
        }).catch(err => console.log(err))
        
    }else{
        bookModel.find({}).then(books => {
            res.json({data: books})    
        }).catch(err => console.log(err))
        
    }

    
}


const updateBooksController = (req, res) => {
  const {id, title, author, summary} = req.body;
  bookModel.findById(id).then(book => {
    if (book) {
      book.title = title;
      book.author = author;
      book.summary = summary;

      book.save()

      res.json({message: "we have safely updated yay!", data: bank })
    }

    res.json({message: "document not found" })

  }).catch(err => console.log(err));
}
  

const deleteBooksController = (req, res) => {
    const {id} = req.body;
      bookModel.findByIdAndRemove(id).then(deleted => {
        if(deleted){
            res.json({message: "book has been deleted", data: deleted});

        }
        res.json({message: "warning Bank not found" })
      })
    
}



module.exports = {
    createBooksController,
    listBooksController,
    updateBooksController,
    deleteBooksController
}
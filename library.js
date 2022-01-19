

function book(title,author,pageNum,alreadyRead) {
    this.title=title,
    this.author=author,
    this.pageNum=pageNum,
    this.alreadyRead=alreadyRead
}

let bookArr = []

// Buttons to toggle the new book form visibility

let addBookBtn = document.querySelectorAll(".add")
let form= document.querySelector(".form-container")

addBookBtn.forEach((e) => e.addEventListener('click', (e) =>{
    
    if (form.style.display=="flex") {form.style.display="none"}
    else {form.style.display="flex"}

} ))


let formFields=document.querySelector(".form")
let submitButton=document.querySelector(".new-book")

formFields.addEventListener('submit',(e) => {

    let newBook = new book(e.originalTarget.elements[0].value,
                            e.originalTarget.elements[1].value,
                            e.originalTarget.elements[2].value,
                            e.originalTarget.elements[3].checked)

    bookArr.push(newBook)
    form.style.display="none"    
    Addbook(bookArr.indexOf(newBook))
    AddDelBtn(bookArr.indexOf(newBook))
})


let BookShelf = document.querySelector(".books-container")
let BookShelfBtn=document.querySelector(".add-book")



function Addbook(i) {
    
    let NewBook = document.createElement('div')
   
    let bookTitle = document.createElement('div')
    bookTitle.textContent = bookArr[i].title
    let bookAuthor = document.createElement('div')
    bookAuthor.textContent = bookArr[i].author
    let bookPageNum = document.createElement('div')
    bookPageNum.textContent = bookArr[i].pageNum
    let deleteBtn = document.createElement('p')
    deleteBtn.textContent= "x"
    deleteBtn.classList.add('del-button')
    NewBook.classList.add("book")


    NewBook.setAttribute('id',i)
    NewBook.append(bookTitle,bookAuthor,bookPageNum,deleteBtn)
    BookShelf.insertBefore(NewBook,BookShelfBtn)

}


function AddDelBtn(i) {

    let currentbook = document.getElementById(`${i}`)

    currentbook.addEventListener('click', () => {
        BookShelf.removeChild(currentbook)
    })
}

let closeBtn = document.querySelector('.close-btn')

closeBtn.addEventListener('click', () => {
    form.style.display = "none"
})
//URL에 있는 book parameter 값(String): bookId
let url_href = window.location.href;    // 브라우저 창에 있는 주소
const bookId = new URL(url_href).searchParams.get("book");
console.log(`bookId: ${bookId}, type: ${typeof bookId}`);   // "3", string
//bookId가 null이면, index.html로 가자
if(bookId == null) {
    window.location.href = "index.html";
    //window.open("index.html", target="_top"); // 새로운 창 열려서 이동하는 문제 해결
}



// -> String을 number로 변환: bookIdNumber
// let bookIdNumber = Number(bookId);   // string->number
let bookIdNumber = parseInt(bookId);    // string->number
// let bookIdNumber = bookId * 1;  // string->number
console.log(`bookIdNumber: ${bookIdNumber}, type: ${typeof bookIdNumber}`); // 3, number

// -> books에서 하나씩 꺼내어 bookIdNumber랑 꺼낸 book의 id랑 같으면 데이터 빼자: bookData
// bookIdNumber: URL에서 가져온 id 값 === books 하나씩 꺼낸 book의 id 값
let bookData;
for(let book of books) {
    if(bookIdNumber === book.id) {  // ==: 값을 비교하는 것 , ===: 타입까지 비교하는 것
        bookData = book;    // id가 같으면, 그놈을 꺼내서 bookData에 넣자
        break;
    }
}
console.log(bookData);

// -> title, author, publisher, bookImage 알아내자
let title = bookData.title;
// let title = bookData["title"];
let author = bookData.author;
let publisher = bookData.publisher;
let bookImage = bookData.img;
console.log(title, author, publisher, bookImage);

// -> HTML에 넣자
// HTML 요소 -> js 변수
const titleDiv = document.getElementsByClassName("title")[1];
titleDiv.innerHTML = `<u>${title}</u>`;
const authorDiv = document.getElementsByClassName("author")[1];
authorDiv.innerHTML = author;
const publisherDiv = document.getElementsByClassName("publisher")[1];
publisherDiv.innerHTML = publisher;
const bookImageDiv = document.getElementsByClassName("book-image")[0];
bookImageDiv.innerHTML = `<img src="${bookImage}" />`;




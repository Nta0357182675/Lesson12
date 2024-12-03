// console.log('Hello MindX-er')
// // Danh sách cú pháp để kết nối đến html
// // 2 cú pháp nên nhớ luôn -- thân thuộc với css
// // document chính là đối tượng văn bản html
// const h1MindX = document.getElementById('MindX'); //lấy 1 phần tử đầu tiên có id là MindX
// // nếu lấy theo id, đọc từ trên xuống dưới sẽ lấy id đầu tiên
// console.log(h1MindX)
// const pp = document.getElementsByClassName('MindX') // lấy tất cả các phần tử theo class
// for (let i = 0; i < pp.length; i = i + 1){
//     console.log(pp[i])
// }
// document.getElementsByTagName('p') // lấy ra tất cả các phần tử theo thẻ p
// let h11 = document.querySelector('p.MindX') //lấy phần tử đầu tiên thỏa mãn cú pháp css selector
// console.log(h11)
// let h12 = document.querySelectorAll('p.MindX') // lấy ra tất các phần tử thỏa mãn cú pháo css selector
// console.log(h12)
// let pp = document.querySelector('p.MindX');
// console.log(pp)
// let p2 = document.querySelector('h1') as HTMLParagraphElement
// let x = p2.innerHTML 
// console.log(x)
// p2.style.color = 'blue'
// p2.style.backgroundColor = "green"
// Quy tắc lạc đà: Nếu từ có 2 từ trở nên thì từ đầu tiên viết thường hết, từ thứ 2 trở đi viết hoa chữ cái đầu
// const cl = document.querySelector('button')
// cl.onclick = function(){
//     console.log("hello")
// }
// let cv: HTMLElement = document.querySelector('body button') 
// let h1: HTMLElement = document.querySelector('body h1') 
// let a = 1
// cv.onclick = function () {
//     if (a === 1) {
//         h1.style.color = 'red'
//     } else if (a === 2) {
//         h1.style.color = 'green'
//     } else if (a === 3) {
//         h1.style.color = 'blue'
//     }
//     a = a + 1
//     if (a > 3) {
//         a = 1; // Reset `a` về 1 khi vượt quá 3
//     }
// }
//cau 1
var tth1 = document.querySelector('h1.titleH1');
console.log(tth1.innerText);
console.log(tth1.innerHTML);
// tth1.innerText = 'Đây là nội dung'
// console.log(tth1)
// //cau 2:
var found = true;
var click = document.querySelector('button.btnClick');
click.onclick = function () {
    found = !found;
    if (!found) {
        tth1.style.color = 'red';
        tth1.style.backgroundColor = 'blue';
    }
    else {
        tth1.style.color = 'black'; // Trả về màu chữ mặc định (đen)
        tth1.style.backgroundColor = 'white'; // Trả về nền mặc định (trắng
    }
};
// cau 3
// let inputtag: HTMLInputElement = document.querySelector('div.cau4 textarea')
// let add: HTMLButtonElement = document.querySelector('div.cau4 button')
// let listtask: HTMLElement = document.querySelector('.list_task')
// let list = []
// add.onclick = function () {
//     let value = inputtag.value
//     list.push(value)
//     let newtask = `<p><input type="checkbox">${value}</p>`
//     listtask.innerHTML = listtask.innerHTML + newtask
//     console.log(list)
// }
// 
var inputtag = document.querySelector('div.cau4 textarea');
var add = document.querySelector('div.cau4 button');
var listtask = document.querySelector('.list_task');
var list = [];
add.addEventListener('click', function () {
    var value = inputtag.value.trim();
    list.push(value);
    localStorage.setItem('task_list', JSON.stringify(list));
    var newtask = "<p><input type=\"checkbox\">".concat(value, "</p>");
    listtask.innerHTML = listtask.innerHTML + newtask;
    console.log(list);
});
// Hỏi người dùng có muốn khôi phục dữ liệu hay không
var userConfirmed = window.confirm("Bạn có muốn khôi phục lại dữ liệu đã lưu không?");
if (userConfirmed) {
    // Lấy dữ liệu từ localStorage
    var savedTasks = JSON.parse(localStorage.getItem('task_list') || '[]');
    if (savedTasks) {
        // Nếu có dữ liệu, hiển thị lại
        for (var i = 0; i < savedTasks.length; i = i + 1) {
            var newtask = "<p><input type=\"checkbox\">".concat(savedTasks[i], "</p>");
            listtask.innerHTML = listtask.innerHTML + newtask;
        }
    }
    else {
        console.log("Không có dữ liệu để khôi phục!");
    }
}
else {
    // Nếu người dùng từ chối, xóa toàn bộ dữ liệu trong localStorage
    localStorage.clear();
    console.log("Dữ liệu đã bị xóa!");
}

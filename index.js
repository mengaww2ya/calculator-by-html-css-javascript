
const myInput = document.getElementById('display');
function displayOnScreen(key) {
  myInput.value += key;
}
function clearAll() {
  myInput.value = '';
}
function solution() {
    myInput.value = eval(myInput.value);

}
function deleteNumber() {
myInput.value=myInput.value.slice(0,-1);
    
}
displayOnScreen();
deleteNumber();
solution();
clearAll();

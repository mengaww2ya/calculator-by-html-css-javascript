const myInput = document.getElementById('display');
function displayOnScreen(key) {
  myInput.value += key;
}
function deleteNumber() {
  myInput.value = '';
}
function solution() {
  try {
    myInput.value = eval(myInput.value);
  } catch (error) {
    myInput.value = 'error';
  }
}
displayOnScreen();
deleteNumber();
solution();

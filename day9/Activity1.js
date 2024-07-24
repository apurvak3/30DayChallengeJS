//
/**
 * select an html elements by its id and change its text content
 * select an html elements by its class and change its background colour
 */
function changeText (){
    document.getElementById("autobio").textContent = "new text content";

}
function changeBackground(){
    document.getElementById('photographer').style.backgroundImage = "url('pic1.jpg')";
}
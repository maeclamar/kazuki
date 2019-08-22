let myWindow;

function openWindow() {
    myWindow = window.open("", "myWindow", "location=0,top=300,left=500,width=400,height=200,scrollbars=no");
    myWindow.document.write("<p>Successfully submitted!</p>");
}
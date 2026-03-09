// Add Hobby Benefit
function addHobby() {

    let input = document.getElementById("hobbyInput");
    let text = input.value;

    if(text === "") {
        alert("Please enter a hobby benefit");
        return;
    }

    let list = document.getElementById("hobbyList");

    let li = document.createElement("li");
    li.textContent = text + " ";

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.onclick = function() {
        li.remove();
    };

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
}



// Delete Item
function deleteItem(button) {
    button.parentElement.remove();
}



// Contact Form Alert
document.getElementById("contactForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Form submitted successfully!");
});



// Dynamic Date and Time
function updateDateTime(){

    let now = new Date();

    let options = {
        weekday: 'long',
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    };

    let date = now.toLocaleDateString('en-IN', options);
    let time = now.toLocaleTimeString();

    document.getElementById("dateTime").innerHTML =
    date + " , " + time;
}

setInterval(updateDateTime,1000);
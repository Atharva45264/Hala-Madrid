window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
const text = "THEY PRAY FOR MIRACLES AND MIRACLES ARRIVE REAL MADRID THE TEAM OF DREAMS";
const words = text.split(" "); // Split the sentence into individual words
let index = 0;
const speed = 400; // 500ms = 0.5-second delay between words
const clearDelay = 2000; // 5000ms = 5 seconds delay before clearing the text

function typeWriter() {
    if (index < words.length) {
        // Check if we reached the "REAL MADRID" part to insert a line break
        if (words[index] === "REAL") {
            document.getElementById("blinking-text").innerHTML += "<br>"; // Insert a line break before "REAL MADRID"
        }

        document.getElementById("blinking-text").innerHTML += words[index] + " "; // Add each word followed by a space
        index++;
        setTimeout(typeWriter, speed); // Delay between each word
    } else {
        // Once the typing is complete, start a timer to clear the text after 5 seconds
        setTimeout(() => {
            document.getElementById("blinking-text").innerHTML = ""; // Clear the text after 5 seconds
        }, clearDelay);
    }
}

typeWriter();


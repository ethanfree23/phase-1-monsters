document.addEventListener('DOMContentLoaded', () => {
    fetchMonsters();
    addMonsters();
})


function fetchMonsters() {
    const monsterURL = "http://localhost:3000/monsters"
    fetch(monsterURL)
    .then(resp => resp.json())
    .then(data => {
        // console.log(data)
        data.forEach(data => {
            const monsterContainer = document.querySelector("#monster-container")
            // monsterContainer.innerText = ""
            const li = document.createElement("li")
            monsterContainer.appendChild(li);
            li.innerHTML = `
            <h2>${data.name}</h2>
                <h3>${data.age}</h3>
                    <p>${data.description}</p>
            `
        })
    })
}

function addMonsters(){
    const monsterInput = document.querySelector("#create-monster");
    const form = document.createElement("form");
    monsterInput.appendChild(form);
    form.innerHTML = `
    <label for="mName">Monster's Name:</label><br>
        <input type="text" id="mName" name="mName"><br>
    <label for="mAge">Monster's Age:</label><br>
        <input type="text" id="mAge" name="mAge"><br>
    <label for="mDescription">Monster's Description:</label><br>
        <input type="text" id="mDescription" name="mDescription"><br>
    <button type="submit" form="monsterForm" value="Submit">Submit</button>
    `
}
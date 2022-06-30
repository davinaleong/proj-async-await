const element = document.querySelector("#todo-table tbody")
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(data => data.json())
    .then(result => {
        element.innerHTML = ""
        result.forEach(todo => {
            const { id, title, completed } = todo
            const newRow = document.createElement("tr")

            const newIdCol = document.createElement("td")
            newIdCol.classList.add("border", "border-black", "p-1")
            newIdCol.innerText = id
            newRow.appendChild(newIdCol)

            const newTitleCol = document.createElement("td")
            newTitleCol.classList.add("border", "border-black", "p-1")
            newTitleCol.innerText = title
            newRow.appendChild(newTitleCol)

            const newCompletedCol = document.createElement("td")
            newCompletedCol.classList.add("border", "border-black", "p-1")
            if (completed) {
                newRow.classList.add("text-green-500")
                newCompletedCol.innerText = "YES"
            } else {
                newRow.classList.add("text-red-500")
                newCompletedCol.innerText = "NO"
            }
            newRow.appendChild(newCompletedCol)

            element.appendChild(newRow)
        })
    })
    .catch(err => alert(err))
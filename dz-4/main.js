const reguest = new XMLHttpRequest()
reguest.open("GET", "people.json")
reguest.setRequestHeader("Content-type", "aplication/json")
reguest.send()
reguest.addEventListener('load', () => {
    const items = JSON.parse(reguest.response)

    items.forEach((item) => {
        const div = document.createElement('div')
        div.innerHTML = `
            <h1>${item.name}</h1>
            <h1>${item.age}</h1>
    `
        document.body.append(div)
    })

})


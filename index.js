// Add your code here

const body = document.querySelector('body')
function submitData(name, email){
    const contentData = {
        name: `${name}`, 
        email: `${email}`
    };
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify(contentData),
        
    })
    .then(response => response.json())
    .then(object => body.append(JSON.stringify(object)))
    .catch(error => {
        alert("Oh No");
        body.append(error.message)
        
    })
}


//submitData('reece', 't')
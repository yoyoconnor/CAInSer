fetch('http://localhost:8080/internships/?query=i&location=i&type=i')
    .then(res => console.log(res.json()))
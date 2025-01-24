let root = document.getElementById('root')

const showUserCards = () => {
    fetch("https://course-selling-app-56647-default-rtdb.firebaseio.com/courses.json")
    .then(res => res.json())
    .then(data => displayUserCards(data))
}

const displayUserCards = (data) => {
    let usersDetail = Object.entries(data)
    let usersList = ''
    console.log(usersDetail)
    usersDetail.map((userData) => {
        console.log(userData[0])
        if(userData[1] != null) {
            usersList += `
                <div id="course-card">
                    <div id="course-header">
                        <h1>${userData[1].title}</h1>
                    </div>
                    <div id="course-body">
                        <p><strong>Instructor: </strong>${userData[1].instructor}</p>
                        <p><strong>Total lectures: </strong>${userData[1].lectures}</p>
                        <p><strong>Level: </strong>${userData[1].level}</p>
                        <p><strong id="price">Price: </strong>&#36; ${userData[1].price}</p>
                        <p><strong>Total Hours: </strong>${userData[1].total_duration} Hrs</p>
                        ${userData[1].bestseller? "<p id='best'>Bestseller</p>" : ''}
                    </div>
                    <div id="course-footer">
                        <span id="rating">* ${userData[1].rating}</span>
                        <span id="review">${userData[1].review} reviews</span>
                    </div>
                </div>
            `
        }
    }) 
    let root = document.querySelector('#root').innerHTML = usersList
}
showUserCards()
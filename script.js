const users = [
    { id: 1, name: "Иван Иванов", age: 25, city: "Москва", bio: "Любит путешествовать и читать книги." },
    { id: 2, name: "Анна Смирнова", age: 30, city: "Санкт-Петербург", bio: "Специалист по маркетингу, обожает готовить." },
    { id: 3, name: "Екатерина Смирнова", age: 31, city: "Курск", bio: "Специалист по маркетингу, обожает не готовить." },
    { id: 4, name: "Анастасия Смирнова", age: 32, city: "Донецк", bio: "Специалист по маркетингу, обожает, когда ей готовят." },
    { id: 5, name: "Валерия Смирнова", age: 33, city: "Брянск", bio: "Специалист по маркетингу, обожает, когда с ней готовят." },
    { id: 6, name: "Ирина Смирнова", age: 34, city: "Рязань", bio: "Специалист по маркетингу, обожает, когда одна готовит." },
    { id: 7, name: "Елизавета Смирнова", age: 35, city: "Новосиб", bio: "Специалист по маркетингу, обожает, когда не одна готовит." },
    { id: 8, name: "Наташа Смирнова", age: 36, city: "Казань", bio: "Специалист по маркетингу, обожает просто готовить." },
    { id: 9, name: "Оксана Смирнова", age: 37, city: "Екатеринбург", bio: "Специалист по маркетингу, обожает много готовить." },
    { id: 10, name: "Кристина Смирнова", age: 38, city: "Моска", bio: "Специалист по маркетингу, обожает мало готовить." },
    { id: 11, name: "Вероника Смирнова", age: 39, city: "Санкт-Петербург", bio: "Специалист по маркетингу, обожает не много готовить." },
    { id: 12, name: "Ника Смирнова", age: 40, city: "Вологда", bio: "Специалист по маркетингу, обожает не много готовить." },
];

function loadUserCards() {
    const userCardsContainer = document.getElementById("user-cards");
    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.className = "col-lg-3 col-md-6 col-sm-12 mb-4";
        userCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text">Возраст: ${user.age}</p>
                    <p class="card-text">Город: ${user.city}</p>
                    <button class="btn btn-primary" data-toggle="modal" data-target="#userModal" onclick="showUserDetails(${user.id})">Подробнее</button>
                </div>
            </div>
        `;

        userCardsContainer.appendChild(userCard);
    });
}

function showUserDetails(userId) {
    const user = users.find(user => user.id === userId);
    const userDetails = document.getElementById("userDetails");
    userDetails.innerText = user ? user.bio : "Информация о пользователе отсутствует";
}

document.addEventListener("DOMContentLoaded", loadUserCards);

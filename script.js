document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('event-name').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const description = document.getElementById('event-description').value;

    if (name && date && time && description) {
        addEventToList(name, date, time, description);
        clearForm();
    }
});

function addEventToList(name, date, time, description) {
    const eventList = document.getElementById('event-list');
    
    const eventDiv = document.createElement('div');
    eventDiv.classList.add('event');

    eventDiv.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p>${description}</p>`;

    eventList.appendChild(eventDiv);
}

function clearForm() {
    document.getElementById('event-form').reset();
}

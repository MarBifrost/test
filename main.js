document.querySelector('button').onclick = () => {
    let dateStart = document.querySelector('#start_date').value;
    let dateEnd = document.querySelector('#end_date').value;
    dateStart = Date.parse(dateStart);
    dateEnd = Date.parse(dateEnd);
    let result = document.querySelector('#result');
    for (let i = dateStart; i <= dateEnd; i += 24 * 60 * 60 * 1000) {
        result.innerHTML += new Date(i).toISOString().substring(0,10) + '<br>';
    }
}


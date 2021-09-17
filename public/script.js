(() => {
    let interval;
    function getCurrent() {
        fetch('/current')
        .then(res => res.json())
        .then(json => {
            document.getElementById('question').innerText = json.question;
        })
        .catch(() => {
            clearInterval(interval)
        })
    }
    interval = setInterval(getCurrent, 1000)
})();

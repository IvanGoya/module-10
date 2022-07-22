function engineerInfo({name, id, email, gitHubUsername}, file) {
    file += `<div class="card" style="width: 18rem;">
    <div class="card-body bg-dark text-light">
        <h2 class="card-title">${name}</h2>
        <h6 class="card-subtitle mb-2">Engineer</h6>
        <ul>
            <li>Employee ID: ${id}</li>
            <li>Employee Email: <a href="mailto: ${email}" target="_blank">${email}</a></li>
            <li>GitHub Username: <a href="https://github.com/${gitHubUsername}" target="_blank">${gitHubUsername}</a></li>
        </ul>
    </div>
</div>`

console.log(file);

return file
}

module.exports = {engineerInfo};
function internInfo({name, id, email, school}, file) {
    file += `<div class="card" style="width: 18rem;">
    <div class="card-body bg-dark text-light">
        <h2 class="card-title">${name}</h2>
        <h6 class="card-subtitle mb-2">Intern</h6>
        <ul>
            <li>Employee ID: ${id}</li>
            <li>Employee Email: <a href="mailto: ${email}" target="_blank">${email}</a></li>
            <li>School: ${school}</li>
        </ul>
    </div>
</div>`
return file
}

module.exports = {internInfo};
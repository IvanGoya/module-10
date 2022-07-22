const intern = require('../intern');

test('Intern added', () => {
    let internTest = {
        "name": 'Ivan Goya',
        "id": '1998',
        "email": 'ivan.goya98@gmail.com',
        "school": 'The Ohio State University'
    }
    let emptyString = '';
    expect(intern.internInfo(internTest, emptyString)).toEqual(`<div class="card" style="width: 18rem;">
    <div class="card-body bg-dark text-light">
        <h2 class="card-title">${internTest.name}</h2>
        <h6 class="card-subtitle mb-2">Intern</h6>
        <ul>
            <li>Employee ID: ${internTest.id}</li>
            <li>Employee Email: <a href="mailto: ${internTest.email}" target="_blank">${internTest.email}</a></li>
            <li>School: ${internTest.school}</li>
        </ul>
    </div>
</div>`);

})
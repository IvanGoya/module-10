const engineer = require('../engineer');

test('Engineer card added to string', () => {
    let engineerTest = {
        "name": 'Ronnie Wollett',
        "id": '1954',
        "email": 'RonaldW@yahoo.com',
        "gitHubUsername": 'RonaldWollett'
    }
    let emptyString = '';
    expect(engineer.engineerInfo(engineerTest, emptyString)).toEqual(`<div class="card" style="width: 18rem;">
    <div class="card-body bg-dark text-light">
        <h2 class="card-title">${engineerTest.name}</h2>
        <h6 class="card-subtitle mb-2">Engineer</h6>
        <ul>
            <li>Employee ID: ${engineerTest.id}</li>
            <li>Employee Email: <a href="mailto: ${engineerTest.email}" target="_blank">${engineerTest.email}</a></li>
            <li>GitHub Profile: <a href="https://github.com/${engineerTest.gitHubUsername}" target="_blank">${engineerTest.gitHubUsername}</a></li>
        </ul>
    </div>
</div>`);

})
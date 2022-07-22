const manager = require('../manager');

test('manager card added to string', () => {
    let managerTest = {
        "name": 'Alex Goya',
        "id": '2290',
        "email": 'AlexGoya@hotmail.com',
        "office": 'Manheim'
    }

    let emptyString = '';
    expect(manager.managerInfo(managerTest, emptyString)).toEqual(`<div class="card" style="width: 18rem;">
    <div class="card-body bg-dark text-light">
        <h2 class="card-title">${managerTest.name}</h2>
        <h6 class="card-subtitle mb-2">Manager</h6>
        <ul>
            <li>Employee ID: ${managerTest.id}</li>
            <li>Employee Email: <a href="mailto: ${managerTest.email}" target="_blank">${managerTest.email}</a></li>
            <li>Office Number: ${managerTest.office}</li>
        </ul>
    </div>
</div>`);

})
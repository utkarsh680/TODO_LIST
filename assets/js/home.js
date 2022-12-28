console.log('my script is loaded');

// Category selection 
createInput("Other");

function createInput(category) {
    const input = document.createElement('input');
    input.name = 'category';
    input.type = 'hidden';
    input.value = category;
    input.id = 'cat-type';
    document.getElementById('add-task-form').append(input);
}

function addWork() {
    const categoryPrev = document.getElementById('cat-type');
    document.getElementById('add-task-form').removeChild(categoryPrev);

    createInput('Work');
    const workCategory = document.getElementById('work-cat');
    const selectCategory = document.getElementById('select-cat');
    selectCategory.innerHTML = workCategory.textContent;
};

function addSchool() {
    const categoryPrev = document.getElementById('cat-type');
    document.getElementById('add-task-form').removeChild(categoryPrev);

    createInput('School');
    const schoolCategory = document.getElementById('school-cat');
    const selectCategory = document.getElementById('select-cat');
    selectCategory.innerHTML = schoolCategory.textContent;
};

function addPersonal() {
    const categoryPrev = document.getElementById('cat-type');
    document.getElementById('add-task-form').removeChild(categoryPrev);

    createInput('Personal');
    const personalCategory = document.getElementById('personal-cat');
    const selectCategory = document.getElementById('select-cat');
    selectCategory.innerHTML = personalCategory.textContent;
};

function addOther() {
    const categoryPrev = document.getElementById('cat-type');
    document.getElementById('add-task-form').removeChild(categoryPrev);
    
    createInput('Other');
    const otherCategory = document.getElementById('other-cat');
    const selectCategory = document.getElementById('select-cat');
    selectCategory.innerHTML = otherCategory.textContent;
};

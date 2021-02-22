let ulTasks = $('#ulTasks');
let btnAdd = $('#btnAdd');
let btnClear = $('#btnClear');
let btnSort = $('#btnSort');
let btnCleanup = $('#btnCleanup');
let inpNewTask = $('#inpNewTask');

function btn() {
    let listitem = $('<li>' , {
        'class':'list-group-item',
        text: inpNewTask.val()
    })
    listitem.click( (eve) => {
        $(eve.target).toggleClass('done')
    })
    ulTasks.append(listitem);
    inpNewTask.val('');
    btnAdd.prop('disabled',true);

}

function cleardone() {
    $('#ulTasks .done').remove();
}

function sort() {
   let d = $('#ulTasks .done').remove();
   ulTasks.append(d);
}

function toggleClear(enabled) {
    if(enabled) btnClear.prop('disabled',false)
    else btnClear.prop('disabled',true)
}
function toggleAdd(enable) {
    if(enable) btnAdd.prop('disabled',false)
    else btnAdd.prop('disabled',true)
}

inpNewTask.on('input', () => {
    toggleClear(inpNewTask.val() != '');
    toggleAdd(inpNewTask.val() != '');
})
inpNewTask.keypress((e) => {
    if(e.which == 13) {
        btn();
    }
})

btnAdd.click(() => {
    btn();

})

btnClear.click(() => {
    inpNewTask.val('')
    btnClear.prop('disabled',true)
})

btnCleanup.click(() => {
    cleardone();
})

btnSort.click(() => {
    sort();
})


const main_wrapper = document.createElement('div');
const div_main = document.createElement('div');
const title_tasks = document.createElement('h1');
const list_tasks = document.createElement('ol');
const input_field = document.createElement('input');
const btn_task_create = document.createElement('input');
const div_task_interaction = document.createElement('div');
const input_number = document.createElement('input');
const btn_task_mark_ongoing = document.createElement('input');
const btn_task_complete = document.createElement('input');
const btn_task_delete = document.createElement('input');
const jump_line = document.createElement('br');
const input_number_task_modify = document.createElement('input');
const input_field_task_modify = document.createElement('input');
const btn_task_modify = document.createElement('input');
const div_style = document.createElement('div');
const title_style = document.createElement('h2');
const btn_style_color_default = document.createElement('input');
const p_style_color_text = document.createElement('p');
const btn_style_color_text = document.createElement('input');
const span_style_color_text = document.createElement('span');
const p_style_color_background = document.createElement('p');
const btn_style_color_background = document.createElement('input');
const span_style_color_background = document.createElement('span');
const p_style_color_ongoing = document.createElement('p');
const btn_style_color_ongoing = document.createElement('input');
const span_style_color_ongoing = document.createElement('span');
const all_elements_input = document.getElementsByTagName('input');

let nbr_task = 0;
let tasks = [];
let color_text_default = '#825555';
let color_text = color_text_default;
let color_background_default = '#0D0A0F';
let color_background = color_background_default;
let color_ongoing_default = '#0775AB';
let color_ongoing = color_ongoing_default;

document.body.appendChild(main_wrapper);
main_wrapper.appendChild(div_main);
div_main.appendChild(title_tasks);
div_main.appendChild(list_tasks);
div_main.appendChild(input_field);
div_main.appendChild(btn_task_create);
div_main.appendChild(div_task_interaction);
div_task_interaction.appendChild(input_number);
div_task_interaction.appendChild(btn_task_mark_ongoing);
div_task_interaction.appendChild(btn_task_complete);
div_task_interaction.appendChild(btn_task_delete);
div_task_interaction.appendChild(jump_line);
div_task_interaction.appendChild(input_number_task_modify);
div_task_interaction.appendChild(input_field_task_modify);
div_task_interaction.appendChild(btn_task_modify);
div_main.appendChild(div_style);
div_style.appendChild(title_style);
div_style.appendChild(btn_style_color_default);
div_style.appendChild(p_style_color_text);
p_style_color_text.appendChild(btn_style_color_text);
p_style_color_text.appendChild(span_style_color_text);
div_style.appendChild(p_style_color_background);
p_style_color_background.appendChild(btn_style_color_background);
p_style_color_background.appendChild(span_style_color_background);
div_style.appendChild(p_style_color_ongoing);
p_style_color_ongoing.appendChild(btn_style_color_ongoing);
p_style_color_ongoing.appendChild(span_style_color_ongoing);

document.body.style.wordBreak = 'break-word';
document.body.style.color = color_text;
document.body.style.backgroundColor = color_background;

main_wrapper.style.width = '50%';
main_wrapper.style.margin = 'auto';
main_wrapper.style.padding = '30px';

title_tasks.innerText = 'Todo list';
title_tasks.style.textTransform = 'uppercase';
title_tasks.style.fontSize = '150%';

for (let element of all_elements_input)
    element.style.marginRight = '5px';

div_task_interaction.style.marginTop = '15px';
div_task_interaction.style.visibility = 'hidden';

span_style_color_text.style.marginLeft = '10px';
span_style_color_background.style.marginLeft = '10px';
span_style_color_ongoing.style.marginLeft = '10px';

input_field.setAttribute('type', 'text');
input_field.setAttribute('id', 'input_field');
input_field.setAttribute('name', 'input_field');
input_field.setAttribute('placeholder', 'Type your task here');

btn_task_create.setAttribute('type', 'button');
btn_task_create.setAttribute('id', 'btn_task_create');
btn_task_create.setAttribute('name', 'btn_task_create');
btn_task_create.setAttribute('value', 'Create Task');
btn_task_create.style.cursor = 'pointer';

input_number.setAttribute('type', 'number');
input_number.setAttribute('id', 'input_number');
input_number.setAttribute('name', 'input_number');
input_number.setAttribute('placeholder', 'Number');
input_number.setAttribute('min', '1');

btn_task_mark_ongoing.setAttribute('type', 'button');
btn_task_mark_ongoing.setAttribute('id', 'btn_task_mark_ongoing');
btn_task_mark_ongoing.setAttribute('name', 'btn_task_mark_ongoing');
btn_task_mark_ongoing.setAttribute('value', 'Mark Task As Ongoing');
btn_task_mark_ongoing.style.cursor = 'pointer';

btn_task_complete.setAttribute('type', 'button');
btn_task_complete.setAttribute('id', 'btn_task_complete');
btn_task_complete.setAttribute('name', 'btn_task_complete');
btn_task_complete.setAttribute('value', 'Complete Task');
btn_task_complete.style.cursor = 'pointer';

btn_task_delete.setAttribute('type', 'button');
btn_task_delete.setAttribute('id', 'btn_task_delete');
btn_task_delete.setAttribute('name', 'btn_task_delete');
btn_task_delete.setAttribute('value', 'Delete Task');
btn_task_delete.style.cursor = 'pointer';

input_number_task_modify.setAttribute('type', 'number');
input_number_task_modify.setAttribute('id', 'input_number_task_modify');
input_number_task_modify.setAttribute('name', 'input_number_task_modify');
input_number_task_modify.setAttribute('placeholder', 'Number');
input_number_task_modify.setAttribute('min', '1');

input_field_task_modify.setAttribute('type', 'text');
input_field_task_modify.setAttribute('id', 'input_field_task_modify');
input_field_task_modify.setAttribute('name', 'input_field_task_modify');
input_field_task_modify.setAttribute('placeholder', 'New text for the task');

btn_task_modify.setAttribute('type', 'button');
btn_task_modify.setAttribute('id', 'btn_task_modify');
btn_task_modify.setAttribute('name', 'btn_task_modify');
btn_task_modify.setAttribute('value', 'Modify Task');
btn_task_modify.style.cursor = 'pointer';

title_style.innerText = 'Title style';
title_style.style.textTransform = 'uppercase';
title_style.style.fontSize = '150%';

btn_style_color_default.setAttribute('type', 'button');
btn_style_color_default.setAttribute('id', 'btn_style_color_default');
btn_style_color_default.setAttribute('name', 'btn_style_color_default');
btn_style_color_default.setAttribute('value', 'Default Colors');
btn_style_color_default.style.cursor = 'pointer';

btn_style_color_text.setAttribute('type', 'color');
btn_style_color_text.setAttribute('id', 'btn_style_color_text');
btn_style_color_text.setAttribute('name', 'btn_style_color_text');
btn_style_color_text.style.cursor = 'pointer';

span_style_color_text.innerText = 'Text Color';

btn_style_color_background.setAttribute('type', 'color');
btn_style_color_background.setAttribute('id', 'btn_style_color_background');
btn_style_color_background.setAttribute('name', 'btn_style_color_background');
btn_style_color_background.style.cursor = 'pointer';

span_style_color_background.innerText = 'Background Color';

btn_style_color_ongoing.setAttribute('type', 'color');
btn_style_color_ongoing.setAttribute('id', 'btn_style_color_ongoing');
btn_style_color_ongoing.setAttribute('name', 'btn_style_color_ongoing');
btn_style_color_ongoing.style.cursor = 'pointer';

span_style_color_ongoing.innerText = 'Color For Ongoing Tasks';

btn_task_create.addEventListener('click', function()
{
    let task;
    if (input_field.value != '')
    {
        nbr_task++;
        list_tasks.insertAdjacentHTML('beforeend', '<li id="task_' + nbr_task + '" spellcheck="false" style="cursor: pointer;"></li>');
        task = document.getElementById('task_' + nbr_task);
        task.innerText = input_field.value;
        task.contentEditable = true;
        tasks.push(task);
        input_field.value = '';
        input_number.value = '';
        input_number_task_modify.value = '';
        input_field_task_modify.value = '';
        div_task_interaction.style.visibility = 'visible'; 
    }
});

btn_task_mark_ongoing.addEventListener('click', function()
{
    const task = tasks[input_number.value - 1];
    if (task)
    {
        task.style.textDecoration = 'none';
        if (task.classList.contains('ongoing'))
        {
            task.classList.remove('ongoing');
            task.style.color = color_text;
        }
        else
        {
            task.classList.add('ongoing');
            task.style.color = color_ongoing;
        }
        input_field.value = '';
        input_number.value = '';
        input_number_task_modify.value = '';
        input_field_task_modify.value = '';
    }
});

btn_task_complete.addEventListener('click', function()
{
    const task = tasks[input_number.value - 1];
    if (task)
    {
        task.style.color = 'initial';
        task.style.textDecoration = 'line-through';
        input_field.value = '';
        input_number.value = '';
        input_number_task_modify.value = '';
        input_field_task_modify.value = '';
    }
});

btn_task_delete.addEventListener('click', function()
{
    const task = tasks[input_number.value - 1];
    if (task)
    {
        tasks.splice(input_number.value - 1, 1);
        task.remove();
        input_field.value = '';
        input_number.value = '';
        input_number_task_modify.value = '';
        input_field_task_modify.value = '';
        if (!tasks.length)
            div_task_interaction.style.visibility = 'hidden';
    }
});

btn_task_modify.addEventListener('click', function()
{
    const task = tasks[input_number_task_modify.value - 1];
    const new_text = input_field_task_modify.value;

    if (task && new_text != '')
    {
        task.innerText = new_text;
        input_field.value = '';
        input_number.value = '';
        input_number_task_modify.value = '';
        input_field_task_modify.value = '';
    }
});

btn_style_color_default.addEventListener('click', function()
{
    const tasks_ongoing = document.getElementsByClassName('ongoing');

    color_text = color_text_default;
    color_background = color_background_default;
    color_ongoing = color_ongoing_default;

    document.body.style.color = color_text;
    document.body.style.backgroundColor = color_background;

    if (tasks_ongoing.length)
    {
        for (let task of tasks_ongoing)
            task.style.color = color_ongoing;
    }
});

btn_style_color_text.addEventListener('click', function(e)
{
    color_text = e.target.value;
    document.body.style.color = color_text;
});

btn_style_color_background.addEventListener('click', function(e)
{
    color_background = e.target.value;
    document.body.style.backgroundColor = color_background;
});

btn_style_color_ongoing.addEventListener('click', function(e)
{
    const tasks_ongoing = document.getElementsByClassName('ongoing');
    color_ongoing = e.target.value;

    if (tasks_ongoing.length)
    {
        for (let task of tasks_ongoing)
            task.style.color = color_ongoing;
    }
});


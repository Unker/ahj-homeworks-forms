import Popover from './Popover';

const popoverFactory = new Popover();
let actualPopovers = [];
const popoverText = `This text is a very boring text and I bet you will not manage to read the whole text 
since the only period in the text is the one that ends ...`;

const container = document.querySelector('.container');

const showPopover = (eaderText, bodyText, el) => {
  actualPopovers.push({
    name: el.name,
    id: popoverFactory.show(eaderText, bodyText, el),
  });
};

const onClick = (e) => {
  actualPopovers.forEach((popover) => popoverFactory.remove(popover.id));
  actualPopovers = [];

  const { target } = e;
  if (target.classList.contains('btn')) {
    showPopover('Tittle', popoverText, target);
  }
};

window.addEventListener('click', onClick);

const button = document.createElement('button');
button.type = 'button';
button.innerHTML = 'Click to toggle popover';
button.classList.add('btn', 'btn-lg', 'btn-danger');

const tasks = container.querySelectorAll('.task');
const task1 = tasks[0];
task1.appendChild(button);

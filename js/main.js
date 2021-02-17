const order = document.querySelectorAll('.book');
const adv = document.querySelector('.adv');
const orderLiSecond = order[0].querySelectorAll('li');
const orderLiFifth = order[5].querySelectorAll('li');
const ulOrder_2 = order[2].querySelector('ul');
const addLi = document.createElement('li');
const orderLiBook6 = order[2].querySelectorAll('li');

order[1].after(order[0]);
order[0].after(order[4]);
order[4].after(order[3]);
order[3].after(order[5])

document.body.style.backgroundImage = 'url(/image/you-dont-know-js.jpg)';
order[4].querySelector('h2 > a').innerHTML = 'Книга 3. This и Прототипы Объектов';
adv.remove();

orderLiSecond[3].after(orderLiSecond[6]);
orderLiSecond[6].after(orderLiSecond[8]);
orderLiSecond[9].after(orderLiSecond[2]);

orderLiFifth[6].before(orderLiFifth[2]);
orderLiFifth[10].before(orderLiFifth[5]);
orderLiFifth[3].before(orderLiFifth[9]);
orderLiFifth[8].before(orderLiFifth[5]);

addLi.innerHTML = 'Глава 8: За пределами ES6';
ulOrder_2.append(addLi);
addLi.after(orderLiBook6[9]);
const order = document.querySelectorAll('.book');
console.log('order: ', order);

order[1].after(order[0]);
order[0].after(order[4]);
order[4].after(order[3]);
order[3].after(order[5])

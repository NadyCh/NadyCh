"use strict";

let link = document.querySelector('.treeFromObj');
let container1 = document.querySelector('.container1');
let container2 = document.querySelector('.container2');


function clearContainer(container) {
  let elem  = container.children[0];
  if (elem) elem.remove();
}

link.onclick = () => {
  clearContainer(container1);
  clearContainer(container2);
  let ul = createTree(container1, data);

  let btn = document.createElement('button');
  btn.classList.add('treeBtn');
  btn.textContent = 'Сосчитать';
  container2.append(btn);

  btn.onclick = () => calcChildrenInList(ul);
};


let data = {
  "Рыбы": {
    "Осетр": {},
    "Лосось": {}
  },

  "Деревья": {
    "Высокие": {
      "Секвойя": {},
      "Дуб": {}
    },
    "Цветы": {
      "Петунья": {},
      "Магнолия": {}
    }
  }
};


function createTree(container, data) {
  let ul = createTreeDom(data);
  container.append(ul);
  return ul;
}

function createTreeDom(obj) {
  if (!Object.keys(obj).length) return;

  let ul = document.createElement('ul');

  for (let key in obj) {
    let li = document.createElement('li');
    li.innerHTML = key;

    let childrenUl = createTreeDom(obj[key]);
    if (childrenUl) {
      li.append(childrenUl);
    }

    ul.append(li);
  }

    return ul;
}

function calcChildrenInList (ul){
  let count = ul.childElementCount;
  let lis = ul.getElementsByTagName('li');

  for (let li of lis) {
    let descendantsCount = li.getElementsByTagName('li').length;
    if (!descendantsCount) continue;

    li.firstChild.data += ' [' + descendantsCount + ']';
  }
};



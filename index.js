const addBtn = document.querySelector('.add_btn');
const inputTodo = document.querySelector('.add_todo');

const createEl = function (tag = 'li', name = 'todo-list__li') {
  const createTag = document.createElement(tag);
  createTag.className = name;
  return createTag;
};

const deleteEl = function (el) {
  const target = el.parentElement;
  target.remove();
};

addBtn.addEventListener('click', () => {
  const addTodo = inputTodo.value;
  inputTodo.value = '';

  // 新しいTodoListを作成する
  const li = createEl();
  li.innerText = `${addTodo}です`;

  // 完了ボタンをクリックしたら発火するイベント
  const completeBtn = createEl('button', 'comp');
  completeBtn.innerText = '完了';
  completeBtn.addEventListener('click', () => {
    // todolistの完了ボタンをクリックしたら完了したTodoに追加する処理
    const completeArea = document.querySelector('.todo-list__complete-area');
    const completeUl = completeArea.querySelector('.todo-list__ul');

    //完了したTodoに追加するDomの生成
    const completeTodo = createEl();
    const returnBtn = createEl('button', 'return');
    returnBtn.innerText = '戻す';
    returnBtn.addEventListener('click', () => {
      const li = createEl();
      li.innerText = `${addTodo}です`;
      inCompleteUl.appendChild(li);
      const completeBtn = createEl('button', 'comp');
      completeBtn.innerText = '完了';
      const deleteBtn = createEl('button', 'delete');
      deleteBtn.innerText = '削除';
      li.appendChild(completeBtn);
      li.appendChild(deleteBtn);
      completeTodo.remove();
    });

    // 「完了したTodo」に作成したDomを格納する
    completeTodo.innerText = `${addTodo}が完了した`;
    completeUl.appendChild(completeTodo);
    completeTodo.appendChild(returnBtn);

    // 未完了のTodoにあるクリックしたTodoListを削除する
    deleteEl(completeBtn);
  });

  const deleteBtn = createEl('button', 'delete');
  deleteBtn.innerText = '削除';
  deleteBtn.addEventListener('click', () => {
    deleteEl(deleteBtn);
  });

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  // 作成したTodoListを未完了のTodoに追加する
  const inCompleteArea = document.querySelector('.todo-list__incomplete-area');
  const inCompleteUl = inCompleteArea.querySelector('.todo-list__ul');
  inCompleteUl.appendChild(li);
});

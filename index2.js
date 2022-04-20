const createEl = function (el = 'li', name = 'todo-list__li') {
  const newEl = document.createElement(el);
  newEl.className = name;
  return newEl;
};

const onClickAdd = () => {
  const inputArea = document.querySelector('.add_todo');
  const inputText = inputArea.value;
  inputArea.value = '';

  // 未完了のTodoのDOM
  const incomp = document.querySelector('.todo-list__incomplete-area');
  const incompUl = incomp.querySelector('.todo-list__ul');

  // 完了したTodoのDom
  const compArea = document.querySelector('.todo-list__complete-area');
  const compUl = compArea.querySelector('.todo-list__ul');

  // li作成
  const li = createEl();
  li.innerText = `${inputText}です。`;

  //完了ボタンの作成
  const completeBtn = createEl('button', 'comp');
  completeBtn.innerText = '完了';

  //削除ボタンの作成
  const deleteBtn = createEl('button', 'delete');
  deleteBtn.innerText = '削除';

  // 戻るボタンの作成
  const returnBtn = createEl('button', 'return');
  returnBtn.innerText = '戻す';

  completeBtn.addEventListener('click', () => {
    // 完了ボタンをクリックしたTodoを「完了したTodo」に追加する為のテンプレートの作成
    const li = createEl();
    li.innerText = `${inputText}が完了した`;

    // 完了したTodoに要素を追加する
    li.appendChild(returnBtn);
    compUl.appendChild(li);

    // 未完了から完了に追加したTodoを削除する
    const delTarget = completeBtn.parentElement;
    delTarget.remove();
  });

  deleteBtn.addEventListener('click', () => {
    // 押された削除ボタンの未完了リストを削除する
    const target = deleteBtn.parentElement;
    // const delTarget = deleteBtn.parentNode;
    // const incomp = document.querySelector('.todo-list__incomplete-area');
    // const incompUl = incomp.querySelector('.todo-list__ul');
    // incompUl.removeChild(delTarget);
    target.remove();
  });

  returnBtn.addEventListener('click', () => {
    li.innerText = `${inputText}です`;
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    incompUl.appendChild(li);
    returnBtn.parentElement.remove();
  });

  // 未完了リストにTodoを追加する
  const inCompleteArea = document.querySelector('.todo-list__incomplete-area');
  const inCompleteUl = inCompleteArea.querySelector('.todo-list__ul');

  // 新しく追加した未完了リストに要素を追加する
  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  inCompleteUl.appendChild(li);
};

const addBtn = document.querySelector('.add_btn');
addBtn.addEventListener('click', () => onClickAdd());

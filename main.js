// class ClickHandler {
//   constructor(el) {
//     this.el = document.querySelector(el);
//     this.complete = document.querySelector('.todo-list__complete-area');
//     this.addText = document.querySelector('.add_text');
//     this.uncompleteArea = document.querySelector('.todo-list__uncomplete-area');
//     this.completeArea = document.querySelector('.todo-list__complete-area');
//     this.todoUl = document.querySelector('.todo-list__ul');
//     this._returnTodo();
//   }

//   _clickEvent(demo) {
//     return this.el.addEventListener('click', demo);
//   }

//   _cloneNode() {
//     let addText = this.addText.value;
//     let cloneTag = this.todoUl.cloneNode(true);
//     let cloneList = cloneTag.querySelector('.todo-list__li');
//     let cloneBtn = cloneTag.querySelector('.comp');
//     cloneList.textContent = addText;
//     return cloneTag;
//   }

//   _addTodo() {
//     this._clickEvent(() => {
//       let createTodo = this._cloneNode();
//       // let addText = this.addText.value;
//       // let cloneTag = this.todoUl.cloneNode(true);
//       // let cloneList = cloneTag.querySelector('.todo-list__li');
//       // cloneList.textContent = addText;
//       this.uncompleteArea.appendChild(createTodo);
//       this._initTextArea();

//       this._uncompleteArea(createTodo);
//     });
//   }

//   _uncompleteArea(el) {
//     let completeBtn = el.querySelector('.comp');
//     let deleteBtn = el.querySelector('.delete');

//     completeBtn.addEventListener('click', this._completeArea);
//     // this._clickEvent('.comp', this._completeArea);

//     // let newTodo = this._addTodo();
//     // console.log(newTodo);
//     // let newCopleteBTN = document.querySelector('.comp');
//     // cloneBtn.addEventListener('click', () => {
//     //   console.log('clicked!');
//     // });
//     // const completed = () => {
//     //   console.log(this.el.parentElement);
//     //   let text = this.el.parentElement.innerHTML;

//     //   console.log(text);
//     // };
//     // return this._clickEvent(completed);
//   }

//   _completeArea() {
//     const compArea = document.querySelector('.todo-list__complete-area');
//     const ul = document.createElement('ul');
//     const li = document.createElement('li');
//     const btn = document.createElement('button');
//     compArea.appendChild(ul);
//     ul.appendChild(li);
//     ul.appendChild(btn);
//     ul.classList.add('todo-list__ul');
//     li.classList.add('todo-list__li');
//     btn.classList.add('return');
//     btn.innerText = '戻す';

//     this.parentElement.remove();
//     return this;
//   }

//   _initTextArea() {
//     this.addText.value = '';
//   }

//   _returnTodo() {
//     const completeArea = document.querySelector('.todo-list__complete-area');
//     // console.log(completeArea);
//     const returnBtn = document.querySelector('.return');
//     returnBtn.addEventListener('click', () => {
//       console.log('clicked');
//     });
//   }
// }

// const addText = new ClickHandler('.add_btn');
// addText._addTodo();

// const uncomp = new ClickHandler('.comp');
// // uncomp._uncompleteArea();

class TodoList {
  constructor(btn) {
    this.btn = document.querySelector(btn);
    this.inputArea = document.querySelector('.add_todo');
    this.incompleteArea = document.querySelector('.todo-list__incomplete-area');
    this.completeArea = document.querySelector('.todo-list__complete-area');
    this._createTodo();
    // this._complete();
    // this._completeTodo();
    // this._deleteTodo();
    // this._returnTodo()
  }

  _createTodo() {
    this.btn.addEventListener('click', () => {
      // 新しいTodoListを作る
      const li = document.createElement('li');
      li.className = 'todo-list__li';
      const completeBtn = document.createElement('button');
      completeBtn.innerText = '完了';
      completeBtn.className = 'comp';
      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = '削除';
      deleteBtn.className = 'delete';

      // 追加したTodoリストを未完了のTodoに格納する
      const target = this.incompleteArea.querySelector('.todo-list__ul');

      //追加ボタンをクリックしたら入力したテキストを取得する
      const addTodoText = this.inputArea.value;
      const addTodoList = target.appendChild(li);
      addTodoList.innerText = addTodoText;
      addTodoList.appendChild(completeBtn);
      addTodoList.appendChild(deleteBtn);
      this.inputArea.value = '';
      this._complete(addTodoText);
    });
  }

  _complete(text) {
    const completeBtns = document.querySelectorAll('.comp');
    completeBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const li = document.createElement('li');
        li.className = 'todo-list__li';
        li.innerText = text;
        const returnBtn = document.createElement('button');
        returnBtn.className = 'return';
        returnBtn.innerText = '戻す';
        const compUl = this.completeArea.querySelector('.todo-list__ul');
        compUl.appendChild(li);
        li.appendChild(returnBtn);

        const completedTodo = btn.parentElement;
        text = '';
        completedTodo.remove();
      });
    });
    // completeBtn.addEventListener('click', () => {
    //   console.log('クリックしました。');
    // });
  }
  // //次に未完了のTODOにlistを追加して中身をインプットエリアで入力したテキストを追加する。
  // const li = document.createElement('li');
  // li.classList.add('demo');
  // const div = document.createElement('div');
  // const btn = document.createElement('button');
  // div.appendChild(btn);
}

const testTodo = new TodoList('.add_btn');
// testTodo._createTodo();
// const aaa = new TodoList('.comp');
// aaa._complete();
// testTodo._addTodo();
// testTodo._test();

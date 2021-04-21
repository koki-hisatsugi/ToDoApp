import "./styles.css";

const onClickAdd = () => {
  //  テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncomplateList(inputText);
};

//未完了リストから指定のリストを削除
const deleteFromIncomplateList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncomplateList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  //liタグを生成
  const li = document.createElement("li");
  li.innerText = text;

  //button(完了)の生成
  const complateButton = document.createElement("button");
  complateButton.innerText = "完了";
  complateButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除する
    deleteFromIncomplateList(complateButton.parentNode);

    //完了リストに追加する要素
    const addTarget = complateButton.parentNode;

    //TODO内容Textを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    //buttonタグの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complate-list").removeChild(deleteTarget);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncomplateList(text);
    });

    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complate-list").appendChild(addTarget);
  });

  //button(削除)の生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除する
    deleteFromIncomplateList(deleteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(complateButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplate-list").appendChild(div);

  //console.log(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

const t1 = document.getElementById("btn1");
const t2 = document.getElementById("btn2");
const t3 = document.getElementById("btn3");
const t4 = document.getElementById("btn4");
const t5 = document.getElementById("btn5");
const t6 = document.getElementById("btn6");
const t7 = document.getElementById("btn7");
const t8 = document.getElementById("btn8");
const t9 = document.getElementById("btn9");
const res = document.getElementById("result");
function clickBtn() {
  let cnt = 0;
  t1.addEventListener("click", function () {
    if (cnt % 2 == 0) {
      t1.innerText = "O";
      res.innerText = "O";
      cnt++;
    } else {
      t1.textContent = "X";
      cnt++;
    }
  });
  t2.addEventListener("click", function () {
    if (cnt % 2 == 0) {
      t2.innerText = "O";
      cnt++;
    } else {
      t2.innerText = "X";
      cnt++;
    }
    if (t1.innerText == "O") {
      res.innerText == "gg";
    }
  });
  t3.addEventListener("click", function () {
    if (cnt % 2 == 0) {
      t3.innerText = "O";
      cnt++;
    } else {
      t3.innerText = "X";
      cnt++;
    }
    if ((t1.innerText == t2.innerText) == t3.innerText) {
      res.innerText("승리");
    }
  });
  t4.addEventListener("click", function () {
    if (cnt % 2 == 0) {
      t4.innerText = "O";
      cnt++;
    } else {
      t4.innerText = "X";
      cnt++;
    }
  });
  t5.addEventListener("click", function () {
    if (cnt % 2 == 0) {
      t5.innerText = "O";
      cnt++;
    } else {
      t5.innerText = "X";
      cnt++;
    }
  });
  t6.addEventListener("click", function () {
    if (cnt % 2 == 0) {
      t6.innerText = "O";
      cnt++;
    } else {
      t6.innerText = "X";
      cnt++;
    }
  });
  t7.addEventListener("click", function () {
    if (cnt % 2 == 0) {
      t7.innerText = "O";
      cnt++;
    } else {
      t7.innerText = "X";
      cnt++;
    }
  });

  t8.addEventListener("click", function () {
    if (cnt % 2 == 0) {
      t8.innerText = "O";
      cnt++;
    } else {
      t8.innerText = "X";
      cnt++;
    }
  });
  t9.addEventListener("click", function () {
    if (cnt % 2 == 0) {
      t9.innerText = "O";
      cnt++;
    } else {
      t9.innerText = "X";
      cnt++;
    }
  });
}

function textRes() {
  clickBtn();
  if (t1.textContent == t2.textContent) {
    res.innerText("승리");
  }
}
textRes();
// while (true) {
// }

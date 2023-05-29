class Member {
  id;
  password;
  name;
  constructor(id, password, name) {
    this.id = id;
    this.password = password;
    this.name = name;
  }
  toString() {
    return this.id + this.password + this.name;
  }
}

class MemberMenu {
  mainMenu() {
    let choice = prompt(
      "=====***** 메인메뉴 *****=====\n1. 회원가입\n2. 로그인\n3. 같은 이름 회원 찾기\n9. 종료\n\n메뉴 번호 입력 : "
    );
    switch (choice) {
      case "1":
        this.joinMembership();
        this.mainMenu();
        break;
      case "2":
        this.login();
        this.mainMenu();
        break;
      case "3":
        this.sameName();
        this.mainMenu();
        break;
      case "9":
        return;
    }
  }
  joinMembership() {
    let id = prompt("아이디 : ");
    let pw = prompt("비밀번호 : ");
    let name1 = prompt("이름 : ");
    let m1 = new Member(id, pw, name1);
    member_arr.push(m1);
    alert(member_arr);
    alert("성공적으로 회원가입 완료하였습니다.");
  }
  login() {
    let id = prompt("아이디 : ");
    let pw = prompt("비밀번호 : ");
    for (let i = 0; i < member_arr.length; i++) {
      if (id == member_arr[i].id) {
        if (pw == member_arr[i].password) {
          alert(member_arr[i].name + "님, 환영합니다!");
          this.memberMenu();
        } else {
          alert("비밀번호가 틀림");
        }
      } else {
        alert("없는 id");
      }
    }
  }
  memberMenu() {
    let choice2 = prompt(
      "=====***** 회원 메뉴 *****=====\n1. 비밀번호 바꾸기\n2. 이름 바꾸기\n3. 로그아웃\n\n메뉴 번호 입력 : "
    );
    switch (choice2) {
      case "1":
        this.changePassword();
        this.memberMenu();
        break;
      case "2":
        this.changeName();
        this.memberMenu();
        break;
      case "3":
        this.mainMenu();
        this.memberMenu();
        break;
    }
  }
  changePassword() {
    let id = prompt("아이디 : ");
    let org_pw = prompt("현재 비밀번호 : ");
    let new_pw = prompt("새로운 비밀번호 : ");

    for (let i = 0; i < member_arr.length; i++) {
      if (id == member_arr[i].id) {
        if (org_pw == member_arr[i].password) {
          member_arr[i].password = new_pw;
          alert("비밀번호 변경에 성공했습니다.");
        }
      }
    }
  }
  changeName() {
    let id = prompt("아이디 : ");
    let pw = prompt("비밀번호 : ");
    let new_name = prompt("새로운 이름 : ");

    for (let i = 0; i < member_arr.length; i++) {
      if (id == member_arr[i].id) {
        if (pw == member_arr[i].password) {
          member_arr[i].name = new_name;
          alert("이름 변경에 성공했습니다.");
        }
      }
    }
  }
  sameName() {}
}
let member_arr = [];
let same_name = [];
const main = new MemberMenu();
main.mainMenu();

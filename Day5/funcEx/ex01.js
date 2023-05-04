// function cal_time(time) {
//   if (time < 24 * 60 * 60) {
//     let hour = Math.floor(time / 3600);
//     time -= hour * 3600;
//     let min = Math.floor(time / 60);
//     time -= min * 60;
//     let sec = time;
//     alert(hour + "시 " + min + "분 " + sec + " 초 입니다");
//   } else {
//     alert("입력 시간이 하루를 초과합니다.");
//   }
// }

// let time = prompt("초 입력:");
// cal_time(time);

// function productPrice(totalPrice) {
//   return (totalPrice / 11) * 10;
// }
// function tax(totalPrice) {
//   return totalPrice / 11;
// }

// let totalPrice = prompt("소비자가 입력(원):");
// alert(
//   "제품가격은" +
//     productPrice(totalPrice) +
//     "원, 부가가치세는 " +
//     tax(totalPrice) +
//     " 원입니다."
// );

// function periodDiscount(contactPrice, period) {
//   if (period > 12) {
//     return (contactPrice * 20) / 100;
//   } else if (period > 6) {
//     return (contactPrice * 10) / 100;
//   } else {
//     return (contactPrice * 0) / 100;
//   }
// }
// function creditCardDiscount(contactPrice, cardCode) {
//   if (cardCode == 13) {
//     return (contactPrice * 12) / 100;
//   } else if (cardCode == 12) {
//     return (contactPrice * 8) / 100;
//   } else {
//     return (contactPrice * 5) / 100;
//   }
// }
// let contactPrice = prompt("계약 금액 입력:");
// let period = prompt("사용 개월 수 입력:");
// let cardCode = prompt("카드 코드 입력:");

// let finalPrice =
//   contactPrice -
//   periodDiscount(contactPrice, period) -
//   creditCardDiscount(contactPrice, cardCode);
// alert("최종 요금은 " + finalPrice + "원 입니다.");

function goDownFloor(now, target) {
  for (let i = now; i >= target; i--) {
    console.log("현재 층은 " + i + " 입니다.");
    if (i == target) {
      console.log(target + " 층에 도착하였습니다. 안녕히 가세요.");
    }
  }
}

function goUpFloor(now, target) {
  for (let i = now; i <= target; i++) {
    console.log("현재 층은 " + i + " 입니다.");
    if (i == target) {
      console.log(i + " 층에 도착하였습니다. 안녕히 가세요.");
    }
  }
}
let inputLocation = prompt("가고자 하는 층 입력:");
let nowLocation = prompt("현재 위치 입력:");

if (inputLocation == nowLocation || inputLocation < 1 || inputLocation > 6) {
  alert("다른 층(1-6)을 눌러주세요");
} else {
  if (nowLocation > inputLocation) {
    goDownFloor(nowLocation, inputLocation);
  } else {
    goUpFloor(nowLocation, inputLocation);
  }
}

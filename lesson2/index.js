// Tao bien dieu kien cho vong lap while
let flag = true;
while (flag) {
  //  yeu cau nguoi dung chon tinh nang
  let key = parseInt(
    prompt(" Nhap 1 de su dung tinh nang \n nhap 2 de thoat chuong trinh ")
  );
  switch (key) {
    case 1:
      let day = parseInt(prompt("Nhap vao ngay: "));
      let month = parseInt(prompt("Nhap vao thang: "));
      let year = parseInt(prompt("Nhap vao nam: "));
      let input;
      let arrMonth = [1, 3, 5, 7, 8, 10, 12]; // tao array cho nhung thang co 31 ngay
      if ( month < 1 || month > 12 || day < 1 || day > 31) {
        alert('ngay thang nam khong hop le')
      } else if (
        (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)
      ) {
          // check xem thang co thuoc thang co 31 ngay
          if (arrMonth.includes(month)) {
            // check xem thang co phai la thang 12
            if (month === 12) {
                // check ngay cuoi nam
              if (day === 31) {
                input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la 1/1/${
                  year + 1
                }`;
                alert(input);
              } else {
                input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la ${
                  day + 1
                }/${month}/${year} `;
                alert(input);
              }
              //check ngay cuoi thang
            } else if (day === 31) {
              input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la 1/${month + 1 }/${year} `;
              alert(input);
            } else {
              input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la ${day + 1}/${month}/${year} `;
              alert(input);
            }
          } else {
            // check thang 2 
            if (month === 2) {
              if (day > 29) {
                alert("ngay khong hop le");
              } else if (day === 29) {
                input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la 1/3/${year}`;
                alert(input);
              } else {
              input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la ${day + 1}/${month}/${year} `;
                alert(input)
              }
            } else {
                // check nhung thang 30 ngay
                // check ngay khong hop le
                if (day > 30) {
                    alert('Ngay khong hop le')
                    // check ngay cuoi thang
                } else if (day === 30) {
                input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la 1/${month +1}/${year}`;
                alert(input);
                } else {
                input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la ${day+1}/${month}/${year}`;
                    alert(input)
                }
            }
          }
        } else {
             // check xem thang co thuoc thang co 31 ngay
          if (arrMonth.includes(month)) {
            // check xem thang co phai la thang 12
            if (month === 12) {
                // check ngay cuoi nam
              if (day === 31) {
                input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la 1/1/${
                  year + 1
                }`;
                alert(input);
              } else {
                input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la ${
                  day + 1
                }/${month}/${year} `;
                alert(input);
              }
              //check ngay cuoi thang
            } else if (day === 31) {
              input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la 1/${month + 1 }/${year} `;
              alert(input);
            } else {
              input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la ${day + 1}/${month}/${year} `;
              alert(input);
            }
          } else {
            // check thang 2 
            if (month === 2) {
              if (day > 28) {
                alert("ngay khong hop le");
              } else if (day === 28) {
                input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la 1/3/${year}`;
                alert(input);
              } else {
              input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la ${day + 1}/${month}/${year} `;
                alert(input)
              }
            } else {
                // check nhung thang 30 ngay
                // check ngay khong hop le
                if (day > 30) {
                    alert('Ngay khong hop le')
                    // check ngay cuoi thang
                } else if (day === 30) {
                input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la 1/${month +1}/${year}`;
                alert(input);
                } else {
                input = `Ngay hom nay la ${day}/${month}/${year}, ngay mai la ${day+1}/${month}/${year}`;
                    alert(input)
                }
            }
          }
        }
      break;

    case 2:
      flag = false;
      break;

    // check truong hop nguoi dung nhap value khac
    default:
      alert("Khong ton tai tinh nang nay");
      break;
  }
}


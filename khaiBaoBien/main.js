/*
 * ? Var let const khac gi nhau?
 * Var = variant
 * 1. Có thể khai báo lại.
 * 2. Có thể gán lại
 * 3. Phạm vi hoạt động: global-scope, function-scope
 * 4. Hỗ trợ hoisting
 */
console.log(myInfor);
var myInfor = "Nguyen Hoang";
console.log(myInfor);

// hoisting: var myInfor, myInfor = "Nguyen Hoang"
var name = "hoang";
console.log(name);

var name = "iphone";
console.log(name);

if (true) {
  var i = 1;
}
console.log(i);

function doiTien(usd) {
  var tygia = 25000;
  return tygia * usd;
}

// console.log(tygia);

doiTien(2);
console.log(i);

/*
 * let
 * 1. Không khai báo lại.
 * 2. Có thể gán lại
 * 3. Phạm vi hoạt động: function-scope, block-scope
 * 4. Ko hỗ trợ hoisting
 */

/*
 * const
 * 1. Không khai báo lại.
 * 2. Không thể gán lại
 * 3. Phạm vi hoạt động: function-scope, block-scope
 * 4. Ko hỗ trợ hoisting
 */

{
  {
    {
      {
        // console.log(mySchools);
        let mySchools = "fpt poly";
      }
    }
  }
}

console.log(mySchools);

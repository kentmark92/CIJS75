/*
    Câu 1: var khai báo một biến có phạm vi trong block?
        Var có tính chất hoisting. Dù khai báo ở đâu thì biến đều được đưa lên đầu scope
        ĐÁP ÁN: FALSE
    Câu 2: const khai báo một biến có phạm vi trong block?
        const phụ thuộc vào phạm vi khởi tạo nên chỉ có giá trị trong block
        ĐÁP ÁN: TRUE
    Câu 3: let khai báo một biến có phạm vi trong block?
        let phụ thuộc vào phạm vi khởi tạo nên chỉ có giá trị trong block
        ĐÁP ÁN: TRUE
    Câu 4: Giá trị sau cùng của obj trong ví dụ sau là gì?
        const obj = { foo: 1 }
        obj.bar = 2
        ĐÁP ÁN: 3. {foo: 1, bar: 2}
    Câu 5: Kết quả của ví dụ sau đây là gì?
        const speed = 'quick'
        `The ${speed} brown fox jumps over the lazy dog.`
        ĐÁP ÁN:  4. The quick brown fox jumps over the lazy dog.
    Câu 6: Giá trị của câu lệnh obj[123] trong ví dụ sau: 
        const obj = {
        }
        ĐÁP ÁN: 1.undefined
    Câu 7: Giá trị của array trong ví dụ sau: 
        const array = [1, 2, 3]
        const extension = [4, 5, 6]
        array = [...extension, ...array]
        Do array đã khai báo biến const trước rồi nên không thể gán giá trị cho nó được
        ĐÁP ÁN: 4. ERROR
    Câu 8: Giá trị của a trong ví dụ sau? 
        function mystery(...params) {
            return params
        }
        let a = mystery(1, 23, 4);
        ĐÁP ÁN: 2. [1, 23, 4]
    Câu 9: Giá trị của biểu thức sau? 
        [...[..."..."]].length
        ĐÁP ÁN: 2.6
    Câu 10: Giá trị của a và b với ví dụ sau? 
        let a = 12, b = 3;
        [a, b] = [b, a];
        ĐÁP ÁN: 2. a=3 b=12
    Câu 11 Giá trị của obj sau trong ví dụ sau? 
        const obj = {
            name: "MindX"
        }
        const sayHello = (x) => {
            let {name} = x
        name = "Code Intensive"
        }
        sayHellO(obj)
        ĐÁP ÁN: 3. ERROR
    Câu 12: Giá trị của biểu arr trong ví dụ sau? 
        let arr = [1, 2, 3, 4, 5]
        arr.map(item => {
        if (item % 2 === 0) {
                return item;
        }
            return item * 2;
        })
        Giải thích:
        Hàm map sẽ thực hiện 1 công việc giống nhau đối với tất cả item trong 1 mảng. Ở đây là:
         + Nếu các item chia hết cho 2 thì giữ nguyên item đó
         + Nếu các item không chia hết cho 2 thì lấy item đó * 2
         ĐÁP ÁN: 2. [2,2,6,4,10]
    Câu 13: Giá trị của total trong ví dụ sau?  
        const arr = [1, 2, 3, 4, 5]
        B1: const total = arr.filter(item => item % 2 === 0)
        B2: .reduce((value, item) => value + item , 10)
        Giải thích:
        B1: total sẽ được trả ra 1 mảng với các item từ arr thỏa mãn điều kiện chia hết cho 2. => total = [2,4]
        B2:  Hàm reduce trả ra kết quả bằng tổng các item trong mảng total + initial value(10)
        ĐÁP ÁN: 3. 16
*/

// PROBLEM 1
const users = [
  { name: "Angelina Jolie", age: 8 },
  { name: "Eric Jones", age: 2 },
  { name: "Paris Hilton", age: 5 },
  { name: "Kayne West", age: 16 },
  { name: "Bob Ziroll", age: 100 },
];
function spreadHTML(result = []) {
  let spread = result.map((users) => {
    return `<div><h1>${users.name}</h1><h2>${users.age}</h2></div>`;
  });
  return spread;
}
console.log(spreadHTML(users));
// // PROBLEM 2
const students = [
  { name: "Lan", gender: "female" },
  { name: "Linh", gender: "female" },
  { name: "Trung", gender: "male" },
  { name: "Peter", gender: "other" },
  { name: "Truong", gender: "male" },
  { name: "Dung", gender: "other" },
];
function filterFemale(resultNotFemale = []) {
  return (resultNotFemale = students.filter(
    (item) => item.gender !== `female`
  ));
}
console.log(filterFemale(students));
// // PROBLEM 3
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const sortStr = (str) => {
  let newStr = str.split("").sort();
  let result = "";
  for (let i = 0; i < newStr.length; i++) {
    result += newStr[i];
  }
  return result;
};

function anagrams(list = []) {
  if (list.length == 1) return [[list[0]]];
  let memoization = {};
  for (let i = 0; i < list.length; i++) {
    let temp = sortStr(list[i]);
    if (temp in memoization) {
      memoization[temp].push(list[i]);
    } else {
      memoization[temp] = [list[i]];
    }
  }
  return Object.values(memoization);
}
console.log(anagrams(strs));

// PROBLEM 4
let nums = [2, 2, 1];
function singleNumber(arr = []) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    if (key in obj) {
      obj[key] = obj[key] + 1;
    } else {
      obj[key] = 1;
    }
  }

  for (let key in obj) {
    if (obj[key] == 1) return key;
  }
}
console.log(singleNumber(nums));

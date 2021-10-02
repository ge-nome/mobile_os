document.querySelector('div.container').style.height=screen.height
var ls = document.getElementById('img')
var kp = document.getElementById('none')
var kp2 = document.getElementById('none2')
var back = document.getElementById('back')
var go = document.getElementById('go')
var bak = document.querySelector("div.none")
var nums = document.querySelectorAll("td.digits")
var input = document.getElementById("pw")
for (let index = 0; index < nums.length; index++) {
    nums[index].addEventListener('click', function () {
        if (input.value.length <= 3 ) {nums[index].classList.add('flashing');input.value += nums[index].innerText}
    })
}
ls.addEventListener('dblclick', function() {
    kp.style.display="block";
})
back.addEventListener('click', function() {
    if (input.value.length == 0 || input.value.length == 1) {input.value = input.value.slice(0, input.value.length - 1); console.log(bak);kp.style.display=" none";}
    else{input.value = input.value.slice(0, input.value.length - 1)}  
})
go.addEventListener('click', function() {
    if (input.value.length == 4) {kp2.style.display="block"}
    else{}  
})

let n = 5
// j = n*(n-1)*(n-2)*(n-3)*(n-4)
let j = 1
for (let index = 1; index <= n; index++) {
    j *= index
    
    // console.log(n=n-index)
    // console.log(n*(n-index))
    
}console.log(j)

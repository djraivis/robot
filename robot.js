const robot = document.querySelector('.robot')

//Challenge: Make the robot move when you click it. Don't forget to share you robot on
//Discord! Feel free to play around with the styling before doing so!

//declare a variable
let number = 0

function moveRobot() {
    //add code here
    number += 50
    console.log(number)
    robot.style.left = number + 'px'
    robot.style.bottom = number + 'px'
    robot.style.right = number + 'px'
    robot.style.top = number + 'px'
}
robot.addEventListener('click', moveRobot)

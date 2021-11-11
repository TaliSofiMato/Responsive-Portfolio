const balloon= document.getElementById('air-balloon')
const cloudOne= document.getElementById('cloud-one')
const cloudTwo= document.getElementById('cloud-two')
const cloudThree= document.getElementById('cloud-three')
const cloudFour= document.getElementById('cloud-four')
const cloudFive= document.getElementById('cloud-five')
const javaScript= document.getElementById('javascript')
const react= document.getElementById('react')
const graphql= document.getElementById('graphql')

function move() {
    const incrementer = window.scrollY

    balloon.style.bottom = 10 + incrementer * 0.1 + '%'
    cloudOne.style.bottom = 40 + incrementer * 0.12 + '%'
    cloudOne.style.marginLeft = 70 + incrementer * 0.1 + '%'
    cloudTwo.style.bottom = 80 + incrementer * 0.14 + '%'
    cloudTwo.style.marginLeft = 60 + incrementer * 0.15 + '%'
    cloudThree.style.bottom = 60 + incrementer * 0.1 + '%'
    cloudThree.style.marginRight = 80 + incrementer * 0.12 + '%'
    cloudFour.style.bottom = 70 + incrementer * 0.16 + '%'
    cloudFour.style.marginRight = 40 + incrementer * 0.15 + '%'
    cloudFive.style.bottom = 60 + incrementer * 0.2 + '%'
    cloudFive.style.marginLeft = 40 + incrementer * 0.16 + '%'
    javaScript.style.marginRight = 55 + incrementer * 2.2 + '%'
    react.style.marginRight = 43 + incrementer * 1.3 + '%'
    graphql.style.marginRight = 31 + incrementer * 1 + '%'

}

window.addEventListener('scroll',move)

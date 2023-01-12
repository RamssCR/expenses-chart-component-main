import data from './data.json' assert {type: 'json'};

let chartBars = document.querySelector('.chart-bars');
let vals = []

data.forEach(element => {
    vals.push(element.amount);
    let object = `
    <div class="bar-values">
        <div class="label">$${element.amount}</div>
        <div class="day">${element.day}</div>
    </div>`

    chartBars.innerHTML += object;
})

let maxvalalt = 11;
let maxValue = Math.max(...vals);

let bars = document.querySelectorAll('.bar-values')
bars = [...bars];


bars.forEach(bar => {

    let newValue = parseFloat(bar.childNodes[1].innerText.slice(1));

    let dynamicHeight = (newValue * maxvalalt) / maxValue;
    bar.style.height = `${dynamicHeight}em`

    if (newValue == maxValue) {
        bar.style.backgroundColor = '#76b5bc'
    }

    bar.addEventListener('mouseover', event =>{
        let label = event.target.children[0];
        label.style.display = 'block'
    })

    bar.addEventListener('mouseout', event =>{
        let label = event.target.children[0];
        label.style.display = 'none'
    })
})
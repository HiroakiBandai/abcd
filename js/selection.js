  
let arraySelection = [];
let result = document.getElementsByClassName('preResult')[0];
console.log(result)

function clearValueSelecion() {
    arraySelection = [];
    result.innerHTML = '';
    document.getElementsByClassName('result')[0].innerHTML = '';
}

function addValueSelecion() {
    result = document.getElementsByClassName('preResult')[0];

    let data = parseInt(document.getElementsByClassName('inputValue')[0].value.trim()
    );
    arraySelection.push(data);

    // arraySelection = [...arraySelection, data]; spread syntax by ES6
    document.getElementsByClassName('inputValue')[0].value = '';
    result.innerHTML = arraySelection.toString();
}

function executeSelectionSort() {
    if (arraySelection.length > 0) {
        // selection_sort(arraySelection);
        //Loop till the second last element
        for (let i = 0; i < arraySelection.length - 1; i++) {

            //Loop after the i till the last element
            for (let j = i + 1; j < arraySelection.length; j++) {

                //if jth element is less than the ith element then swap
                //change < to > for sorting in descending order
                if (arraySelection[j] < arraySelection[i]) {
                    let temp = arraySelection[i];
                    arraySelection[i] = arraySelection[j];
                    arraySelection[j] = temp;
                }

            }

        }

        document.getElementsByClassName('result')[0].innerHTML = arraySelection.toString();
    } else {
        alert('there are no data to be sorted'
        )
    }
}

// document.querySelector('.banner-btn').addEventListener('click', () => {
//     document.querySelector('.wrapper3').style.display = 'none';
//     document.querySelector('.flow_chart3_1').style.display = 'block';
// });
// document.querySelector('.x-btn').addEventListener('click', () => {
//     document.querySelector('.wrapper3').style.display = 'block';
//     document.querySelector('.flow_chart3_1').style.display = 'none';
// });
/**
 * Implement a
 function that receives two IPv4 addresses, and returns the number of addresses between them(including the first one, excluding the last one).

 All inputs will be valid IPv4 addresses in the form of strings.The last address will always be greater than the first one.

Examples
ipsBetween("10.0.0.0", "10.0.0.50") === 50
ipsBetween("10.0.0.0", "10.0.1.0") === 256
ipsBetween("20.0.0.10", "20.0.1.0") === 246
 */

function ipsBetween(start, end) {
    let startArr = start.split('.')
    let endArr = end.split('.')

    let ipDiff = []

    for(let i = 0; i < 4; i++){
        let total = Number(endArr[i]) - Number(startArr[i])
        ipCount.push(total)

        switch(i) {
            case 0:
                
            case 1:
            case 2:
            case 3:
        }
    }



    console.log(ipDiff)
}

ipsBetween("10.0.0.0", "10.0.0.50")

// [1023-768] [767-512] [511-256] [255]
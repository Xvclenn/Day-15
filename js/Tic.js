let tic = [["*","*","*"],["*","*","*"],["*","*","*"]]
let output = ""
// console.log(tic)

for (let i = 0; i < tic.length; i++)
{
    for (let j = 0; j < tic[i].length; j++)
    {
        output += ""
        output = output + " | " + tic[i][j] + " | "
        if (j == tic[i].length - 1) {
            output = output + "\n"
        }
    }
}

console.log(output)
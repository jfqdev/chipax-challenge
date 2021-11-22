const fs = require('fs');
const {stringChangeColor: clr} = require('../utils/stringChangeColor')

function outputHandler(solution, rootDirname, selectedChallenge){
    try{
        //Write Output file.
        challengeJSON = JSON.stringify(solution,null,4);
        fs.writeFileSync(rootDirname + '/challengeSolution/solution.json', challengeJSON);        
        
        //Log Response.
        if(selectedChallenge === 'both'){
            logCharCounterSolution(solution[0])
            logEpisodeLocationsSolution(solution[1])
            console.log(`${clr('Successfully solved Chipax Challenge','_')}`)
            console.log(`Char Counter Execution time: ${clr(solution[0].time,'cy')}`)
            console.log(`Episode Location Execution Time: ${clr(solution[1].time,'cy')}` + '\n')

        }else if (selectedChallenge === 'charCounter' ){
            logCharCounterSolution(solution[0])
            console.log(`${clr('Successfully solved Chipax Challenge','_')}`)
            console.log(`Char Counter Execution time: ${clr(solution[0].time,'cy')}`)
        }else{
            logEpisodeLocationsSolution(solution[0])
            console.log(`${clr('Successfully solved Chipax Challenge','_')}`)
            console.log(`Episode Location Execution Time: ${clr(solution[0].time,'cy')}` + '\n')
        }

        console.log(`${clr('Scroll up','g')} to see answer logged in console`)
        if(process.platform.substr(0,3)=== 'win'){
            console.log(`Or just find ${clr('json output','b')} in ${clr(rootDirname + '\\challengeSolution\\solution.json','b')}` +'\n')
        }else{
            console.log(`Or just find ${clr('json output','b')} in ${clr(rootDirname + '/challengeSolution/solution.json','b')}` +'\n')
        }

    }
    catch(err){
        console.log('Something went wrong, couldn\'t solve challenge :( ')
        console.log(err)
    }

}

function logCharCounterSolution(solution){
    console.log(`${clr('Char Counter Solution','_')}`)
    solution.results.map(res=>{
        console.log(`"${clr(res.char,'g')}" was found ${clr(res.count,'cy')} times iterating over ${clr(res.resource,'g')} resource at "${clr('name','cy')}" property ` )
    })

}

function logEpisodeLocationsSolution(solution){

    console.log("\n" + `${clr('Episode Locations Solution','_')}`)
    solution.results.map(obj=>{
        console.log(`Among the characters in ${clr(obj.episode,'cy')} can be found ${clr(obj.locations.length,'cy')}${obj.locations.length<=9? " ":""} different origin locations:`)
        console.log(`${clr(obj.locations,'g')}` + '\n')
    })

}

function changeStringColor(){

}

module.exports={
    outputHandler
}
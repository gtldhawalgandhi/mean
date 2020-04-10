import rf from './lib'

// Async await ?????

async function readMyFile(filename){
try {
        const data = await rf(filename)
        console.log(data)
} catch (err) {
    console.log(`Error while reading file: ${err}`)
}

}
// const dir = __dirname;
// Read from env variables
const dir = process.env.dir
// console.log(dir+ '/package.json')
readMyFile(`${dir}/package.json`)
// readMyFile(dir + '/package.json')
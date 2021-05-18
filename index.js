require('dotenv').config()
const fetch = require('node-fetch')
const FormData=require('form-data')
let API_KEY=process.env.API_KEY
let url=process.env.URL
let user=process.env.USER_NAME

async function GETemptyTitle(){

try {

    let getBKRJSON=await fetch(`${url}/u/${user}.json`, 
    {
        method: 'GET', 
        headers: { "Api-Key": `${API_KEY}`, "Api-Username": `${user}`} }).then(response=>{if(response.ok){return response.json()} })
    
    if(getBKRJSON.user.title===''){
        console.log('Title is empty\nAll is well...')
        return true
    } else {
        console.log(`Title length: ${getBKRJSON.user.title.length}\nTitle not empty, those sneaky fuckers....\n\n\n\n`)
        return false
    //! PUT request comes here
    }

} catch (error) {
    console.log(error)
}
}

async function PUTemptyTitle(){
    try {
        let data= new FormData
        data.append('title','')
        let putBKRJSON=await fetch(`${url}/u/${user}.json`, 
        {
            method: 'PUT', 
            headers: {
                 "Api-Key": `${API_KEY}`, "Api-Username": `${user}`
        },
        body:data }).then(response=>{if(response.ok){return response.json()}})
    if(putBKRJSON.user.title.length!=0){
        console.log(`Title still not empty :(`)
        return false
    } else {
        console.log(`emptied title, fuck'em motherfuckers`)
        return true
    }
    } catch (error) {
        console.log(error)    
    }
}


GETemptyTitle()

PUTemptyTitle()

// const getTitle= async ()=> await GETemptyTitle()
// const putTitle= async () =>await PUTemptyTitle()

// while(!getTitle()){
//     putTitle()
// }
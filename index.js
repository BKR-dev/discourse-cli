require('dotenv').config()
const fetch = require('node-fetch')

let API_KEY=process.env.API_KEY
let url=process.env.URL
let user=process.env.USER_NAME
// console.log(`API: ${API_KEY}\nURL: ${url}\nUser: ${user}`)
async function GETemptyTitle(){

try {

    let getBKRJSON=await fetch(`${url}/u/${user}.json`, {method: 'GET', headers: { "Api-Key": `${API_KEY}`, "Api-Username": `${user}`}, contentType: "application/json", dataType: 'json' }).then(response=>{if(response.ok){return response.json()} })
    
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
        let data=''
        let putBKRJSON=await fetch(`${url}/u/${user}.json`, 
        {
            method: 'PUT', 
            headers: {
                 "Api-Key": `${API_KEY}`, "Api-Username": `${user}`
        },body:data , contentType: "application/json", dataType: 'json' }).then(response=>{if(response.ok){return response.json()}})
    if(putBKRJSON.user.title.length!=0){
        console.log(`Title still not empty :(`)
    } else {
        console.log(`emptied title, fuck'em motherfuckers`)
    }
    } catch (error) {
        console.log(error)    
    }
}

GETemptyTitle()
PUTemptyTitle()

// let oneBearer = await 
// fetch(oathUrl,{
//     method: 'POST', 
//     headers: {"Authorization": `Basic ${basicAuth}`}
// }).then(response=>{if(response.ok){return response.json()} })
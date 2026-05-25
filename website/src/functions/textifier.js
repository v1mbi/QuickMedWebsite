export const Textifier = (ob)=>{
    let keys = Object.keys(ob)
    let values = Object.values(ob).map((item)=>{
        return String(item)
    })
    let message = "\n"
    for(let i=0;i< keys.length;i++){
        message += " " + keys[i] + " : " + values[i] + "\n"
    }
    return message
}

import DiscordJS, {MessageEmbed, Intents } from 'discord.js'
import dotenv from 'dotenv'
const express = require("express")
const creator = require("./commandcreator.ts")
const app = express()
const Datastore = require('nedb');
const db = new Datastore({filename: 'database.db'})
app.use(express.json())
const Processor = require("./processcommand.ts")
dotenv.config()
db.loadDatabase(function(err: string) {
    if(err){
  console.log("There was an error: " + err)
    }
  
})
const Client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})
Client.on("ready", () => {
console.log("The Bot Is Running")
Client.user!.setPresence({activities: [{name: 'Attacking all cheaters.'}], status: 'dnd'})
const GuildId = "875844961625591848"
const guild = Client.guilds.cache.get(GuildId)
let commands
if(guild){
    commands = guild.commands

}else{
    commands = Client.application?.commands
}
creator.createCommands(guild?.commands, DiscordJS)
})
Client.on("interactionCreate", async(interaction) => {
    if(!interaction.isCommand()){
        return
    }
    const {commandName, options} = interaction
    Processor.runCommand(commandName, options, interaction, db)
})
Client.on("messageCreate", (message) => {
    if(message.content === "ping"){
        message.reply({
            content: "pong",
        })
    }
})
Client.login(process.env.TOKEN)
app.post('/savedata', (req: any, res: any) => {
    if(req.body.SecurityKey = "ghuagkwhglkHGjaklghjlaghljh1jlhj3khlejkhJKGHJKgh.1"){
        db.findOne({_id: req.body.Key}, (err: any, docs: any) => {
if(err){
    console.log(err)



    
}else {
    if(docs === null){

         //INSERT CODE
      db.insert({_id: req.body.Key, value: req.body.Value}, (err: any, newDoc: any) => {
        if(err){
            res.send(err)
        }else{
            res.send("Success")
        }
              })
    }else{
        
//UPDATE CODE
db.remove({_id: req.body.Key}, {}, (err: any, numRemoved: any) => {
if(err){
    res.send(err)
    console.log(err)
}else{
    db.insert({_id: req.body.Key, value: req.body.Value}, (err: any, newDoc: any) => {
        if(err){
            res.send(err)
        }else{
            res.send("Success")
        }
              })
}
})

}
    
}})}})
app.post('/getdata', (req: any, res: any) => {
    if(req.body.SecurityKey = "ghuagkwhglkHGjaklghjlaghljh1jlhj3khlejkhJKGHJKgh.1"){
db.findOne({_id: req.body.Key}, (err: any, docs: any) => {
    if(err){
        res.send(err)
    }else{
        if(docs === null){res.send({Value: 0})}else{
        res.send({Value: docs.value})
        }
    }
})
    }});

    

    app.post('/pushmiles', (req: any, res: any) => {
        if(req.body.SecurityKey = "ghuagkwhglkHGjaklghjlaghljh1jlhj3khlejkhJKGHJKgh.1"){
   
        }});
app.listen(2223, function() {
  
})
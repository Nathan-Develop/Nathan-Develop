const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MEMBERS 

    ]
});

const prefix = "$";


Client.on("ready", () => {
    console.log("bot opérationel");
});


Client.on("messageCreate", message => {
    if(message.author.bot) return;

    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()

            .setTitle("Help menu")
            .setDescription("Toutes les commandes sont avec le symbole : $")
            .setColor("BLUE")
            .addField("$clear", "Permet de clear un nombre définit de message ($clear le nombre de message que vous souhaitez suprimer).")
            .addField("$staff1", "Le règlement discord.")
            .addField("$réseaux", "Les réseaux sociaux du créateur.")
            .addField("$ticket", "Les wl sont fermés.")
            .addField("$Daccepté", "Wl accepté.")
            .addField("$Drefusé", "Wl refusé")
            .addField("$modif", "Les modif du serv rp ou discord.")


        message.channel.send({embeds: [embed]});
    }
    if(message.content === prefix + "staff1"){
        const embed = new Discord.MessageEmbed()

            .setTitle("Le règlement discord :")
            .setColor("BLUE")
            .addField("En premier :", "Aucune insulte ne sera tolérée sur discord, nous ne somme pas des animaux !")
            .addField("En deuxième :", "Aucun propos a caractère sexuelle, raciste, homophobe ou antisémite ne sera accepter !")
            .addField("En troisième :", "Tout les membre du staff ne sont pas invincible ils sont comme vous donc si un staff vous manque de respect signaler le aux autres staffs et il sera réprimander !")
            .addField("En dernier :", "Pseudo unique !!")
            .setFooter("Ce règlement peut changer merci de regarder régulièrement.");

        message.channel.send({embeds: [embed]});
    }

    if(message.content === prefix + "réseaux"){
        const embed = new Discord.MessageEmbed()

            .setTitle("Les réseaux sociaux du créateur :")
            .setColor("BLUE")
            .addField("Mon twtich", "https://www.twitch.tv/nathan_develop")
            .addField("Mon discord", "https://discord.gg/ZurPTu6y7t")
            .addField("Ma chaîne youtube", "https://www.youtube.com/channel/UC8UJfWqTtl8U88K89gpXvtw")
            .setFooter("Bot crée par Nathan develop.");

        message.channel.send({embeds: [embed]});
    }

    if(message.content === prefix + "voiture"){
        const embed = new Discord.MessageEmbed()

            .setTitle("Les voitures du serveur :")
            .setColor("BLUE")
            .setDescription("**/car rmodbolide \n /car rmodbugatti \n /car rmode63z \n /car rmodlp770 \n /car rmodmk7 \n /car rmodrs6 \n /car rmodskyline34 \n /car rmodsuprapandem \n /car rs3 \n car rs666 \n /car rs7 \n /car rs72021 \n /car secrsub \n /car tmax \n /car tmaxDX \n /car trx \n /car tsup3 \n /car urus2018 \n /car vespa \n /car vip8 \n /car w_me_katana \n /car yz450f \n /car 18performante \n /car 2015wbpolstang \n /car 206gti \n /car 208 \n /car 4881 \n /car 600sel \n /car 911turbos \n /car a45 \n /car a45amg \n /car acs8 \n /car bcrzrxp \n /car bmci \n /car bmwx7 \n /car c10custom \n /car c63 \n /car cb500f \n /car chall70 \n /car cliov6 \n /car cls \n /car cls53 \n /car cobra \n /car code318charg \n /car code318tahoe \n /car code320exp \n /car code398cvpi \n /car code3bmw \n /car code3fpis \n /car code3ram \n /car DodgeEMS \n /car fct \n /car ferrari21 \n /car fulux21 \n /car ghispo2 \n /car golfgti \n /car hellcatlb \n /car kart \n /car luigikart7 \n /car m135iwb \n /car m4c \n /car m5e60 \n /car macla \n /car mbbs20 \n /car mers18 \n /car mlbrabus \n /car mustang19 \n /car mvisoingt \n /car ninjah2 \n /car pbike \n /car pfister_race \n /car punto \n /car q820 \n /car r8prior \n /car rmodbmwm8**")
            .setFooter("Bot crée par Nathan develop.");
            
            
            message.channel.send({embeds: [embed]});
    }
});

Client.on("messageCreate", message => {
    if(message.content === prefix + "ticket"){
        var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
                .setCustomId("open-ticket")
                .setLabel("ticket")
                .setStyle("PRIMARY")
            ).addComponents(new Discord.MessageButton()
                .setLabel("Ticket")
                .setStyle("LINK")
                .setURL("https://docs.google.com/forms/d/e/1FAIpQLSdwGdwdrNrQ6VBcDFUUH9KMBulhF1OoYH53eRpVeFPie3wU6A/viewform?usp=sf_link")
                
            );
        Client.channels.cache.get("989249480484323328").send({content: "apuie sur le truc"})
            message.channel.send({content: "message avec bouton", components: [row]});
    }
});


Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId == "bouton1"){
            interaction.reply("1");
        }
    }
});


var nbTicket = 0;

Client.on("interactionCreate", interaction => {
    if(interaction.isButton()){
        if(interaction.customId === "open-ticket"){}
    }
});

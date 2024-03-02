const prompt = require('prompt-sync')();
const api_url = "https://discord.com/api/v10/users/";
const pfp_url = "https://cdn.discordapp.com/avatars/";

function display_gui() {
    console.clear();
    console.log("\x1b[38;5;51m▓█████▄  ██▓  ██████  ▄████▄   ▒█████   ██▀███  ▓█████▄     ██▓▓█████▄     ██▓     ▒█████   ▒█████   ██ ▄█▀ █    ██  ██▓███  \n▒██▀ ██▌▓██▒▒██    ▒ ▒██▀ ▀█  ▒██▒  ██▒▓██ ▒ ██▒▒██▀ ██▌   ▓██▒▒██▀ ██▌   ▓██▒    ▒██▒  ██▒▒██▒  ██▒ ██▄█▒  ██  ▓██▒▓██░  ██▒\n░██   █▌▒██▒░ ▓██▄   ▒▓█    ▄ ▒██░  ██▒▓██ ░▄█ ▒░██   █▌   ▒██▒░██   █▌   ▒██░    ▒██░  ██▒▒██░  ██▒▓███▄░ ▓██  ▒██░▓██░ ██▓▒\n░▓█▄   ▌░██░  ▒   ██▒▒▓▓▄ ▄██▒▒██   ██░▒██▀▀█▄  ░▓█▄   ▌   ░██░░▓█▄   ▌   ▒██░    ▒██   ██░▒██   ██░▓██ █▄ ▓▓█  ░██░▒██▄█▓▒ ▒\n░▒████▓ ░██░▒██████▒▒▒ ▓███▀ ░░ ████▓▒░░██▓ ▒██▒░▒████▓    ░██░░▒████▓    ░██████▒░ ████▓▒░░ ████▓▒░▒██▒ █▄▒▒█████▓ ▒██▒ ░  ░\n ▒▒▓  ▒ ░▓  ▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░ ▒▒▓  ▒    ░▓   ▒▒▓  ▒    ░ ▒░▓  ░░ ▒░▒░▒░ ░ ▒░▒░▒░ ▒ ▒▒ ▓▒░▒▓▒ ▒ ▒ ▒▓▒░ ░  ░\n ░ ▒  ▒  ▒ ░░ ░▒  ░ ░  ░  ▒     ░ ▒ ▒░   ░▒ ░ ▒░ ░ ▒  ▒     ▒ ░ ░ ▒  ▒    ░ ░ ▒  ░  ░ ▒ ▒░   ░ ▒ ▒░ ░ ░▒ ▒░░░▒░ ░ ░ ░▒ ░     \n ░ ░  ░  ▒ ░░  ░  ░  ░        ░ ░ ░ ▒    ░░   ░  ░ ░  ░     ▒ ░ ░ ░  ░      ░ ░   ░ ░ ░ ▒  ░ ░ ░ ▒  ░ ░░ ░  ░░░ ░ ░ ░░       \n   ░     ░        ░  ░ ░          ░ ░     ░        ░        ░     ░           ░  ░    ░ ░      ░ ░  ░  ░      ░              \n ░                   ░                           ░              ░                                                            \n\x1b[0m");
    console.log("\n\t\t\t\t\t\x1b[35mBy SANAGO\x1b[0m\t\x1b[32mdiscord.gg/linuxfr\x1b[0m\n\n\n");
}

function display_datas(datas) {     
    console.log(`
        Username : ${datas.username}\n
        Display name : ${datas.global_name}\n
        Profil picture url : ${pfp_url}${datas.id}/${datas.avatar}\n
        Discord decorations : ${datas.avatar_decoration_data}\n
        Banner color : ${datas.banner_color}
    `);
}

async function main_loop() {
    display_gui();
    while (true) {
        let user_id = prompt("\x1b[33mEnter user id :\x1b[0m");
        let bot_token;
        bot_token = prompt("\x1b[33mEnter bot token :\x1b[0m");
        await fetch(`${api_url}${user_id}`, {
            headers: {
                "Content-Type": "application/json",
                "User-Agent":
                    "DiscordBot (https://git.dromzeh.dev/discord-lookup, 1.0.0)",
                Authorization: `Bot ${bot_token}`,
            },
        })
            .then((res) => res.json()).then((datas) => display_datas(datas))
            .catch((err) => console.log(`error : ${err}`))
    }
}

main_loop();
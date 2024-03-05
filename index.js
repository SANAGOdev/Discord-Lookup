const prompt = require('prompt-sync')();
const api_url = "https://discord.com/api/v10/users/";
const pfp_url = "https://cdn.discordapp.com/avatars/";

function display_gui() {
    console.clear();
    console.log("\x1b[38;5;51m▓█████▄  ██▓  ██████  ▄████▄   ▒█████   ██▀███  ▓█████▄     ██▓▓█████▄     ██▓     ▒█████   ▒█████   ██ ▄█▀ █    ██  ██▓███  \n▒██▀ ██▌▓██▒▒██    ▒ ▒██▀ ▀█  ▒██▒  ██▒▓██ ▒ ██▒▒██▀ ██▌   ▓██▒▒██▀ ██▌   ▓██▒    ▒██▒  ██▒▒██▒  ██▒ ██▄█▒  ██  ▓██▒▓██░  ██▒\n░██   █▌▒██▒░ ▓██▄   ▒▓█    ▄ ▒██░  ██▒▓██ ░▄█ ▒░██   █▌   ▒██▒░██   █▌   ▒██░    ▒██░  ██▒▒██░  ██▒▓███▄░ ▓██  ▒██░▓██░ ██▓▒\n░▓█▄   ▌░██░  ▒   ██▒▒▓▓▄ ▄██▒▒██   ██░▒██▀▀█▄  ░▓█▄   ▌   ░██░░▓█▄   ▌   ▒██░    ▒██   ██░▒██   ██░▓██ █▄ ▓▓█  ░██░▒██▄█▓▒ ▒\n░▒████▓ ░██░▒██████▒▒▒ ▓███▀ ░░ ████▓▒░░██▓ ▒██▒░▒████▓    ░██░░▒████▓    ░██████▒░ ████▓▒░░ ████▓▒░▒██▒ █▄▒▒█████▓ ▒██▒ ░  ░\n ▒▒▓  ▒ ░▓  ▒ ▒▓▒ ▒ ░░ ░▒ ▒  ░░ ▒░▒░▒░ ░ ▒▓ ░▒▓░ ▒▒▓  ▒    ░▓   ▒▒▓  ▒    ░ ▒░▓  ░░ ▒░▒░▒░ ░ ▒░▒░▒░ ▒ ▒▒ ▓▒░▒▓▒ ▒ ▒ ▒▓▒░ ░  ░\n ░ ▒  ▒  ▒ ░░ ░▒  ░ ░  ░  ▒     ░ ▒ ▒░   ░▒ ░ ▒░ ░ ▒  ▒     ▒ ░ ░ ▒  ▒    ░ ░ ▒  ░  ░ ▒ ▒░   ░ ▒ ▒░ ░ ░▒ ▒░░░▒░ ░ ░ ░▒ ░     \n ░ ░  ░  ▒ ░░  ░  ░  ░        ░ ░ ░ ▒    ░░   ░  ░ ░  ░     ▒ ░ ░ ░  ░      ░ ░   ░ ░ ░ ▒  ░ ░ ░ ▒  ░ ░░ ░  ░░░ ░ ░ ░░       \n   ░     ░        ░  ░ ░          ░ ░     ░        ░        ░     ░           ░  ░    ░ ░      ░ ░  ░  ░      ░              \n ░                   ░                           ░              ░                                                            \n\x1b[0m");
    console.log("\n\t\t\t\t\t\x1b[35mBy SANAGO\x1b[0m\t\x1b[32mdiscord.gg/linuxfr\x1b[0m\n\n\n");
}

function display_datas(datas) {     
    if (datas.premium_type == 0) {
        console.log(`
        \x1b[32mUsername : \x1b[0m${datas.username}\n
        \x1b[32mDisplay name : \x1b[0m${datas.global_name}\n
        \x1b[32mProfil picture url : \x1b[0m${pfp_url}${datas.id}/${datas.avatar}\n
        \x1b[32mDiscord decorations : \x1b[0m${datas.avatar_decoration_data}\n
        \x1b[32mBanner color : \x1b[0m${datas.banner_color}\n
        \x1b[32mNitro Type : \x1b[0mnull\n
        \x1b[32mPublic flags : \x1b[0m${datas.public_flags}\n
        `);
    } else if (datas.premium_type == 1) {
        console.log(`
        \x1b[32mUsername : \x1b[0m${datas.username}\n
        \x1b[32mDisplay name : \x1b[0m${datas.global_name}\n
        \x1b[32mProfil picture url : \x1b[0m${pfp_url}${datas.id}/${datas.avatar}\n
        \x1b[32mDiscord decorations : \x1b[0m${datas.avatar_decoration_data}\n
        \x1b[32mBanner color : \x1b[0m${datas.banner_color}\n
        \x1b[32mNitro type : \x1b[0mClassic\n
        \x1b[32mPublic flags : \x1b[0m${datas.public_flags}\n
        `);
    } else if (datas.premium_type == 2) {
        console.log(`
        \x1b[32mUsername : \x1b[0m${datas.username}\n
        \x1b[32mDisplay name : \x1b[0m${datas.global_name}\n
        \x1b[32mProfil picture url : \x1b[0m${pfp_url}${datas.id}/${datas.avatar}\n
        \x1b[32mDiscord decorations : \x1b[0m${datas.avatar_decoration_data}\n
        \x1b[32mBanner color : \x1b[0m${datas.banner_color}\n
        \x1b[32mNitro type : \x1b[0mBoost\n
        \x1b[32mPublic flags : \x1b[0m${datas.public_flags}\n
        `);
    } else {
        console.log(`
        \x1b[32mUsername : \x1b[0m${datas.username}\n
        \x1b[32mDisplay name : \x1b[0m${datas.global_name}\n
        \x1b[32mProfil picture url : \x1b[0m${pfp_url}${datas.id}/${datas.avatar}\n
        \x1b[32mDiscord decorations : \x1b[0m${datas.avatar_decoration_data}\n
        \x1b[32mBanner color : \x1b[0m${datas.banner_color}\n
        \x1b[32mNitro type : \x1b[0mBasic\n
        \x1b[32mPublic flags : \x1b[0m${datas.public_flags}\n
        `);
    }
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

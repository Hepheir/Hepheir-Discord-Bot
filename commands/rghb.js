module.exports = {
    name: 'rghb',
    description: '라고할뻔 ㅋㅋ! 를 달아드립니다. 명령어 뒤에 \'크게\'를 붙이면 더 커집니다.',
    aliases: ['라고할뻔', 'ㄺㅎㅃ', 'ㄹㄱㅎㅃ', '라고할뻔!', '라고할뻔ㅋㅋ', '라고할뻔ㅋㅋ!'],
    usage: "['크게', 'big', 'large', '짱크게', '짱커', '짱']",
    args: false,
    guildOnly: false,
    execute(message, args) {
        const reaction = '<a:ko_RGHB:806550357731442731>';
        const arguments = ['크게', 'big', 'large', '짱크게', '짱커', '짱'];
        
        if (args.length && arguments.includes(args[0])) {
            message.channel.send(reaction);
        } else {
            message.react(reaction);
        }
    },
};
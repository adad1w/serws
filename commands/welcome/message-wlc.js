const _0x3bfe62=_0x2b1b;(function(_0x362fed,_0x593c99){const _0x268dee=_0x2b1b,_0x422d46=_0x362fed();while(!![]){try{const _0x376d91=-parseInt(_0x268dee(0x9a))/0x1+-parseInt(_0x268dee(0xa7))/0x2+parseInt(_0x268dee(0xa5))/0x3+parseInt(_0x268dee(0xb6))/0x4*(-parseInt(_0x268dee(0xa1))/0x5)+parseInt(_0x268dee(0xae))/0x6*(-parseInt(_0x268dee(0xac))/0x7)+-parseInt(_0x268dee(0xa9))/0x8+parseInt(_0x268dee(0xa4))/0x9;if(_0x376d91===_0x593c99)break;else _0x422d46['push'](_0x422d46['shift']());}catch(_0x3f52ae){_0x422d46['push'](_0x422d46['shift']());}}}(_0x2d49,0x74e56));function _0x2d49(){const _0x3329d9=['**Type\x20the\x20welcome\x20message**','4218ThMPqI','messagew_','setTitle','setDescription','send','addField','guild','✅\x20Welcome\x20message\x20selected\x20:\x0a','1120zGqfcv','setColor','join','../../config.js','{prefix}message\x20wlc\x20[user],\x20invite:\x20[inviter]','quick.db','382606vPlCqs','DARK_NAVY','content','Example','set','owner','slice','5245mqptcR','split','{prefix}message\x20`[message\x20welcome]`','18029943PvJefF','2223345hJIIgS','massage\x20wlc\x20[user],\x20invite:\x20[inviter]','1631612ueBdjV','[user]\x20:\x20`Mentions\x20The\x20User`\x0a[username]\x20:\x20`No\x20Mentions\x20The\x20User`\x0a[inviter]\x20:\x20`Mentions\x20The\x20Inviter`\x0a[invitername]\x20:\x20`No\x20Mentions\x20The\x20invite`\x0a[sowner]\x20:\x20`Mentions\x20The\x20Ownership`\x0a[server]\x20:\x20`Type\x20The\x20Server\x20Name`\x0a[count]\x20:\x20`Shows\x20the\x20number\x20of\x20members`','2509936YnIZqe','channel','message-wlc','4578yGNpHY'];_0x2d49=function(){return _0x3329d9;};return _0x2d49();}function _0x2b1b(_0x13ad34,_0x32b8d7){const _0x2d49b4=_0x2d49();return _0x2b1b=function(_0x2b1b7d,_0x1a781d){_0x2b1b7d=_0x2b1b7d-0x95;let _0x2ba6e4=_0x2d49b4[_0x2b1b7d];return _0x2ba6e4;},_0x2b1b(_0x13ad34,_0x32b8d7);}const {MessageEmbed}=require('discord.js'),{QuickDB}=require(_0x3bfe62(0x99)),db=new QuickDB(),{prefix,owner}=require(_0x3bfe62(0x97));module['exports']={'name':_0x3bfe62(0xab),'description':'تحديد\x20رساله\x20الترحيب','aliases':[''],'usage':_0x3bfe62(0xa3),'examples':_0x3bfe62(0x98),'category':_0x3bfe62(0x9f),'botPermission':[],'authorPermission':[],'cooldowns':[],'ownerOnly':!![],'type':'welcome','run':async(_0xee8ba5,_0x39d7e4)=>{const _0xdcbdc8=_0x3bfe62;let _0x26ff9f=_0x39d7e4[_0xdcbdc8(0x9c)][_0xdcbdc8(0xa2)]('\x20')[_0xdcbdc8(0xa0)](0x1)[_0xdcbdc8(0x96)]('\x20');const _0x996f1d=new MessageEmbed()[_0xdcbdc8(0xb0)](_0xdcbdc8(0xad))[_0xdcbdc8(0x95)](_0xdcbdc8(0x9b))[_0xdcbdc8(0xb1)](_0xdcbdc8(0xa8))[_0xdcbdc8(0xb3)](_0xdcbdc8(0x9d),prefix+_0xdcbdc8(0xa6));if(!_0x26ff9f)return _0x39d7e4[_0xdcbdc8(0xaa)][_0xdcbdc8(0xb2)]({'embeds':[_0x996f1d]});const _0x2c94f8=new MessageEmbed()[_0xdcbdc8(0x95)](_0x39d7e4[_0xdcbdc8(0xb4)]['me']['displayHexColor'])[_0xdcbdc8(0xb1)](_0xdcbdc8(0xb5)+_0x26ff9f);await _0x39d7e4[_0xdcbdc8(0xaa)][_0xdcbdc8(0xb2)]({'embeds':[_0x2c94f8]}),await db[_0xdcbdc8(0x9e)](_0xdcbdc8(0xaf)+_0x39d7e4[_0xdcbdc8(0xb4)]['id'],_0x26ff9f);}};
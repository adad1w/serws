function _0x1a74(_0x590248, _0x45dc17) {
    const _0x325094 = _0x3250();
    return _0x1a74 = function (_0x1a74c2, _0x399834) {
        _0x1a74c2 = _0x1a74c2 - 0x173;
        let _0x2a2869 = _0x325094[_0x1a74c2];
        return _0x2a2869;
    }, _0x1a74(_0x590248, _0x45dc17);
}
const _0x4ba8cb = _0x1a74;
(function (_0xa542a1, _0x381215) {
    const _0x19ab28 = _0x1a74,
        _0x36ebf2 = _0xa542a1();
    while (!![]) {
        try {
            const _0x596f85 = -parseInt(_0x19ab28(0x185)) / 0x1 + -parseInt(_0x19ab28(0x177)) / 0x2 + -parseInt(_0x19ab28(0x176)) / 0x3 * (parseInt(_0x19ab28(0x175)) / 0x4) + -parseInt(_0x19ab28(0x198)) / 0x5 + parseInt(_0x19ab28(0x180)) / 0x6 * (-parseInt(_0x19ab28(0x19b)) / 0x7) + -parseInt(_0x19ab28(0x1a4)) / 0x8 * (parseInt(_0x19ab28(0x181)) / 0x9) + parseInt(_0x19ab28(0x1a1)) / 0xa * (parseInt(_0x19ab28(0x188)) / 0xb);
            if (_0x596f85 === _0x381215) break;
            else _0x36ebf2['push'](_0x36ebf2['shift']());
        } catch (_0x281bea) {
            _0x36ebf2['push'](_0x36ebf2['shift']());
        }
    }
}(_0x3250, 0xac17e));
function _0x3250() {
    const _0x5dfa1b = ['![lay]', 'exports', 'author', 'channel', 'addTrack', 'slice', 'reply', '2667715RHEuoB', 'discord-player', ':no_entry_sign: **You should type song name or url.**', '1015DWPkmU', 'EMBED_LINKS', ':no_entry_sign: **You must join a voice channel to use that!**', ':notes: **', '**Couldn\'t join your voice channel!**', 'voice', '290SneZiR', 'شغل', 'guild', '16lEoiWG', ':no_entry_sign: You must be listening in **', 'destroy', 'then', '3701244fKePNA', '3mDPZun', '2050628bIuwyN', 'addTracks', 'createQueue', 'Error at ', 'join', 'name', ':watch: Searching ... (`', 'play', 'edit', '47184AlROdy', '1130931CBQMYF', 'tracks', 'connection', 'log', '620635RxbeIK', 'info', 'AUTO', '1972905XqpyOe', 'playing', '** Added to **Queue** (', 'SEND_MESSAGES', 'error', 'title', 'playlist', 'member', '../../client/player'];
    _0x3250 = function () {
        return _0x5dfa1b;
    };
    return _0x3250();
}
const {
    QueryType
} = require(_0x4ba8cb(0x199)), player = require(_0x4ba8cb(0x190));
module[_0x4ba8cb(0x192)] = {
    'name': 'play',
    'aliases': ['p', _0x4ba8cb(0x1a2)],
    'description': 'play muisc',
    'usage': [_0x4ba8cb(0x191)],
    'category': _0x4ba8cb(0x186),
    'botPermission': [_0x4ba8cb(0x19c)],
    'authorPermission': [_0x4ba8cb(0x18b)],
    'cooldowns': [],
    'run': async (_0x21e78d, _0x1e85e9, _0x18f983) => {
        const _0x230d1d = _0x4ba8cb;
        if (!_0x1e85e9[_0x230d1d(0x18f)][_0x230d1d(0x1a0)]['channel']) return _0x1e85e9[_0x230d1d(0x197)]({
            'content': _0x230d1d(0x19d)
        });
        if (_0x1e85e9[_0x230d1d(0x1a3)]['me'][_0x230d1d(0x1a0)]?. [_0x230d1d(0x194)] && _0x1e85e9[_0x230d1d(0x18f)][_0x230d1d(0x1a0)][_0x230d1d(0x194)]['id'] !== _0x1e85e9['guild']['me']['voice'][_0x230d1d(0x194)]['id']) return _0x1e85e9['reply']({
            'content': _0x230d1d(0x1a5) + _0x1e85e9[_0x230d1d(0x1a3)]['me']['voice'][_0x230d1d(0x194)][_0x230d1d(0x17c)] + '** to use that!'
        });
        const _0x26f329 = _0x18f983[_0x230d1d(0x196)](0x0)[_0x230d1d(0x17b)](' ');
        if (!_0x26f329) return _0x1e85e9[_0x230d1d(0x197)]({
            'content': _0x230d1d(0x19a)
        });
        const _0x1ca484 = await player[_0x230d1d(0x179)](_0x1e85e9[_0x230d1d(0x1a3)], {
            'leaveOnEnd': !![],
            'leaveOnStop': !![],
            'metadata': {
                'channel': _0x1e85e9['channel'],
                'voice': _0x1e85e9[_0x230d1d(0x18f)][_0x230d1d(0x1a0)]['channel']
            }
        });
        try {
            if (!_0x1ca484[_0x230d1d(0x183)]) await _0x1ca484['connect'](_0x1e85e9['member'][_0x230d1d(0x1a0)][_0x230d1d(0x194)]);
        } catch {
            return _0x1ca484[_0x230d1d(0x173)](), await _0x1e85e9[_0x230d1d(0x197)]({
                'content': _0x230d1d(0x19f)
            });
        }
        _0x1e85e9[_0x230d1d(0x197)]({
            'content': _0x230d1d(0x17d) + _0x26f329 + '`)',
            'fetchReply': !![]
        })[_0x230d1d(0x174)](async _0x4ee9f3 => {
            const _0x3ca072 = _0x230d1d,
                _0x1d9776 = await player['search'](_0x26f329, {
                    'requestedBy': _0x1e85e9[_0x3ca072(0x193)],
                    'searchEngine': QueryType[_0x3ca072(0x187)]
                });
            if (!_0x1d9776[_0x3ca072(0x182)]['length']) return _0x4ee9f3[_0x3ca072(0x17f)]({
                'content': '**:mag: Not found.**'
            });
            _0x4ee9f3[_0x3ca072(0x17f)]({
                'content': _0x3ca072(0x19e) + _0x1d9776['tracks'][0x0][_0x3ca072(0x18d)] + _0x3ca072(0x18a) + _0x1d9776[_0x3ca072(0x182)][0x0]['duration'] + ')!'
            }), _0x1d9776[_0x3ca072(0x18e)] ? _0x1ca484[_0x3ca072(0x178)](_0x1d9776[_0x3ca072(0x182)]) : _0x1ca484[_0x3ca072(0x195)](_0x1d9776['tracks'][0x0]);
            if (!_0x1ca484[_0x3ca072(0x189)]) await _0x1ca484[_0x3ca072(0x17e)]();
            player['on'](_0x3ca072(0x18c), (_0x11069a, _0x47c7c1) => {
                const _0x331022 = _0x3ca072;
                console[_0x331022(0x184)](_0x331022(0x17a) + _0x11069a[_0x331022(0x1a3)]['id'] + ' | ' + _0x47c7c1['message']);
            });
        });
    }
};
var assert = chai.assert;

describe('Collect from Each Player Tests', function () {
    it('collects $50 from each player', function () {
        document.getElementById('playernumber').value = 3;
        setup();
        
        assert.deepEqual(player[2].money, 1500, "Player 2 starts with $1500");
        assert.deepEqual(player[3].money, 1500, "Player 3 starts with $1500");
        
        collectfromeachplayer(50, "Testing Fine");
        updateMoney();

        assert.deepEqual(player[2].money, 1450, "Player 2 ends with $1450");
        assert.deepEqual(player[3].money, 1450, "Player 3 ends with $1450");
    });

    it('adds the collections to the current player\'s account', function () {
        assert.deepEqual(player[turn].money, 1600, "Current player starts with $1600");
        
        collectfromeachplayer(50, "Testing Fine");
        updateMoney();

        assert.deepEqual(player[turn].money, 1700, "Current player ends with $1700");
    });

    it('removes exactly remaining money from players', function () {
        assert.deepEqual(player[2].money, 1400, "Player 2 starts with $1400");
        assert.deepEqual(player[3].money, 1400, "Player 3 starts with $1400");

        collectfromeachplayer(1400, "Broooooke");
        updateMoney();

        assert.deepEqual(player[2].money, 0, "Player 2 has no more money");
        assert.deepEqual(player[3].money, 0, "Player 3 has no more money");
    });

    it('collects exact amount of money from all players', function () {
        assert.deepEqual(player[turn].money, 4500, "Current player starts with $4500");

        collectfromeachplayer(1500, "Bork");
        updateMoney();

        assert.deepEqual(player[turn].money, 4500, "Current player ends with $4500");
    });

    it('requests more money than players have but collects total money', function () {
        assert.deepEqual(player[2].money, 0, "Player 2 starts with no money");
        assert.deepEqual(player[3].money, 0, "Player 3 starts with no money");
        
        collectfromeachplayer(2000, "Eeeeextraaaaa broooooke");
        updateMoney();

        assert.deepEqual(player[2].money, 0, "Player 2 ends with no money");
        assert.deepEqual(player[3].money, 0, "Player 3 ends with no money");
    });
});
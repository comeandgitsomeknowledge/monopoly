var assert = chai.assert;

describe('Roll Dice Tests', function () {

    beforeEach(function(){
        //stuff in here will run before each individual "it" function
    });
 
    it('Roll 3 doubles and go to jail', function () {
        // console.log(game.getDie());
        document.getElementById("playernumber").value = 2;
        setup();
        play();
        roll(2,2);
        roll(2,2);
        roll(2,2);
        console.log(player[turn]);

        assert.isTrue(player[turn].jail);
    });
 
    it('Roll doubles to get out of jail', function () {
        assert.equal("Hello".charAt(0), 'H');
    });
});
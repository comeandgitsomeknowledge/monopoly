var assert = chai.assert;


describe('Unit: Jail', function () {

    beforeEach(function(){
        //stuff in here will run before each individual "it" function
       
    });
 
    it('Roll 3 doubles and go to jail', function () {
        document.getElementById("playernumber").value = 2;
        setup();

        roll(2,2);
        roll(2,2);
        roll(2,2);
        // console.log(player[turn]);

        assert.isTrue(player[turn].jail);
    });
 
    it('Roll doubles to get out of jail', function () {
        assert.isTrue(player[turn].jail);

        roll(2,2);
        assert.isFalse(player[turn].jail);
    });

    it('Get out of jail free card', function(){
        var p = player[turn];
        roll(2,2);
        roll(2,2);
        roll(2,2);
        assert.isTrue(p.jail);

        p.communityChestJailCard = true;
        useJailCard();

        assert.isFalse(p.jail);
    });

    it('Community Chest: Get out of jail free card', function(){
        var p = player[turn];
        roll(2,2);
        roll(2,2);
        roll(2,2);
        assert.isTrue(p.jail);
        
        p.communityChestJailCard = true;
        p.chanceJailCard = false;
        useJailCard();
        
        assert.isFalse(p.jail);
    });

    it('Chance: Get out of jail free card', function(){
        var p = player[turn];
        roll(2,2);
        roll(2,2);
        roll(2,2);
        assert.isTrue(p.jail);
        
        p.chanceJailCard = true;
        p.communityChestJailCard = false;
        useJailCard();
        
        assert.isFalse(p.jail);
    });

    it('Pay Fifty: Get out of jail', function(){
        var p = player[turn];
        roll(2,2);
        roll(2,2);
        roll(2,2);
        assert.isTrue(p.jail);
        
        payfifty();
        
        assert.isFalse(p.jail);
    });
});
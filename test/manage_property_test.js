var assert = chai.assert;


describe('Unit: Managing Property', function () {

    beforeEach(function(){
        //stuff in here will run before each individual "it" function
       
    });
 
    it('House not built when whole color group not owned', function () {
        document.getElementById("playernumber").value = 2;
        setup();

        var p = player[turn];

        square[39].owner = turn;
        updateOwned();

        buyhousebtn = document.getElementById("buyhousebutton");

        assert.equal(buyhousebtn.disabled, true);
    });

    it('House built when whole color group owned', function () {
        // document.getElementById("playernumber").value = 2;
        // setup();

        var p = player[turn];

        // square[39].owner = turn;
        square[37].owner = turn;
        updateOwned();

        buyhousebtn = document.getElementById("buyhousebutton");

        assert.equal(buyhousebtn.disabled, false);

        document.getElementById("propertycheckbox37").checked = false;
        document.getElementById("propertycheckbox39").checked = true;
        buyhousebtn.click();

        assert.equal(square[39].house, 1);
    });

    it('House not built when other color group properties have less houses', function () {
        // document.getElementById("playernumber").value = 2;
        // setup();

        var p = player[turn];

        // square[39].owner = turn;
        // square[37].owner = turn;
        updateOwned();

        buyhousebtn = document.getElementById("buyhousebutton");

        assert.equal(buyhousebtn.disabled, true);
    });

    it('House can not be sold when other color group property has more houses', function () {
        // document.getElementById("playernumber").value = 2;
        // setup();

        var p = player[turn];

        square[39].owner = turn;
        square[37].owner = turn;
        updateOwned();

        buyhousebtn = document.getElementById("buyhousebutton");
        sellhousebtn = document.getElementById("sellhousebutton");

        document.getElementById("propertycheckbox39").checked = false;
        document.getElementById("propertycheckbox37").checked = true;
        updateOwned();
        updatePosition();

        buyhousebtn.click();

        assert.equal(square[37].house, 1);

        document.getElementById("propertycheckbox37").checked = false;
        document.getElementById("propertycheckbox39").checked = true;
        updateOwned();
        updatePosition();

        buyhousebtn.click();

        assert.equal(square[39].house, 2);

        document.getElementById("propertycheckbox37").checked = true;
        document.getElementById("propertycheckbox39").checked = false;
        updateOwned();
        updatePosition();

        sellhousebtn.click();

        assert.equal(square[37].house, 1);


        assert.equal(sellhousebtn.disabled, true);
    });

    it('Hotel can be built', function () {
        // document.getElementById("playernumber").value = 2;
        // setup();

        var p = player[turn];

        square[39].house = 4;
        square[37].house = 4;
        

        buyhousebtn = document.getElementById("buyhousebutton");

        document.getElementById("propertycheckbox37").checked = true;
        document.getElementById("propertycheckbox39").checked = false;
        updateOwned();
        updatePosition();

        assert.equal(buyhousebtn.disabled, false);

        buyhousebtn.click();

        assert.equal(square[37].hotel, 1);
    });
 
});
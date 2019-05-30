var assert = chai.assert;

describe('Advance to Nearest ____ Tests', function () {
    describe('Advance to Nearest Utility Tests', function () {
        it('moves to position 12 when position < 12', function () {
            document.getElementById('playernumber').value = 3;
            setup();
            play();
            player[turn].position = 10;

            assert.isTrue(player[turn].position < 12, "Current player should be at a position that is < 12");
            advanceToNearestUtility();
            assert.equal(player[turn].position, 12, "Current player should be moved to nearest utility with position 12");
        });

        it('moves to position 28 when position equals 12', function () {
            player[turn].position = 12;
            assert.equal(player[turn].position, 12, "Current player should be at position 12");
            advanceToNearestUtility();
            assert.equal(player[turn].position, 28, "Current player should be moved to nearest utility with position 28");
        });

        it('moves to position 28 when position > 12 but < 28', function () {
            player[turn].position = 20;
            assert.equal(player[turn].position, 20, "Current player should be at position 20");
            advanceToNearestUtility();
            assert.equal(player[turn].position, 28, "Current player should be at nearest utility with position 28");
        });

        it('moves to position 12 when position equals 28', function () {
            player[turn].position = 28;
            assert.equal(player[turn].position, 28, "Current player should be at position 28");
            advanceToNearestUtility();
            assert.equal(player[turn].position, 12, "Current player should be at utility with position 12");
        });

        it('moves to position 12 when position > 28', function () {
            player[turn].position = 30;
            assert.equal(player[turn].position, 30, "Current player should be at position 30");
            advanceToNearestUtility();
            assert.equal(player[turn].position, 12, "Current player should be at utility with position 12");
        });

        it('pays $200 for passing go when position >= 28', function () {
            player[turn].position = 30;
            assert.equal(player[turn].money, 400, "Current player should begin with $400");
            advanceToNearestUtility();
            updateMoney();
            assert.equal(player[turn].money, 600, "Current player should end with $600");
        });
    });
});
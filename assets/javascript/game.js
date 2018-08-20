// Javascript treats both "" and '' as Sting
        // But it is a good practise to use a '' for single letter
        // when used "" -> group of letters
        // when used '' -> single letter

        var alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

        // Choose an letter from alphabets array
        var storeplace = alphabets[Math.floor(Math.random() * 26)];

        var wins = 0;
        var gussesleft = 9;
        var losses = 0;

        var yourgussessofar = [];


        // e.key -> 'key' is a javascript provided variable that stores the key value ('a') when a user type letter 'a' on the keyboard.
        document.onkeyup = function (e)
 {
            yourgussessofar.push(e.key);
            if (storeplace === e.key) {
                wins += 1;
                // wins = wins + 1;
                // wins ++;

                // reset

                storeplace = alphabets[Math.floor(Math.random() * 26)];
                gussesleft = 9;
                yourgussessofar = [];
            }
            else {
                gussesleft -= 1;
                if (gussesleft == 0) {
                    losses += 1;
                    storeplace = alphabets[Math.floor(Math.random() * 26)];
                    gussesleft = 9;
                    yourgussessofar = [];
                }
            }

            document.getElementById("wins").innerHTML = wins
            document.getElementById("losses").innerHTML = losses
            document.getElementById("left").innerHTML = gussesleft
            document.getElementById("yourgussessofar").innerHTML = yourgussessofar

        }
        document.getElementById("wins").innerHTML = wins
        document.getElementById("losses").innerHTML = losses
        document.getElementById("left").innerHTML = gussesleft
        document.getElementById("yourgussessofar").innerHTML = yourgussessofar



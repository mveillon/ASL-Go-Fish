# ASL Go Fish
Hello! This is a simple UI for playing Go Fish with ASL words. You need to download this code to play along. To do so, click the green "Code" button on the right side of the screen. This will open a dropdown menu, where you need to click "Download ZIP". This will download a ZIP file to your downloads folder. Lastly, you need to unzip the folder, which you do just by double-clicking it, as if it were any other file that you were opening. Congratulations, you have the code! Now you just need to open the "OPEN ME.html" file, which will run the program.

Side note: I know it looks like there's only one file other than the README, and you may be wondering why you had to do all these GitHub nonsense. There's actually many files, but most of them are hidden, because aside from what I'm about to tell you, you really shouldn't be touching them :)

The code can only be programmed to use words from one lesson at a time, but these can be changed if we want to play this again in later lessons. To do so, I'd recommend asking me (Michael), but I'll also include instructions in here.

Firstly, you'll need to reveal the hidden files. This is simple enough to do: just navigate to the folder with "OPEN ME.html" and push CMD + Shift + . (the command key, the shift key, and the period key all at the same time). This will toggle whether you see hidden files with a Mac (this means you push the same hotkeys to hide the hidden files again). 

Now, inside the folder called ".src", there is a file called "words.js". Right click this, select "Open With" and click TextEdit. This file is where all the words go. If you ignore the first and last lines (`const allWords = [` and `];`), you'll notice they all have a similar formatting; all of the words are wrapped in single quotes (double quotes also work fine), and after the second quote for each word, there's a comma. The reasons for this are very program-y, but if you want to change the words, you need to follow this format. 

Once you've changed the words, run the "OPEN ME.html" file again. If it shows the words you've inputted, congratulations! You may have just completed your first bit of programming. If it doesn't work, again contact me (Michael) and ask, or open the console using the developer tools for a hint.

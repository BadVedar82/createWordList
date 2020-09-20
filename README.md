# createWordList
Create a word list from a Google Form-generated csv

## Usage
1. Create a form at https://docs.google.com/forms .  Each question should be a single word/phrase.
2. Send it out to your friends.
3. Download the results as a csv (input.csv in the example)
4. Run `node createWordList.js input.csv ~/Desktop/out.txt`, where `~/Desktop/out.txt` is the target file.
5. In OSX, the word list should now be copied to the clipboard!  Otherwise open up the file and copy and paste it.

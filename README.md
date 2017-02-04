# DiscordDelete
This will delete all discord messages from a server. Just input the correct information and throw it into the console in your developer panel (usually F12) and it should run without any issue.

# How To
In order to get this working, you will need a total of 2 things.

var channelid = 'YYYYYYYYYYYYYYYYY';
var authorization = 'mfa.sgdsgsdgdgdsgsdgerseggs.asdasfwetwesdgffweasfdf';

The Channel ID and the authorization code. (NOTE: The authorization code will allow others to delete messages regardless their power or role on the server. DO NOT SHARE.)

To get channel ID:
Go to the server and channel you would like to delete from and get the channel ID.
The one you need is: https://discordapp.com/channels/XXXXXXXXXXXXXXXXXX/YYYYYYYYYYYYYYYYY 
You need the YYYY portion of the link.

To get authorization code:
Open your developer panel, head on over to the network tab. Clear anything that is in the network tab. Delete ONE of the messages manually and you will see a deletion in the network tab. Click on it, and head on over to the headers tab in the expanded view. http://i.imgur.com/udxvod8.png

The authorization key should be a long string with periods randomly thrown in. Like "mfa.sgdsgsdgdgdsgsdgerseggs.asdasfwetwesdgffweasfdf"

Copy the autorization code and you're good to go.

# To Run
In order to run it, please make sure the variables are filled in. Once that is complete, you should be ready to go. Head on over to the console tab in the developer panel. Paste it in, and press enter. It should automatically go.

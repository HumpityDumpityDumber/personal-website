My New Dotfile Managing Strategy
Linux, Silly Ideas

## What am I talking about?
I stumbled across nomnoml diagrams when scrolling Obsidian community plugins and I was intrugued. This happens to me quite often when I have access to something like Obsidian plugins, the AUR, equicord/vencord plugins, etc. A bit of a side tangent but thats actually how I found the niri wayland compositor! Not really sure how this happened (i may have just been searching for the word wayland) but it popped up in yay, and with my infinite greed for the better option, I installed it.
Anywho. When I found nomnoml I wandered onto the [website](https://nomnoml.com) and left it to rest for almost a year, forgetting about it completely. Recently, when setting up obsidian on my new arch installation (as I do) I remembered nomnoml. As dotfile managing is at the top of the stack of random ideas that is my brain, I immediately thought: this looks kinda like a weird DSL? And it renders to a cool diagram aswell?

## My Idea
What if I write my configs in nomnoml? I could probably figure out how to define all the features of something even like KDL.
Obviously I can't be like "hey apps you need to read nomnoml now" so I have to build a script to parse the nomnoml and generate my configs. Isn't this literally just like using a dotfile manager and not serve much of a purpose? Well uhhh yeah 100% it is pretty much but I get a diagram so yeah I win.

## My Plan
nomnoml already has a library for reading nomnoml file (and resolving imports!) 
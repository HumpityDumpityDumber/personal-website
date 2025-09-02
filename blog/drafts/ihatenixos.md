My Extreme Hatred Towards NixOS
hatred, Linux

## When have I used NixOS?
Once. I was like "hey I kinda like the concept" and installed it on my main system, replacing arch. I got a grub theme working, added all my apps to configuration.nix (which I don't think you are even supposed to do?) and ran `nixos-rebuild switch`
All this took me at least a good 2 hours (probably more) because information on nixos online is confusing, doesn't even explain why I'm doing what I'm doing, and everyone contridicts each other constantly. I finally look at what my configuration created! Gnome with my apps installed. After my struggle even this was cool. No writing a long command to install some packages, realizing I had a typo, rerunning it, saying yes to a million prompts. It just all was there. Yes it literally took longer than all that but thinking I could slap this onto a new installation, a new computer even, and just have this with almost no work again, that was pretty cool. Until I tried to install a hyprland plugin like I did on Arch. Now arguably this was just user error, actually it really was. I tried to add a plugin with hyprpm and it just errored, same thing happened when I tried to run the equicord installer. At that point I assumed I would have to do more hacky things if I wanted any chance at a reproducable system that just worked to have all my things.

## Why was I so obsessed with reproducability?
It's the main selling point of NixOS. "Reproducable, declarative, immutable blah blah blah" I wanted that. Ive heard people say they don't have their entire nixos reproducable and I wouldn't be able to handle that. I reinstalled Arch because I was scared I deleted the wrong systemd unit. "that's fixed by nixos" Shut the fuck up. I'm extremely picky about certain things in relation to my installation. If reproducability is an option on the distro I'm on I need to have that perfected. Even the way I had my grub config set up on NixOS stressed me out. I need things working right and how they are supposed to, hacks genuinely cause me anxiety. Not having my entire NixOS installation reproducable just feels like a hack. I'm not doing what I'm "supposed to".

## Where does my hatred come from?

NixOS is 
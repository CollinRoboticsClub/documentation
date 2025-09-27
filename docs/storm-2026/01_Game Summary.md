- [V1 RULES](https://cdn.soonerrobotics.org/storm/rules/STORM_Rules_2026.pdf)
- [FIELD CAD](https://cad.onshape.com/documents/27daab121bdff62b53c28867/w/06f03db4b1ca7f48c9b9e6ac/e/0c23027072ad3689ce5a8325)

<!-- https://docusaurus.io/docs/markdown-features/assets#static-assets -->
<!-- Nvm i'll try it "normally": https://docusaurus.io/docs/markdown-features/assets#images -->
![3D Field View](./img/STORM%202025%203D%20Field%20View.png)

![Ways to Score](./img/STORM%202025%20Ways%20To%20Score.png)

## Josh's notes on the STORM autonomous world
- First 30 seconds is auto
- Start your autonomous sequence from a button on GUI, or single keypress

## Some basic new safety rules:
![New tech safety rules](./img/STORM%202025%20New%20safety%20rules.png)

## Scoring:
- Leaving the team zone during autonomous earns 3pts.
- In Auto, installing Batteries is worth 8pts and Kilojoules earned are doubled.

- BATTERIES:
	- Installing batteries is the same in all locations (even tho some slots are at different heights).
	- Batteries are a small PVC pipe (6" length, 1.25" dia).
	- You can hold 1 battery at a time.
	- Points from batteries also get you "Capacity". You get a big points boost at the end of each match which is equal to `min(kilojoules, capacity)`.
- EARNING KILOJOULES ("KJ")
	- GENERATE ELECTRICITY: 
		- Spin the wheels at a specific RPM (within +- 5rpm).
		- RPM is *randomized* for each match (20, 30, 40, and 50 rpm).
		- For every 2s it's spun, 1KJ is generated.
	- JUMPSTART THE GRID:
		- Apply a voltage to the Charging Pad (within +- 0.5V).
		- Also randomized for each match (2, 4, 6, 8, 10V).
		- If applied correctly, earn 5KJ.
		- Can be done once every 30s. Cooldown Timer starts whenever you do it  (i.e., *not* every 30 second interval).
- Avoid the Floodwater
	- Hang at end for 20pts.
	- \>12" off the Field gets additional 20pts.



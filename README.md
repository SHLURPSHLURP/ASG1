# ASG1
NieR: Automata- An Introduction.

This website has basic information on the game, enemy intel as well as game protagonists. It also has a cotact us page for feedback and a easily accessible link to download the game. The home page features a video preview of the game as well as other information like the game story and background. The navigation bar has a sound icon that plays music from the game when clicked. At the machine and protagonists tab, there is more information like individual enemy stories and where the enmy can be found. 

Design Process
This website is for any potential players who are interested in the game and who want to kniow more but do not want any substantial spoilers, and possibly want to download the game. Through this website, users who want to get an idea of what the game is like- gameplay, combat mechanics etc, as well as who they would be playing as and what kind of enemies they would be up against can read from the home page as well as the machine and protagonists page. Users who want an idea of what the game atmosphere would be like can use the sound button in the navigation bar to get a music preview. Users who want to provide feedback or ask questions can do this through the contact us page, and can find the social media page for game updates. Furthermore, users who want to download the game can do so throught the easily accessible "download" hyperlink that leads them to an external page to download the game.

the wireframes where i designed the website interface are here: https://www.figma.com/design/1M0sFWuqikbh8eV4hlEIsD/ID_S10265899G_GracieAriannePeh_Assg1_wireframe?node-id=0-1&t=V8oSIcbLIm2xvv3B-1

as well as some physical sketches where i did some brainstroming: https://docs.google.com/document/d/1WLrJKTWlYJPy4sSXyPeelrLZMHjkpukjwIO22Vh3jGY/edit?usp=sharing

Features
NAVIGATION BAR: from extreme left to right- game logo (leads you to home page), "machines" (leads you to the "standard" page by default), "protagonists", contact us. download (leads to extternal steam page to download game), sound icon (press to unmute/mute the background music)

HOME PAGE: navigation bar at the top, video that autoplays (no sound), some extra game info (including picture), footer

FOOTER: credits from game, universal navigation bar 

MACHINES: automatically leads you to "standard screen". after accessing this page, another side navigation bar appears where you can then access the "special units" page. bpth pages have the same features. users can quickly go to which enemy they want to view by clicking the button on the side navigation bar that when clicked, reveals a smaller navigaton bar that has links to different points on the page. 

PROTAGONISTS: users can quickly go to which character they want to view by clicking the side navigation bar that when clicked, links to that point on the page. 

CONTACT US: allows users to provide name, email and feedback (form validation done and working). however, the form cannot be submitted. allows users to access social media page by clicking the hyperlink which opens a new tab with the game social media

DOWNLOAD: allows users to download game by clicking the hyperlink which opens a new tab with external steam page

SOUND ICON: allows users to mute/unmute background music by clicking. music automatically mutes when site is opened.

Features Left to Implement: more transitions, a gallery with more pictures, videos from the game

Technologies Used
HTML
CSS
JAVASCRIPT
VS CODE
FIGMA
NORMALISE.CSS

Contact form:
Go to the "Contact Us" page
Try to submit the empty form and verify that an error message about the required fields appears-yes
Try to submit the form with an invalid email address and verify that a relevant error message appears-yes
Try to submit the form with all inputs valid and verify that a success message appears.-no
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes. website is not very optimised for different screen sizes. images (except on the special units page), however, will not warp when screen size is changed.

-images on the special units (machines-->special units) warp wierdly when screen is resized, even though it shares the same css code as the standard page.
-pressing submit in the form leads to an error message
-some images cant be resized (changing width:50% to width:100% does not do anything)
-hidden navigation bar does not appear even when the button is clicked (fixed)
-tried to sort all html files into one folder and normalise.css and main.css into one folder (changed all hyperlink file names from example.html to html/example.html) but didnt work (css styling no longer applied when the site went live)


Credits
Content
all the text where theres info about the game, game logo and game pictures are taken from:  https://nier.fandom.com/wiki/NieR:Automata
game video is taken from: https://www.youtube.com/watch?v=wJxNhJ8fjFk
code in css to remove scrollbar was from chatGPT

Acknowledgements
I received inspiration for this project from: https://hsr.hoyoverse.com/ua2?lp=sr03&utm_source=SEA_google_SEA_search_UA2_Brand&hoyotrace_channel=ga_channel&gad_source=1&gclid=CjwKCAiA0rW6BhAcEiwAQH28IuctUzTm0xKCA880QoH_IpxrrH3p5jWznRY0jNF7K6dZXFX0k7KTxBoCNOgQAvD_BwE

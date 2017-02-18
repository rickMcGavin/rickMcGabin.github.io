# Wikipedia Viewer

### A search UI utilizing wikipedia's API to display ten results of user-driven search.

This was one of my favorite projects from the intermediate challenge sections of freeCodeCamp, so once I completed my front end certification, I decided to upgrade it with some of my improved skills.

I coded my original with basic HTML, Bootstrap, and jQuery. I wanted to redo it with as few libraries/frameworks as possible. 

This version was coded with HTML, CSS, and Vanilla JavaScript. That said, I did utilize the sliding animations from [Animate.css](https://daneden.github.io/animate.css/). Since I knew I would only need 2 animations, I pulled them out of the entire file so as not to include code I was not using.

I replaced the use of fetch to [axios](https://github.com/mzabriskie/axios), which allowed the API call to be completed.

For reasons I cannot currently explain though, the CSS animations don't seem to really fire in mobile browsers. 

- [ ] remove rounded input boxes for mobile devices
- [ ] research and try to fix why css animations don't work on mobile/iOS devices
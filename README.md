<h2>Motivation</h2>
Consider an events you write to the console.log and you want to see the event flow vs time. Using a log file is not convient. A much better way is to see it graphically - and this is what i have done.

![ScreenShot](/images/display.png)

<h2>Usage</h2>
```
 <button onClick={() => eventLogger.addEvent("click1")}>Click1</button>
 <button onClick={() => eventLogger.addEvent("click2")}>Click2</button>
 <Events eventLogger={eventLogger} svgMaxTimeSec={15} />
```

<h2>Design</h2>
The design has two parts
<ul>
<li>Logic - implemented by eventLogger.js</li>
<li>View - implemented by Events.jsx using svg to show event points</li>
</ul>

<h2>Setup</h2>
<ul>
<li>npm i</li>
<li>npm run dev</li>
</ul>
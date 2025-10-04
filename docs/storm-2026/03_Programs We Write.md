# Programs We Write

### 1. Arduino/C++ code for the microcontroller
- <u>Possible Responsibilities:</u>
  - Setting drivetrain DC motor voltages, and reading their encoders.
    - Probably also their PID controls.
  - Setting stepper motor positions/speeds (for perhaps lift/spinnywheel)
  - Setting voltage for the charge pads
  - Reading any other encoder data
- <u>Programming Language:</u>
  - Written in C/C++ using the Arduino framework - but pretty easy C++ 😄 Programming 1 students can pick it up.

### 2. "Server" code on the Raspberry Pi on the bot
- <u>Possible Responsibilities:</u>
  - Autonomous planning: following a path, selecting red/blue team, selecting the `pad_voltage` and `wheel_RPM` for the match
  - Telling the Arduino what to do (ex.: Pi tells it to move backwards, so the Arduino sets the 4 motors to be at -10V)
  - Streaming all the cameras back to the driver station
  - Receiving controller input and other commands from the Client (see #3 below)
- <u>Programming Language:</u>
  - Can be written in any language. Python is fair! Last sem we used Kotlin and Python.
  - Example Python framework to help: [RTCBot](https://rtcbot.readthedocs.io/en/latest/examples/remotecontrol/README.html)

### 3. "Client" code on the Laptop - this is where the driver is. Tis a GUI!
- Here's my [UI Mockup](https://docs.google.com/presentation/d/16uvMm6rYv_J0msN8qPZQq8pTDy1lySPG2yX7DNMqpps).
- <u>Possible Responsibilities:</u>
  - This is also the "Driver station".
  - Driver would plug in their controller into this laptop, and view the camera streams and other sensor info via the GUI.
  - The Driver Station app would then take the controller inputs, and send those to the Pi's Server (from #2 above).
- <u>Programming Language:</u>
  - Can also be written in any language.
  - Last sem we used Kotlin and Python on the client as well, with a GUI in Kotlin (the Python one didn't have a GUI, just commandline).

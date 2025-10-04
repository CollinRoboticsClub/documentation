# Programming Notes
# Localization:
I've separated these into levels. We must do at least lvl 1, and ideally lvl 2.

1. well, simple timers i guess, to leave team zone:
```java
while (elapsedTime() < 5) {
	forward(0.5);
}
```

2. Encoders + gyro for simple movements
	- Impl PID `driveDistance()` and `turnBuAngle()` commands, which you then sequence together as such:
```java
// Assume this method gets triggered at the start of auto, and is expected to terminate in <=30 seconds.
void runAutonomous() {
    // Random fake example sequence.
    // Imagine that we've implemented each function below as a task that only returns once the action is complete.
	driveDistance(2.0); // drive forward 2 meters
    turnByAngle(90); // turn right 90 degrees
    driveDistance(1.0);
    turnByAngle(-90);
    driveDistance(3.0); // drive forward 3 meters to score zone
    score(); // score the game piece
}
```

3. Encoders + gyro for odometry (know your Pose2D at all times)

4. AprilTags
	- They're placed in front of all 5 scoring zones
	- CAN: Ignore them altogether 🥰
	- MUST: Recognize tag and simply pivot so that you're directly in front of them. Once PID::atSetpoint, you score
	- COULD: OpenCV SolvePnP. May try PhotonVision or similar pre-made AprilTag localization solution
		- *highkey overkill, on jah*

# Generate Electricity:
- Need to set a fixed RPM to a motor.
- MUST: SimpleMotorFeedForward
- COULD: PID loop, encoder, motor.
- OR EVEN BETTER: **STEPPER MOTOR!!!** yay!!
	- [Arduino Stepper Motor code example](https://docs.arduino.cc/learn/electronics/stepper-motors/#motorknob)
# Jumpstart the Grid
- Applying a voltage safely is cool (20mA output max, must be stoppable by operator)
- Going up to 10 volts... hm, a mere `analogWrite()` + boost converter?!
- Probably the single easiest task in-game.

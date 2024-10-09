class Vehicle {
    constructor(name, hp, topSpeed) {
        this.name = name;
        this.hp = hp;
        this.topSpeed = topSpeed;
        this.currentSpeed = 0.0;
        this.accelerating = false;
        this.braking = false;
        this.speedElement = document.getElementById("speed");

        document.getElementById("vehicle-name").textContent = `Vehicle: ${this.name}`;
    }

    // Method to start the vehicle (turn speed display green)
    start() {
        this.speedElement.style.color = "green";
    }

    // Accelerate the vehicle: Increase speed by hp/5 every 10ms
    accelerate() {
        this.accelerating = true;
        const acceleration = this.hp / 5;
        this.accelerateInterval = setInterval(() => {
            if (this.accelerating && this.currentSpeed < this.topSpeed) {
                this.currentSpeed = Math.min(this.currentSpeed + acceleration / 100, this.topSpeed);
                this.updateSpeedDisplay();
            }
        }, 10);
    }

    // Stop accelerating
    stopAccelerating() {
        this.accelerating = false;
        clearInterval(this.accelerateInterval);
    }

    // Brake the vehicle: Decrease speed by hp/2 every 10ms
    brake() {
        this.braking = true;
        const deceleration = this.hp / 2;
        this.brakeInterval = setInterval(() => {
            if (this.braking && this.currentSpeed > 0) {
                this.currentSpeed = Math.max(this.currentSpeed - deceleration / 100, 0);
                this.updateSpeedDisplay();
            }
        }, 10);
    }

    // Stop braking
    stopBraking() {
        this.braking = false;
        clearInterval(this.brakeInterval);
    }

    // Stop the vehicle and reset the speed to 0 (turn speed display red)
    stop() {
        clearInterval(this.accelerateInterval);
        clearInterval(this.brakeInterval);
        this.currentSpeed = 0.0;
        this.updateSpeedDisplay();
        this.speedElement.style.color = "red";
    }

    // Method to update the speed display with 1 decimal point precision
    updateSpeedDisplay() {
        this.speedElement.textContent = this.currentSpeed.toFixed(1);
    }
}

// Prompt user to enter vehicle details
const vehicleName = prompt("Enter the name of the vehicle:");
const vehicleHP = parseFloat(prompt("Enter the horsepower (hp) of the vehicle:"));
const vehicleTopSpeed = parseFloat(prompt("Enter the top speed (km/h) of the vehicle:"));

// Create a new vehicle instance
const vehicle = new Vehicle(vehicleName, vehicleHP, vehicleTopSpeed);

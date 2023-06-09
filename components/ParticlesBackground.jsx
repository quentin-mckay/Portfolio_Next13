'use client'

import dynamic from 'next/dynamic'

const Sketch = dynamic(() => import('react-p5'), {
    ssr: false,
})

// ====== UTILITY FUNCTIONS ======
// const random = (min, max) => {
// 	let range = max - min
// 	return min + (Math.random() * range)
// }

// const randomSpread = (range) => {
// 	return random(-range, range)
// }

// ====== VARIABLES ======
let q // global reference to p5 (arbitrary name)

const particles = []

let bgColor = 30

let particleSizeInit = 7
let lineDistance = 150

let throttleSpeed = 4 // lower the number => more particles

// variable used to throttle number of particles added from events
let mouseMovedCount = 0
let touchMovedCount = 0

// let hue = 0


class Particle {
    constructor() {
        this.x = q?.mouseX || 200
        this.y = q?.mouseY || 200

        // this.pos = q.createVector(q.mouseX, q.mouseY)

        this.size = q.random(1, 16) // random value between 1 and 6
        this.size = particleSizeInit

		// let spread = 1
        this.speedX = q.random(-1, 1)
        this.speedY = q.random(-1, 1)

        // this.color = `hsla(${hue}, 100%, 50%, 1)`
		// this.color = '#64ffda'
		this.color = q.color('#64ffda')
		// this.color.setAlpha(50)
    }

    update() {
        this.x += this.speedX
        this.y += this.speedY

        // this.pos.add

        if (this.size > 0.2) this.size -= 0.1 // shrink particle over time
    }

    draw() {
        q.fill(this.color)
        q.noStroke()
        q.ellipse(this.x, this.y, this.size)
    }
}

// function initParticles() {
// 	for (let i = 0; i < 100; i++) {
// 		particles.push(new Particle())
// 	}
// }

function updateAndDrawParticles() {
    for (let i = 0; i < particles.length; i++) {

        particles[i].update()
        particles[i].draw()

        // draw lines between nearby particles
        for (let j = i; j < particles.length; j++) {
            const dx = particles[j].x - particles[i].x
            const dy = particles[j].y - particles[i].y
            const distance = Math.sqrt(dx ** 2 + dy ** 2)

			// draw lines if under a certain distance
			if (distance < lineDistance) {
				let strokeAlpha = (particles[j].size / particleSizeInit) * 50
				q.stroke(255, strokeAlpha)
				// q.stroke(255, 50)
				q.line(particles[j].x, particles[j].y, particles[i].x, particles[i].y)
			}
        }

        // remove particles under a certain size
        if (particles[i].size <= 0.3) {
            particles.splice(i, 1)
            i-- // adjust index so we don't skip next element
        }
    }
}

const ParticlesBackground = () => {
    const setup = (c, canvasParentRef) => {
		// store p5 instance into a global variable
		// so it can be accessed from inside Particle class
        q = c

        c.createCanvas(c.windowWidth, c.windowHeight).parent(canvasParentRef)

		 // paint background on load
        c.background(bgColor)
    }

    

    const draw = (c) => {
        c.background(bgColor)
        // c.background(bgColor, 20)

        updateAndDrawParticles()

        // let v = c.createVector(c.mouseX, c.mouseY)

        // hue = (hue + 1) % 360
    }

    const mouseClicked = (c, event) => {
		// add a burst of particles
        // for (let i = 0; i < 10; i++) {
        //     particles.push(new Particle())
        // }
    }

    const mouseMoved = (c, event) => {
        // mousePos = c.createVector(c.mouseX, c.mouseY)
        // trails.push(mousePos)

		// add multiple particles
        // for (let i = 0; i < 2; i++) {
        // 	particles.push(new Particle())
        // }
		
		if (mouseMovedCount % throttleSpeed === 0) { // throttle the amount of particles added
			particles.push(new Particle())
		}

		mouseMovedCount++
    }

    
    const touchStarted = (c, event) => {
        // add multiple particles
        // for (let i = 0; i < 5; i++) {
        // 	particles.push(new Particle())
        // }
    }

    const touchMoved = (c, event) => {

        if (touchMovedCount % throttleSpeed === 0) { // throttle the amount of particles added
			particles.push(new Particle())
		}

		touchMovedCount++
    }


	function windowResized(c) {
        c.resizeCanvas(c.windowWidth, c.windowHeight)
    }

    return (
        <Sketch
            setup={setup}
            draw={draw}
            windowResized={windowResized}
            mouseClicked={mouseClicked}
            mouseMoved={mouseMoved}
            touchStarted={touchStarted}
            touchMoved={touchMoved}
        />
    )
}

export default ParticlesBackground

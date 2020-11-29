const colors = [
  "30362f",
  "625834",
  "a59132",
  "fffbdb",
  "da7422",
  "a1e8af",
  "d4d2d5",
  "e3dbdb",
  "947eb0",
  "a3a5c3",
]

export const uno = {
  nombre: "Tiled Lines",
  descripcion: "",
  render: (context, size) => {
    context.lineCap = "square"
    context.lineWidth = 2

    const draw = (x, y, width, height) => {
      const leftToRight = Math.random() >= 0.5
      if (leftToRight) {
        context.moveTo(x, y)
        context.lineTo(x + width, y + height)
      } else {
        context.moveTo(x + width, y)
        context.lineTo(x, y + height)
      }
    }
    const step = 20
    for (let x = 0; x < size; x += step) {
      for (let y = 0; y < size; y += step) {
        draw(x, y, step, step)
      }
    }
    context.stroke()
    context.restore()
  },
}

export const dos = {
  nombre: "Joy division",
  descripcion: "",
  render: (context, size) => {
    context.lineWidth = 2

    const step = 10
    const lines = []

    // Create the lines
    for (let i = step; i <= size - step; i += step) {
      const line = []
      for (let j = step; j <= size - step; j += step) {
        const distanceToCenter = Math.abs(j - size / 2)
        const variance = Math.max(size / 2 - 50 - distanceToCenter, 0)
        const random = ((Math.random() * variance) / 4) * -1
        const point = { x: j, y: i + random }
        line.push(point)
      }
      lines.push(line)
    }

    // draw
    for (var i = 10; i < lines.length - 10; i++) {
      context.beginPath()
      context.moveTo(lines[i][0].x, lines[i][0].y)

      for (var j = 0; j < lines[i].length - 2; j++) {
        var xc = (lines[i][j].x + lines[i][j + 1].x) / 2
        var yc = (lines[i][j].y + lines[i][j + 1].y) / 2
        context.quadraticCurveTo(lines[i][j].x, lines[i][j].y, xc, yc)
      }

      context.save()
      context.globalCompositeOperation = "destination-out"
      context.fill()
      context.restore()
      context.fillStyle = "#" + colors[i % colors.length]
      context.fill()
      context.stroke()
    }
  },
}

export const tres = {
  nombre: "Cubic Disarray",
  descripcion:
    "Georg Nees was one of the pioneers of computer art. Cubic disarray is a perfect example of how generative work can be simplistic and powerful at the same time.",
  render: (context, size) => {
    context.lineWidth = 2

    const squareSize = 30
    const randomDisplacement = 15
    const rotateMultiplier = 20
    const offset = 10

    function draw(width, height) {
      context.beginPath()
      context.fillStyle =
        "#" + colors[Math.round(Math.random() * colors.length)]
      context.fillRect(-width / 2, -height / 2, width, height)
      context.stroke()
    }

    for (let i = squareSize; i <= size - squareSize; i += squareSize) {
      for (let j = squareSize; j <= size - squareSize; j += squareSize) {
        let plusOrMinus = Math.random() < 0.5 ? -1 : 1
        const rotateAmt =
          (((j / size) * Math.PI) / 180) *
          plusOrMinus *
          Math.random() *
          rotateMultiplier

        plusOrMinus = Math.random() < 0.5 ? -1 : 1
        const translateAmt =
          (j / size) * plusOrMinus * Math.random() * randomDisplacement

        context.save()
        context.translate(i + translateAmt + offset, j + offset)
        context.rotate(rotateAmt)
        draw(squareSize, squareSize)
        context.restore()
      }
    }
  },
}

export const cuatro = {
  nombre: "Triangulos",
  render: (context, size) => {
    context.lineJoin = "bevel"

    let line,
      dot,
      odd = false
    const lines = [],
      gap = size / 7

    for (let y = gap / 2; y <= size; y += gap) {
      odd = !odd
      line = []
      for (let x = gap / 2; x <= size; x += gap) {
        dot = {
          x: x + (Math.random() * 0.8 - 0.4) * gap + (odd ? gap / 2 : 0),
          y: y + +(Math.random() * 0.8 - 0.4) * gap,
        }
        line.push(dot)
        context.beginPath()
        context.arc(dot.x, dot.y, 1, 0, 2 * Math.PI, true)
        context.fill()
      }
      lines.push(line)
    }

    function drawTriangle(pointA, pointB, pointC) {
      context.beginPath()
      context.moveTo(pointA.x, pointA.y)
      context.lineTo(pointB.x, pointB.y)
      context.lineTo(pointC.x, pointC.y)
      context.lineTo(pointA.x, pointA.y)
      const gray = Math.floor(Math.random() * 16).toString(16)
      context.fillStyle = "#" + gray + gray + gray
      context.fill()
      context.closePath()
      context.stroke()
    }

    let dotLine
    odd = true

    for (let y = 0; y < lines.length - 1; y++) {
      odd = !odd
      dotLine = []
      for (let i = 0; i < lines[y].length; i++) {
        dotLine.push(odd ? lines[y][i] : lines[y + 1][i])
        dotLine.push(odd ? lines[y + 1][i] : lines[y][i])
      }
      for (let j = 0; j < dotLine.length - 2; j++) {
        drawTriangle(dotLine[j], dotLine[j + 1], dotLine[j + 2])
      }
    }
  },
}

export const cinco = {
  nombre: "Un Deux Trois",
  descripcion: "Vera Molnár",
  render: (context, size) => {
    context.lineWidth = 4
    context.lineCap = "round"

    const step = 20
    const aThirdOfHeight = size / 3
    const draw = (x, y, width, height, positions) => {
      context.save()
      context.translate(x + width / 2, y + height / 2)
      context.rotate(Math.random() * 5)
      context.translate(-width / 2, -height / 2)

      context.beginPath()
      for (let i = 0; i <= positions.length; i++) {
        context.moveTo(positions[i] * width, 0)
        context.lineTo(positions[i] * width, height)
      }
      context.stroke()
      context.restore()
    }

    for (let y = step; y < size - step; y += step) {
      for (let x = step; x < size - step; x += step) {
        if (y < aThirdOfHeight) {
          draw(x, y, step, step, [0.5])
        } else if (y < aThirdOfHeight * 2) {
          draw(x, y, step, step, [0.2, 0.8])
        } else {
          draw(x, y, step, step, [0.1, 0.5, 0.9])
        }
      }
    }
  },
}

export const seis = {
  nombre: "Circulos",
  descripcion: "",
  render: (context, size) => {
    context.lineWidth = 2
    const circles = []
    const minRadius = 2
    const maxRadius = 100
    const totalCircles = 500
    const createCircleAttempts = 500

    const createAndDrawCircle = () => {
      const newCircle = {
        x: Math.floor(Math.random() * size),
        y: Math.floor(Math.random() * size),
        radius: minRadius,
      }
      let circleSafeToDraw = false

      for (let tries = 0; tries < createCircleAttempts; tries++) {
        newCircle.x = Math.floor(Math.random() * size)
        newCircle.y = Math.floor(Math.random() * size)
        if (!doesCircleHaveACollision(newCircle)) {
          circleSafeToDraw = true
          break
        }
      }
      if (!circleSafeToDraw) {
        return
      }

      for (let radiusSize = minRadius; radiusSize < maxRadius; radiusSize++) {
        newCircle.radius = radiusSize
        if (doesCircleHaveACollision(newCircle)) {
          newCircle.radius--
          break
        }
      }
      circles.push(newCircle)
      context.beginPath()
      context.fillStyle =
        "#" + colors[Math.round(Math.random() * colors.length)]
      context.arc(newCircle.x, newCircle.y, newCircle.radius, 0, 2 * Math.PI)
      context.fill()
    }

    const doesCircleHaveACollision = circle => {
      if (circle.x + circle.radius >= size || circle.x - circle.radius <= 0) {
        return true
      }

      if (circle.y + circle.radius >= size || circle.y - circle.radius <= 0) {
        return true
      }
      for (let i = 0; i < circles.length; i++) {
        let otherCircle = circles[i]
        const a = circle.radius + otherCircle.radius
        const x = circle.x - otherCircle.x
        const y = circle.y - otherCircle.y
        if (a * a >= x * x + y * y) {
          return true
        }
      }
      return false
    }

    for (let i = 0; i < totalCircles; i++) {
      createAndDrawCircle()
    }
  },
}

export const siete = {
  nombre: "Hypnotic Squares",
  descripcion:
    'William Kolomyjec was another great pioneer of generative art. This piece, "Hypnotic Squares", is a great example of recursion in action.',
  render: (context, size) => {
    context.lineWidth = 2
    const finalSize = 10
    const offset = 2
    const tileStep = (size - offset * 2) / 7
    const startSize = tileStep
    const directions = [-1, 0, 1]
    let startSteps

    const draw = (x, y, width, height, xMovement, yMovement, steps) => {
      context.beginPath()
      context.rect(x, y, width, height)
      context.fillStyle =
        "#" + colors[Math.round(Math.random() * colors.length)]
      context.fill()
      if (steps >= 0) {
        const newSize = startSize * (steps / startSteps) + finalSize
        let newX = x + (width - newSize) / 2
        let newY = y + (height - newSize) / 2
        newX = newX - ((x - newX) / (steps + 2)) * xMovement
        newY = newY - ((y - newY) / (steps + 2)) * yMovement

        draw(newX, newY, newSize, newSize, xMovement, yMovement, steps - 1)
      }
    }

    for (let x = offset; x < size - offset; x += tileStep) {
      for (let y = offset; y < size - offset; y += tileStep) {
        startSteps = 2 + Math.ceil(Math.random() * 3)
        const xDirection =
          directions[Math.floor(Math.random() * directions.length)]
        const yDirection =
          directions[Math.floor(Math.random() * directions.length)]
        draw(x, y, startSize, startSize, xDirection, yDirection, startSteps - 1)
      }
    }
  },
}

export const ocho = {
  nombre: "Mondrian",
  descripcion:
    "Un poco de codigo para tratar de generar algo parecido a las obras mas conocida de Piet, ",
  render: (context, size) => {
    context.lineWidth = 8

    const squares = [
      {
        x: 0,
        y: 0,
        width: size,
        height: size,
      },
    ]

    const splitSquaresWith = coordinates => {
      // Loops through the squares, and find if
      // one should be split
      const { x, y } = coordinates

      for (let i = squares.length - 1; i >= 0; i--) {
        const square = squares[i]
        if (x && x > square.x && x < square.x + square.width) {
          if (Math.random() > 0.5) {
            squares.splice(i, 1)
            squares.push(...splitOnX(square, x))
          }
        }

        if (y && y > square.y && y < square.y + square.height) {
          if (Math.random() > 0.5) {
            squares.splice(i, 1)
            squares.push(...splitOnY(square, y))
          }
        }
      }
    }

    const splitOnX = (square, splitAt) => {
      // Create two new squares, based on
      // splitting the given one at the
      // x coordinate given
      const squareA = {
        x: square.x,
        y: square.y,
        width: square.width - (square.width - splitAt + square.x),
        height: square.height,
      }

      const squareB = {
        x: splitAt,
        y: square.y,
        width: square.width - splitAt + square.x,
        height: square.height,
      }
      return [squareA, squareB]
    }

    const splitOnY = (square, splitAt) => {
      // Create two new squares, based on
      // splitting the given one at the
      // y coordinate given
      const squareA = {
        x: square.x,
        y: square.y,
        width: square.width,
        height: square.height - (square.height - splitAt + square.y),
      }

      const squareB = {
        x: square.x,
        y: splitAt,
        width: square.width,
        height: square.height - splitAt + square.y,
      }

      return [squareA, squareB]
    }

    const step = size / 6

    for (let i = 0; i < size; i += step) {
      splitSquaresWith({ x: i })
      splitSquaresWith({ y: i })
    }

    const white = "#F2F5F1"
    const colors = ["#D40920", "#1356A2", "#F7D842"]

    for (let i = 0; i < colors.length; i++) {
      squares[Math.floor(Math.random() * squares.length)].color = colors[i]
    }

    const draw = () => {
      squares.forEach(square => {
        context.beginPath()
        context.rect(square.x, square.y, square.width, square.height)
        context.fillStyle = square.color ?? white
        context.fill()
        context.stroke()
      })
    }
    draw()
  },
}

export default { uno, dos, tres, cuatro, cinco, seis, siete, ocho }

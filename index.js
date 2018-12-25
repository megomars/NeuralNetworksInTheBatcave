document.addEventListener("DOMContentLoaded", function(){

const net = new brain.NeuralNetwork({
hiddenLayers:[4]})

const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
]

net.train(trainingData)

document.getElementById("root").innerHTML=(net.run([0,0]))
});
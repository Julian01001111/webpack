'use strict'
var React = require('react')
var ReactDOM = require('react-dom')

console.log("Olá, server on-line... ")

var Title = require('./app')
ReactDOM.render(
    React.createElement(Title),
    document.querySelector('[data-js="app"]')
)


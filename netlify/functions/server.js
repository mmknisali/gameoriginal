const express = require('express');
const http = require('http');
const os = require('os');
const { Server } = require('socket.io');
const GameManager = require('./gameManager');

function getLanIPv4Addresses() {
  const nets = os.networkInterfaces();
  const ips = [];

  for (const name of Object.keys(nets)) {
    for (const net of nets[name] || []) {
      if (net && net.family === 'IPv4' && !net.internal) {
        ips.push(net.address);
      }
    }
  }

  return [...new Set(ips)];
}

exports.handler = async (event, context) => {
  // Netlify Functions don't support persistent servers, so use HTTP polling instead of WebSockets
  // This is a simplified version - for real multiplayer, consider external hosting

  const gameManager = new GameManager();

  if (event.httpMethod === 'POST' && event.path === '/.netlify/functions/server/create-game') {
    // Handle create game
    const body = JSON.parse(event.body);
    const { playerName, gameName, maxRounds, votingMode, cefrLevel, debug } = body;
    const settings = { maxRounds, votingMode, cefrLevel };
    const roomCode = gameManager.createGame(gameName, 'netlify', playerName, settings, null, debug);

    return {
      statusCode: 200,
      body: JSON.stringify({ roomCode, gameState: gameManager.getGame(roomCode).getState() }),
    };
  }

  // Add more endpoints for join, submit, etc. as needed

  return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Endpoint not found' }),
  };
};
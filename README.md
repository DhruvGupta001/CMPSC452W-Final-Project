Network Monitor
About

Welcome to the Network Monitor project! This simple yet handy tool helps you keep track of who's connected to your home network in real-time. It all started with the desire to know who's home without the need for constant interruptions or complicated setups.


Usage

The core of this project is the Python script check_connections.py, which uses ARP (Address Resolution Protocol) to identify devices on your network. You can customize its behavior using the following options:

    -h, --help: Show the help message and exit.
    -g G: Specify a gateway (default is 192.168.1.1).
    -f F: Specify a JSON file with device names and their corresponding MAC addresses (default is mac_addresses.json).
    -e E: Specify a text file containing MAC addresses to exclude from monitoring (default is blacklist.txt).

Feel free to adjust other settings within the script as well to suit your needs.


Mapping MAC Addresses

To make the tool more user-friendly, you can create a JSON file (mac_addresses.json) with device aliases and their respective MAC addresses:

json

[
{
"device": "Your Device Name",
"MAC": "00:11:22:33:44:55"
}
]

Blacklist

We've implemented a blacklist feature so you can exclude devices you don't want to monitor. Simply add their MAC addresses to the blacklist.txt file, with one address per line.


Security

The web application built with Node.js is password-protected via HTTP authentication. You can define authorized users in node_app/server.js:

javascript

// HTTP authentication
let auth = require("basic-auth");
let admins = { // Define admins here
'admin': { password: 'password' }
};

Getting Started

To get started, execute the entire application using Docker Compose. It will run on localhost:3000. Use the following command:

bash

docker-compose up --build

Enjoy knowing who's home at any time by simply accessing the web application at http://localhost:3000.
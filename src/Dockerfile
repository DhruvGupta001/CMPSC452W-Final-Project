FROM ubuntu:20.04
LABEL maintainer="Dhruv Gupta <guptadhruv2015@gmail.com>"

# Update package lists
RUN apt-get update

# Install Python 3 and pip for Python 3, along with tcpdump which is a dependency for scapy
RUN apt-get install -y python3 python3-pip tcpdump

# Upgrade pip to the latest version
RUN pip3 install --upgrade pip

# Install necessary Python packages including scapy and pyttsx3
RUN pip3 install scapy pyttsx3 requests

# Set the environment variable to avoid issues with terminal output inside Docker
ENV TERM xterm

# Create a directory for your script and resources
WORKDIR /src

# Copy your script and any other necessary files into the container
COPY ./ /src

# Define the command to run your Python script
# Ensure you use python3 to run the script
CMD ["python3", "check_connections.py", "-f", "/src/resources/mac_addresses.json", "-e", "/src/resources/blacklist.txt"]

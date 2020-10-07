# MQTT_Puppet
MQTT Based Puppeteer control using Raspberry Pi
In the puppet.js file, edit the MQTT IP and credentials to connect to your MQTT server.

______________________________________________________________________________________

Below are the instructions to start from scratch and get puppeteer running with MQTT

_______________________________________________________________________________________

1.	Setup the Raspberry Pi by downloading the latest raspbian image.
2.	Flash it onto an SD card.
3.	For headless setup:
      a.	Enable ssh, by creating an empty folder named ssh on the sd card.
      b.	Create a file called wpa_supplicant.conf and add the following commands to it
                    country=us
                    update_config=1
                    ctrl_interface=/var/run/wpa_supplicant

                    network={
                     scan_ssid=1
                     ssid="MyNetworkSSID"
                     psk="Pa55w0rd1234"
                    }

4.	Plug in the Raspberry Pi, and using Fing analyze your network for the IP address of the Raspberry Pi.
5.	SSH onto the Pi using pi@IP (password is raspberry)
6.	Next run the following commands to make sure the Pi is up to date.
            sudo apt-get update
            sudo apt-get upgrade
7.	Then run the following commands to get puppeteer and mqtt running:
                curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -
                sudo apt install nodejs
                sudo apt-get install gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget
                sudo apt-get --fix-broken install
                npm install puppeteer --verbose
                npm puppeteer -v
                npm install mqtt
8.	Download and run the puppet.js file on your Raspberry Pi terminal.
9.	Your puppeteer should now work with the MQTT input.

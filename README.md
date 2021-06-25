## About IoT Portal

IoT Portal is a web application that interacts with Intel In-band Manageability to provide remote over-the-air (OTA) updates to IoT devices. It supports Firmware OTA (FOTA), Software OTA (SOTA), Application OTA (AOTA) and Configuration OTA (COTA). 

- Supports FOTA, SOTA, AOTA and COTA features.
- Device categorization feature.
- Device grouping feature.
- Saved command feature.
- Mass OTA update feature.
- Robust Mass OTA background job processing.

## Requirements

- [Docker](https://www.docker.com/community-edition#/download)
- [Docker Compose](https://docs.docker.com/compose/install/) (already included with some Docker installations)

*These dependencies are free to use.*

## Installation

You can install IoT Portal using Docker containers on Linux distributions. Use the provided Bash scripts to get started quickly.

### Linux

Navigate to the `scripts` directory and give it permission to execute:

```
cd scripts && chmod +x *
```

Run the installation script. A `./iotportaldata` directory will be created.

```
./iotportal.sh install 
```

Finally, start your IoT Portal instance.

```
./iotportal.sh start 
```

Seed your database for first run.

```
./iotportal.sh seedDb 
```

To seed your database with sample data, run the command below. A random generated user will be created with the password defaulted to `password`.

*ONLY TRY THIS ON DEVELOPMENT INSTANCE! THIS IS FOR YOU TO EXPERIMENT THE FEATURES WITHOUT ACTUALLY PROVISIONING A DEVICE.*
```
./iotportal.sh seedDb 
```

## Script Commands Reference

Command | Description
---------------------- | ------------------------------------
install | Start the installer.
start | Start all containers.
restart	| Restart all containers (same as start).
stop | Stop all containers.
rebuild	| Rebuild generated installation assets.
migrateDb | Update/initialize the database.
seedDb | Seed all required data for first run.
seedDbSample | Seed the database with sample data. (Development use only)
clearDb | Clear the entire database. (Development use only)
help | List all commands.

*Use the commands cautiously. Some are intented for development purpose only.*

## Contributing

Thank you for considering contributing to the IoT Portal! PHPStorm is highly recommended if you are working on this project. Please commit any pull requests against the `master` branch.

## License

IoT Portal is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

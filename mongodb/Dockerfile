# Use the official MongoDB image as the base image
FROM mongo:latest

# Install MongoDB client tools
# RUN apt-get update && apt-get install -y mongodb-clients
RUN apt-get install -y mongodb-clients

# Ensure the MongoDB tools are in the PATH
ENV PATH /usr/bin:$PATH

# Copy the custom configuration file into the container
COPY mongo.conf /etc/mongo/mongo.conf

# Expose the default MongoDB port
EXPOSE 27017

# Run MongoDB with the custom configuration file
CMD ["mongod", "--config", "/etc/mongo/mongo.conf"]
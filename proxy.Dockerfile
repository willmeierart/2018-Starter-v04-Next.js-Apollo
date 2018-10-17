# Set nginx base image
FROM nginx


#what does this do?
# COPY docker-entrypoint.sh /
# ENTRYPOINT ["/docker-entrypoint.sh"]




# Copy custom configuration file from the current directory
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx.conf


VOLUME ["/etc/nginx/ssl", "/etc/nginx/psw"]

# Append "daemon off;" to the beginning of the configuration
# in order to avoid an exit of the container
RUN echo "daemon off;" >> /etc/nginx/conf.d/nginx.conf

# Expose ports
EXPOSE 443

# Define default command
CMD ["systemctl", "start", "nginx"]

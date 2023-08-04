import multiprocessing

# The address and port on which your application will be accessible
bind = '0.0.0.0:8000'

# The number of worker processes for handling incoming requests
workers = multiprocessing.cpu_count() * 2 + 1

# The maximum number of requests a worker will process before restarting
max_requests = 1000

# The maximum number of simultaneous clients each worker will allow
worker_connections = 1000

# The location of your Flask app's WSGI module
# Replace 'your_app_name' with the name of your Flask app's main module
# e.g., if your Flask app is defined in 'app.py', it would be 'app:app'
# app:app means the Flask app object is named 'app'
# You may need to adjust the path if your project structure is different
# from the root directory
wsgi_app = 'app:app'

# The directory where Gunicorn should temporarily store worker process
# communication files
worker_tmp_dir = '/dev/shm'

# Logging configuration (optional)
# Specify the log file path or '-' for stdout
accesslog = '-'  # Log to stdout
errorlog = '-'   # Log to stdout

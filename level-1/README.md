# Level-1 Log Truncation Script

## Overview

This Bash script helps you find the largest log file on your system, truncate it to the first 100 lines, and store the truncated content in a new file with a unique name.

## Prerequisites

- This script is written in Bash and is intended for Unix-like operating systems.
- Some commands within the script require superuser privileges, so ensure you have the necessary permissions.

## Usage

1. Download the `truncate_log.sh` script to your preferred directory.

2. Open a terminal and navigate to the directory containing the script:
```bash
cd /path/to/directory
``````

3. Run the script using the following command:
```bash
bash truncate_log.sh
```

4. The script will: 
- Search for the largest .log file on your system.
- Truncate the log file to the first 100 lines.
- Create a new file with a unique name containing the truncated content.

## Example Output

After running the script, you will see output similar to:
```bash 
Found the largest log file: /var/log/syslog
Log file truncated to 100 lines and stored in /path/to/directory/truncate_log_YYYYMMDD_HHMMSS.txt
```
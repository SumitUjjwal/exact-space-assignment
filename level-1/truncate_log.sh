#!/bin/bash

# Get the directory of the script
script_dir="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Find the largest log file
largest_log=$(sudo find "/" -name "*.log" -exec ls -l {} + 2>/dev/null | sort -k5 -rn | head -n 1 | awk '{print $9}')

if [ -n "$largest_log" ]; then
    echo "Found the largest log file: $largest_log"

    # Truncate the largest log file to 100 lines
    truncated_content=$(sudo tail -n 100 "$largest_log")

    # Create a new file to store the truncated content with an unique name
    current_date_time=$(date +"%Y%m%d_%H%M%S")
    new_file="$script_dir/truncate_log_$current_date_time.txt"
    echo "$truncated_content" | sudo tee "$new_file" > /dev/null

    echo "Log file truncated to 100 lines and stored in $new_file"
else
    echo "No log files found."
fi

$(function() {
    var socket = io.connect();
    var log_messages = []; // Array to store log messages

    // Function to update the log area with log messages
    function updateLogArea() {
        $('.log_area').empty();
        for (var i = 0; i < log_messages.length; i++) {
            $('.log_area').prepend("<p>" + log_messages[i] + "</p>");
        }
    }

    // new connection on network
    socket.on('new connection', function(data) {
        var found = false;
        $('.mac').each(function(i, obj) {
            // Check if device already exists in our collection
            if (data['mac'].trim() === $(obj).text().trim()) {
                // Get parent element
                var par = $(obj).parent();

                // Check if device is currently disconnected
                if (par.hasClass('disconnected')) {
                    par.removeClass('disconnected').addClass('connected');
                }

                // Update timestamp
                var $ts = par.find('.timestamp');
                $ts.hide();
                setTimeout(function() {
                    $ts.show();
                }, 1000);

                // Unknown devices treated as links for renaming purposes
                if (data['mac'].trim() === "UNKNOWN_DEVICE") {
                    par.find('.alias').html("<a href='#'>" + data['alias'] + "</a>");
                } else {
                    par.find('.alias').html("<p>" + data['alias'] + "</p>");
                }

                found = true;
            }
        });

        if (!found) {
            $('#devices_error').detach();

            $('#devices').append('<div class="device connected"><div class="alias"><p>' + data['alias'] +
                '</p></div><div class="ip"><p>' + data['ip'] + '</p></div><div class="mac"><p>' + data['mac'] +
                '</p></div><div class="timestamp"><p>' + data['timestamp'] + '</p></div></div>');

            var logMessage = new Date($.now()) + ": " + data['mac'] + " connected.";
            log_messages.push(logMessage);
            updateLogArea();
        }
    });

    // new disconnection on network
    socket.on('disconnection', function(data) {
        $('.mac').each(function(i, obj) {
            if (data['mac'] === $(obj).text().trim()) {
                var par = $(obj).parent();
                par.addClass('disconnected').removeClass('connected');
            }
        });

        var logMessage = new Date($.now()) + ": " + data['mac'] + " disconnected.";
        log_messages.push(logMessage);
        updateLogArea();
    });
});

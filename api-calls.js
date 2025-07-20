$(document).ready(function () {
    $.getJSON("http://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=raurutuchr&api_key=2ea65abb05390e2179793f51743f213e&limit=2&format=json&callback=?", function (data) {
        var html = '';
        var counter = 1;
        $.each(data.recenttracks.track, function (i, item) {
            if (counter == 1) {
                if (item['@attr'] && item['@attr']['nowplaying']) {
                    html += '<span class="currenttrack">is listening to</span> <span class="currenttrack"><a href="' + item.url + '" target="_blank">' + item.name + '</a> - ' + item.artist['#text'] + '&nbsp;</span>';
                }
            }
            counter++
        });
        $('#now-playing').html(html);
    });
});

$(document).ready(function () {
    $.ajax({
        url: "https://api.monkeytype.com/users/personalBests?mode=time",
        method: "GET",
        dataType: "json",
        headers: {
            "Authorization": "ApeKey Njg3YTYzOTA5OWVkMGE3ODVhNzkyMGNiLjd1aF9kUHZxcVlYb3J2NkhFZkFRRENfWGFWaUEzLThf"
        },
        success: function (data) {
            var wpm15 = data.data && data.data["15"] && data.data["15"][0] ? data.data["15"][0].wpm : null;
            var timestamp = data.data && data.data["15"] && data.data["15"][0] ? data.data["15"][0].timestamp : null;
            var dateStr = '';
            if (timestamp && !isNaN(Number(timestamp))) {
                var date = new Date(Number(timestamp));
                // Format as m/d/y
                dateStr = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
            }
            var html = '';
            html += '<span class="mt-small">knee hit a top typing speed of</span>';
            if (wpm15 !== null) {
                html += '<span class="mt-row"><span class="mt-wpm">' + wpm15 + ' wpm</span></span>';
                if (dateStr) {
                    html += '<span class="mt-date">on ' + dateStr + '</span>';
                }
            } else {
                html += '<span class="mt-row"><span class="mt-wpm">N/A</span></span>';
            }
            $('#monkeytype-15wpm').html(html);
        },
        error: function (xhr, status, error) {
            $('#monkeytype-15wpm').html('<span class="mt-small">knee hit a top typing speed of</span><span class="mt-row"><span class="mt-wpm">N/A</span></span>');
            console.error("API call failed:", error);
        }
    });
});

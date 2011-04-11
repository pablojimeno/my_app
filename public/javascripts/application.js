document.observe("dom:loaded", function() {
    wordCount();
    $('micropost_content').observe("keyup", function() { wordCount(); });
})
function wordCount() {
    var limit = 140;
    var count = $('micropost_content').getValue().length;
    $('tweet-count').update(limit - count);
    if ((limit - count) <= 20) {
        $('tweet-count').setStyle({ color: '#dd0000' });
    }
}


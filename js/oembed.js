document.addEventListener("DOMContentLoaded", function() {
    (function oembed(){
        var holders = document.getElementsByClassName("oembed-holder")

        function previewClicked(e) {
            var parent = e.target.parentNode
            for(var i=0; i < parent.children.length; i++) {
                var elem = parent.children[i]
                if(elem.getAttribute("data-content")) {
                    return parent.innerHTML = elem.getAttribute("data-content")
                        .replace(/ src="((?:https?:)\/\/[^\/]*)youtube\.com\//, ' src="$1youtube-nocookie.com/')
                }
            }
        }

        for (var i = 0; i < holders.length; i++) {
            var holder = holders[i]
            for(var j=0; j < holder.children.length; j++) {
                var elem = holder.children[j];
                elem.addEventListener('click', previewClicked)
            }
        }
    })();
});

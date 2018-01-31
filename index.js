$(document).ready(function() {
    $("form").submit(function() {
        var first = $(this)[0].first_name.value;
        var last = $(this)[0].last_name.value;
        var desc = $(this)[0].description.value;
        var lettersReg = new RegExp("^[a-zA-Z]+$");
        if (lettersReg.test(first) && lettersReg.test(last) && desc != "") {
            var container = document.createElement("div");
            var h1 = document.createElement("h1");
            var pMsg = document.createElement("p");
            var pDesc = document.createElement("p");

            container.classList.add("contact-container");
            h1.classList.add("contact-header");
            pMsg.classList.add("contact-click-msg");
            pDesc.classList.add("contact-description");

            h1.textContent = first + " " + last;
            pMsg.textContent = "Click for description!";
            pDesc.textContent = desc;
            pDesc.hidden = true;
            
            container.appendChild(h1);
            container.appendChild(pMsg);
            container.appendChild(pDesc);

            $("#user_col").append(container);

            $("input[type='text'").val("");
            $("textarea").val("");
        } else {
            alert("Please enter a valid first and last name, and a non-empty description.");
        }
        return false;
    });

    $(document).on("click", ".contact-container", function(ev) {
        $(this).children().toggle();
    });
});


/* <div class="contact-container">
<h1 class="contact-header">Michael Choi</h1>
<p class="contact-click-msg">Click for description!</p>
<p class="contact-description" hidden>I am Michael Choi, founder and teacher at Coding Dojo!</p>
</div> */
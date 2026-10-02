$(document).ready(function () {

    // SIMULATED SEARCH FEATURE
    // Get the submitted search phrase from the URL.
    const searchParams = new URLSearchParams(window.location.search);
    const searchPhrase = searchParams.get("q");

    // Only display results when the user has submitted a search.
    if (searchPhrase !== null) {
        if (searchPhrase.trim().toLowerCase() === "google") {

            // Display simulated results for the keyphrase "Google".
            $("#results-content").html(
                '<div class="search-result">' +
                    '<h3>Google</h3>' +
                    '<p><strong>Position:</strong> Software Engineer Intern</p>' +
                    '<p><strong>Deadline:</strong> October 15, 2026</p>' +
                    '<p><strong>Status:</strong> Applied</p>' +
                    '<a href="application-details.html">View Application</a>' +
                '</div>'
            );

        } else {

            // Display a friendly message when no results are found.
            $("#results-content").html(
                '<div class="no-results">' +
                    '<h3>No applications found</h3>' +
                    '<p>We could not find an application matching "' +
                    searchPhrase +
                    '". Try searching for Google.</p>' +
                '</div>'
            );
        }
    }


    // INTERACTION 1: DELETE AN APPLICATION
    // Event delegation handles clicks on Delete buttons in the table.
    $("tbody").on("click", ".delete-row-button", function () {

        // DOM traversal finds the row containing the clicked button.
        const applicationRow = $(this).closest("tr");

        // Find the company name inside that same row.
        const companyName = applicationRow
            .find("td:first")
            .text()
            .trim();

        // Modify the existing row and remove it from the table.
        applicationRow.fadeOut(400, function () {
            $(this).remove();
        });

        // Create a new confirmation message.
        const confirmationMessage = $("<p></p>")
            .addClass("success-message")
            .text(companyName + " was removed from your applications.");

        // Add the newly created element to the page.
        $("#application-message")
            .empty()
            .append(confirmationMessage);
    });


    // INTERACTION 2: UPDATE APPLICATION STATUS
    // The change event runs when the user selects a different status.
    $("#status-select").on("change", function () {

        const newStatus = $(this).val();

        // Modify the existing status displayed on the page.
        $("#current-status").text(newStatus);

        // Create a new confirmation message.
        const statusMessage = $("<p></p>")
            .addClass("success-message")
            .text("Status updated to " + newStatus + ".");

        // Add the newly created element to the page.
        $("#status-message")
            .empty()
            .append(statusMessage);
    });

});